import * as fs from "fs"
import * as _ from "lodash"
import Head from "next/head"
import Layout from "../../components/layout/layout"

import { GetStaticProps, GetStaticPaths } from "next"
import { getSpaceports, Spaceport } from "../../libs/api"

export default function SpaceportsOverview({ spaceports }: { spaceports: Spaceport[] }) {
  return (
    <Layout home>
      <Head>
        <title>Spaceports</title>
      </Head>
      <h1>Spaceports</h1>
      {spaceports.map((spaceport) => (
        <tr key={spaceport.id}>
          <td>{spaceport.name}</td>
        </tr>
      ))}
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

  return {
    props: {
      spaceports: apiData,
    },
  }
}
