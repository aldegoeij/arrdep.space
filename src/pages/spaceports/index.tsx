import * as fs from "fs"
import * as _ from "lodash"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout/layout"
import { Card, Table, Badge } from "react-bootstrap"

import { GetStaticProps, GetStaticPaths } from "next"
import { getSpaceports, Spaceport } from "../../libs/api"

export default function SpaceportsOverview({ spaceports }: { spaceports: Spaceport[] }) {
  return (
    <Layout home>
      <Head>
        <title>Spaceports</title>
      </Head>
      <h1>Spaceports</h1>
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
      <Table hover>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Country</th>
          <th>Status</th>
        </thead>
        <tbody>
          {spaceports.map((spaceport) => (
            <tr key={spaceport.id}>
              <td>{spaceport.id}</td>
              <td>
                <Link href={`/spaceports/${spaceport.id}`} passHref>
                  <a aria-label={spaceport.name}>{spaceport.name}</a>
                </Link>
              </td>
              <td>{spaceport.country || "unknown"}</td>
              <td>
                <Badge variant="secondary">{spaceport.status || "unknown"}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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
