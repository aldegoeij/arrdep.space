import * as React from "react"
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Layout, { siteTitle } from '../components/layout/layout'

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p>hi</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = []
  return {
    props: {
      allPostsData
    }
  }
}

export default Home