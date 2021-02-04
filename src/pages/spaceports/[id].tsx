import * as fs from "fs"
import * as _ from "lodash"
import Layout from "../components/layout/layout"

import { GetStaticProps, GetStaticPaths } from "next"
import { getSpaceports, Spaceport } from "../../libs/api"

export default function SpaceportsOverview({ spaceport }: { spaceport: Spaceport }) {
  return (
    <Layout home>
      <Head>
        <title>Spaceport: {spaceport.name}</title>
      </Head>
      <h1>Arrivals &amp; Departures ... from Space</h1>
      <MainTable data={apiData} />
      <h2 style={{ paddingTop: 50 }}>Sources</h2>
      <p>
        The launch data on this site is collected from multiple sources, at the moment 100% manual
        :)
      </p>
      <ol>
        <li>one</li>
      </ol>
      <h2 style={{ paddingTop: 50 }}>What&apos;s this all about?</h2>
      <p>Well..</p>
      <h2 style={{ paddingTop: 50 }}>Contributing</h2>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apiData = JSON.parse(fs.readFileSync("./public/api/spaceports.json").toString())
  const paths = apiData.map((i: any) => ({ params: { ...i } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apiData = await getSpaceports()
  const spaceport = apiData.filter((i) => i.id === params?.id)

  return {
    props: {
      spaceport,
    },
  }
}
