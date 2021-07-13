import * as fs from "fs"
import * as _ from "lodash"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout/layout"
import { Row, Col, Card, Badge, Image } from "react-bootstrap"
import wiki, { Page } from "wikijs"

import { GetStaticProps, GetStaticPaths } from "next"
import { getSpaceports, Spaceport } from "../../libs/api"
import { StatusBadge, FlagIcon } from "../../components"

export default function SpaceportPage({
  spaceport,
  wikiPage,
}: {
  spaceport: Spaceport
  wikiPage: Page
}) {
  return (
    <Layout
      title={spaceport.name}
      description={`Spaceport information for ${spaceport.name}${
        spaceport.country ? `, located in ${spaceport.country}.` : "."
      }`}
      keywords={spaceport.country ? [spaceport.country] : []}
    >
      <h1>{spaceport.name}</h1>
      <h4>
        Country: <FlagIcon countryCode={spaceport.countryCode} /> {spaceport.country || "unknown"} |
        Status: <StatusBadge status={spaceport.status} /> |{" "}
        <a
          id="spaceport_wikipedia"
          href={spaceport.wiki_url}
          aria-label="wikipedia link"
          target="_blank"
          rel="nofollow noopener"
        >
          Wikipedia
        </a>
      </h4>
      <p>&nbsp;</p>
      <Card>
        <Card.Body>
          <Row>
            <Col md={8}>
              {wikiPage.summary
                ?.toString()
                .split("\n")
                .map((p, i) => <p key={i}>{p}</p>) ||
                "A <strong>spaceport</strong> or <strong>cosmodrome</strong> is a site for launching (or \
          receiving) spacecraft, by analogy to seaport for ships or airport for aircraft. The word \
          spaceport, and even more so cosmodrome, has traditionally been used for sites capable of \
          launching spacecraft into orbit around Earth or on interplanetary trajectories."}
            </Col>
            <Col md={4}>
              <Image
                src={wikiPage.mainImage?.toString() || "/assets/spaceport.png"}
                width={"100%"}
              />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          Source:{" "}
          <a
            id="spaceports_wikipedia"
            href="https://en.wikipedia.org/wiki/Spaceport"
            target="_blank"
            aria-label="Wikipedia Link"
            rel="nofollow noopener"
          >
            Wikipedia
          </a>
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

  const wikiData = await wiki({
    headers: {
      "User-Agent": "ArrDepSpace/1.0 (https://arrdep.space/support; mail@aldg.nl) arrdep-space/1.0",
    },
  }).page(spaceport[0].wiki_slug)

  return {
    props: {
      spaceport: spaceport[0],
      wikiPage: {
        summary: (await wikiData.summary()) || null,
        mainImage: (await wikiData.mainImage()) || null,
      },
    },
  }
}
