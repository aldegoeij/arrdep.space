import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextPageContext } from "next"
import Layout from "../components/layout/layout"
import MainTable from "../components/main-table"
import { GetArrDep } from "../libs/api"

export default function Home({ arrDepData }): React.ReactElement {
  return (
    <Layout home>
      <Head>
        <title>ARRDEP.SPACE</title>
      </Head>
      <h1>Arrivals &amp; Departures ... from Space</h1>
      <MainTable data={arrDepData} />
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

export const getStaticProps: GetStaticProps = async (context) => {
  const arrDepData = await GetArrDep()
  return {
    props: {
      arrDepData,
    },
  }
}
