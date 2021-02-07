import * as fs from "fs"
import * as _ from "lodash"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout/layout"
import { Card, Badge } from "react-bootstrap"

import { GetStaticProps, GetStaticPaths } from "next"
import { getSpaceports, Spaceport } from "../../libs/api"
import { StatusBadge, FlagIcon } from "../../components"

export default function SpaceportsOverview({ spaceport }: { spaceport: Spaceport }) {
  return (
    <Layout home>
      <Head>
        <title>{spaceport.name} - Spaceports</title>
      </Head>
      <h1>{spaceport.name}</h1>
      <h4>
        Country: <FlagIcon countryCode={spaceport.countryCode} /> {spaceport.country || "unknown"} |
        Status: <StatusBadge status={spaceport.status} /> |{" "}
        <a href={spaceport.wiki_url} aria-label="wikipedia link" target="_blank">
          Wikipedia
        </a>
      </h4>
      <p>&nbsp;</p>
      <Card>
        <Card.Body>
          A <strong>spaceport</strong> or <strong>cosmodrome</strong> is a site for launching (or
          receiving) spacecraft, by analogy to seaport for ships or airport for aircraft. The word
          spaceport, and even more so cosmodrome, has traditionally been used for sites capable of
          launching spacecraft into orbit around Earth or on interplanetary trajectories.
        </Card.Body>
        <Card.Footer>
          Source: <a href="https://en.wikipedia.org/wiki/Spaceport">Wikipedia</a>
        </Card.Footer>
      </Card>
      <p>&nbsp;</p>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apiData = JSON.parse(fs.readFileSync("./public/data/spaceports.json").toString())
  const paths = apiData.map((i: any) => ({ params: { ...i } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const apiData = await getSpaceports()
  const apiData = JSON.parse(fs.readFileSync("./public/data/spaceports.json").toString())
  const spaceport = apiData.filter((i: Spaceport) => i.id === params?.id)

  return {
    props: {
      spaceport: spaceport[0],
    },
  }
}
