import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
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
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Navigation({ home }: { home?: boolean }) {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: 50 }}>
      <Link href="/" passHref>
        <Navbar.Brand>
          <FontAwesomeIcon icon={faUserAstronaut} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/spaceports" passHref>
            <Nav.Link>Spaceports</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="https://twitter.com/arrdep.space" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </Nav.Link>
        </Nav>
        <Navbar.Text>
          <strong>ARRDEP . SPACE</strong>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}
