import * as fs from "fs"
import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextPageContext } from "next"
import Layout from "../components/layout/layout"
import MainTable from "../components/main-table"
import { getArrDeps, APIData } from "../libs/api"

export default function Home({ apiData }: { apiData: APIData }): React.ReactElement {
  return (
    <Layout home>
      <Head>
        <title>ARRDEP.SPACE</title>
      </Head>
      <h1>Arrivals &amp; Departures ... from Space!</h1>
      <MainTable data={apiData} />
      <p>&nbsp;</p>
      <h4>Sources:</h4>
      <p>
        The space flights launch and landing data on this site is collected from multiple{" "}
        <Link href="/sources" passHref>
          <a aria-label="data sources">sources</a>
        </Link>
        , at the moment 100% 'au manuel' :)
      </p>
      <p>&nbsp;</p>
      <h4>What&apos;s this all about?</h4>
      <p>
        Well... I'm a space-fan and could not find any place on the internet that shows all launches
        (and landings) in one place so I could show my two little boys what cool things humans are
        doing on this planet.
      </p>
      <h4>Contributing</h4>
      <p>
        The source code for this repo ~is~ will soon be open source on GitHub, so file and issue if
        you find a bug or have an improvement for the UI, and if you're interested in contributing
        to the data gathering and/or API behind this site, reach out on Twitter DM.
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Generate sitemap for entire site
  const { generateXML } = require("../libs/sitemap.xml")
  generateXML()

  // const apiData = await getArrDeps()
  const apiData = JSON.parse(fs.readFileSync("./public/api/flights.json").toString())

  return {
    props: {
      apiData,
    },
  }
}
