import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"
import { Table } from "react-bootstrap"
import Layout from "../components/layout/layout"
import MainTable from "../components/main-table"
import { GetArrDep } from "../libs/api"

function Home({ arrDepData }) {
  return (
    <Layout home>
      <Head>
        <title>ARRDEP.SPACE</title>
      </Head>
      <h1 style={{ paddingTop: 50, paddingBottom: 50 }}>
        Arrivals &amp; Departures ... from Space
      </h1>
      <MainTable data={arrDepData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const arrDepData = await GetArrDep()
  console.debug(arrDepData)
  return {
    props: {
      arrDepData,
    },
  }
}

export default Home
