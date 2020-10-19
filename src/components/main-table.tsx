import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Tabs, Tab, Table, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpaceShuttle, faSatellite, faUserAstronaut } from "@fortawesome/pro-solid-svg-icons"
import { InfoCircle } from "./info-circle"
import { FlagIcon } from "./flag-icon"

// <FontAwesomeIcon icon={["fal", "coffee"]} />

const ArrDepTable = (data) => {
  return (
    <div style={{ paddingTop: 10 }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>
              Date <InfoCircle tip="Time and date of (scheduled) launch / landing." />
            </th>
            <th>
              Site <InfoCircle tip="Location of launch / landing." />
            </th>
            <th>
              Mission <InfoCircle tip="Short description of mission, click for more information." />
            </th>
            <th>
              Rocket <InfoCircle tip="Type of launching rocket / spacecraft." />
            </th>
            <th>
              Operator <InfoCircle tip="Operator of the launch / landing." />
            </th>
            <th>
              Status <InfoCircle tip="Status of the planned launch / landing." />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thu 23rd</td>
            <td>
              <FlagIcon countryCode="US" /> <span>Cape Canveral</span>
            </td>
            <td>
              {/* Mission type */}
              <FontAwesomeIcon icon={faSpaceShuttle} /> {/* Short mission description */}
              ISS Exp. 63 Landing
            </td>
            <td>Falcon 5 Heavy</td>
            <td>Space-X</td>
            <td>
              <Badge variant="secondary">CANCELLED</Badge>
            </td>
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
