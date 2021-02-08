import * as fs from "fs"
import * as _ from "lodash"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout/layout"
import { Card, Table, Badge } from "react-bootstrap"

import { GetStaticProps, GetStaticPaths } from "next"
import { getSpaceports, Spaceport } from "../../libs/api"
import { StatusBadge, FlagIcon } from "../../components"

export default function SpaceportsOverview({ spaceports }: { spaceports: Spaceport[] }) {
  return (
    <Layout title="Spaceports" description="Growing list of spaceports on earth and known space ;)">
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
          Source:{" "}
          <a
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
              <td>
                <FlagIcon countryCode={spaceport.countryCode} /> {spaceport.country || "unknown"}
              </td>
              <td>
                <StatusBadge status={spaceport.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const apiData = await getSpaceports()
  const apiData = _.orderBy(
    JSON.parse(fs.readFileSync("./public/data/spaceports.json").toString()),
    "name",
  )
  return {
    props: {
      spaceports: apiData,
    },
  }
}
