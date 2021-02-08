import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Tabs, Tab, Table, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSpaceShuttle,
  faSatellite,
  faUserAstronaut,
  faGlobeAfrica,
  faSolarSystem,
  faStarship,
  faPoo,
} from "@fortawesome/pro-solid-svg-icons"
import { InfoCircle } from "./info-circle"
import { FlagIcon } from "./flag-icon"
import { APIData } from "../libs/api"
import { PayloadIcon } from "./payload-icon"

// <FontAwesomeIcon icon={["fal", "coffee"]} />

const ArrDepTable = ({ data }: { data: APIData }): React.ReactElement => {
  return (
    <div style={{ paddingTop: 10 }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>
              Date <InfoCircle tip="Time and date of (scheduled) launch / landing." />
            </th>
            <th>
              Earth Site <FontAwesomeIcon icon={faGlobeAfrica} />
            </th>
            <th>
              Space Site <FontAwesomeIcon icon={faSolarSystem} />
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
          {data.flights !== [] ? (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                <p>
                  <FontAwesomeIcon icon={faPoo} /> No flights currently in the database...
                </p>
                <p>
                  But check out our overview of{" "}
                  <Link href="/spaceports" passHref>
                    <a id="nodata_spaceports" aria-label="spaceports overview">
                      spaceports
                    </a>
                  </Link>
                  !
                </p>
              </td>
            </tr>
          ) : (
            data.flights.map((flight, idx) => {
              return (
                <tr key={idx.toString()}>
                  <td>{flight.dateTime}</td>
                  <td>
                    {/* Earth Site */}
                    <FlagIcon countryCode={flight.earthSiteCountryCode} />{" "}
                    <span>{flight.earthSite || "missing"}</span>
                  </td>
                  <td>
                    {/* Space Site */}
                    {flight.spaceSite?.toUpperCase() === "ISS" ? (
                      <FontAwesomeIcon icon={faStarship} />
                    ) : (
                      ""
                    )}{" "}
                    <span>{flight.spaceSite || "missing"}</span>
                  </td>
                  <td>
                    <div
                      style={{
                        width: 250,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {/* Mission type */}
                      <PayloadIcon payloadType={flight.payloadType} />{" "}
                      {/* Short mission description */}
                      <a
                        id="flight_details"
                        href={flight.detailsUrl || "#"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Flight Details URL"
                      >
                        {flight.details}
                      </a>
                    </div>
                  </td>
                  <td>Falcon 5 Heavy</td>
                  <td>
                    <a
                      id="operator_details"
                      href={flight.operatorUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Flight Details URL"
                    >
                      {flight.operator || "unkown"}
                    </a>
                  </td>
                  <td>
                    <Badge variant="primary">PLANNED</Badge>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default function MainTable({ data }: { data: APIData }): React.ReactElement {
  return (
    <div>
      <Tabs defaultActiveKey="all" id="arrdep">
        <Tab eventKey="arrs" title="ARRIVALS" disabled>
          <ArrDepTable data={data} />
        </Tab>
        <Tab eventKey="deps" title="DEPARTURES" disabled>
          <ArrDepTable data={data} />
        </Tab>
        <Tab eventKey="all" title="All">
          <ArrDepTable data={data} />
        </Tab>
      </Tabs>
    </div>
  )
}
