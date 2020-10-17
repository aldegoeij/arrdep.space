import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Tabs, Tab, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// <FontAwesomeIcon icon={["fal", "coffee"]} />

const ArrDepTable = (data) => {
  return (
    <div style={{ paddingTop: 10 }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default function MainTable({ data }) {
  return (
    <div style={{ paddingTop: 50 }}>
      <Tabs defaultActiveKey="deps" id="arrdep">
        <Tab eventKey="arrs" title="ARRIVALS">
          <ArrDepTable data={data} />
        </Tab>
        <Tab eventKey="deps" title="DEPARTURES">
          <ArrDepTable data={data} />
        </Tab>
        <Tab eventKey="time" title="All" disabled>
          <ArrDepTable data={data} />
        </Tab>
      </Tabs>
    </div>
  )
}
