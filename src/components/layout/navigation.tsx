import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserAstronaut } from "@fortawesome/pro-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Navigation({ home }: { home?: boolean }) {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: 50 }}>
      <Link href="/" passHref>
        <Navbar.Brand id="nav_brand" aria-label="Home Page">
          <FontAwesomeIcon icon={faUserAstronaut} size={"2x"} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link href="/" passHref>
            <Nav.Link id="nav_home" aria-label="Home Page">
              Home
            </Nav.Link>
          </Link>
          <Link href="/spaceports" passHref>
            <Nav.Link id="nav_spaceports" aria-label="Spaceports List Page">
              Spaceports
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link
            id="nav_twitter"
            href="https://twitter.com/ArrDepSpace"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Link"
          >
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
