import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

export default function Navigation({ home }: { home?: boolean }) {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: 50 }}>
      <Link href="/" passHref>
        <Navbar.Brand>ARRDEP.SPACE</Navbar.Brand>
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
    </Navbar>
  )
}
