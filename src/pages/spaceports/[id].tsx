import * as fs from "fs"
import * as _ from "lodash"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout/layout"

import { GetStaticProps, GetStaticPaths } from "next"
import { getSpaceports, Spaceport } from "../../libs/api"

export default function SpaceportsOverview({ spaceport }: { spaceport: Spaceport }) {
  console.debug(spaceport)
  console.debug("hi")
  return (
    <Layout home>
      <Head>
        <title>{spaceport.name} - Spaceports</title>
      </Head>
      <h1>{spaceport.name}</h1>
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
      spaceport: spaceport[0],
    },
  }
}
