import * as fs from "fs"
import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextPageContext } from "next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocketLaunch } from "@fortawesome/pro-solid-svg-icons"

import Layout from "../components/layout/layout"
import MainTable from "../components/main-table"
import { getArrDeps, APIData } from "../libs/api"

export default function Home({ apiData }: { apiData: APIData }): React.ReactElement {
  return (
    <Layout home>
      <h1>Arrivals &amp; Departures ... from Space!</h1>
      <p>
        Launches and landings, to and from space! One central arrivals and departures board for all
        space flights, to inspire the next generation of space enthusiasts{" "}
        <FontAwesomeIcon icon={faRocketLaunch} />
      </p>
      <p>&nbsp;</p>
      <MainTable data={apiData} />
      <p>&nbsp;</p>
      <h4>Sources:</h4>
      <p>
        The space flights launch and landing data on this site is collected from multiple{" "}
        <Link href="/sources" passHref>
          <a id="homepage_sources" aria-label="data sources">
            sources
          </a>
        </Link>
        , at the moment 100% 'au manuel' :)
      </p>
      <p>&nbsp;</p>
      <h4>What&apos;s this all about?</h4>
      <p>
        Well... I wanted to tell my two boys what the next flight to space was going to be and could
        not find any place on the internet that shows all launches (and landings) to and from space
        in one clear overview, so I decided to built it myself :P
      </p>
      <p>
        This website with arrivals and departures board and links to spaceports on Earth and known
        space is the initial result! We're planning on adding more details about space operators,
        rocket types used to push payloads to space and much more.
      </p>
      <p>Check back soon ;)</p>
      <p>&nbsp;</p>
      <h4>Contributing</h4>
      <p>
        The source code for this website will soon be open sourced on GitHub, so{" "}
        <a
          id="homepage_github_issue"
          href="https://github.com/aldegoeij/arrdep.space/issues/new"
          target="_blank"
          rel="noopener"
          aria-label="GitHub Issues Link"
        >
          file an issue
        </a>{" "}
        if you find a bug, or fork the repo and submit a Pull Request! And if you're interested in
        contributing to the data gathering and/or API behind this site, reach out on{" "}
        <a
          id="homepage_twitter_support"
          href="https://twitter.com/messages/compose?recipient_id=1358400277964083204"
          target="_blank"
          rel="noopener"
          aria-label="Twitter Support Link"
        >
          Twitter Direct Message
        </a>
        . Looking forward to hearing from you!
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const apiData = await getArrDeps()
  const apiData = JSON.parse(fs.readFileSync("./public/data/flights.json").toString())

  return {
    props: {
      apiData,
    },
  }
}
