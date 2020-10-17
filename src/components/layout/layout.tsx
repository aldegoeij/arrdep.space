import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Container } from "react-bootstrap"

import Navbar from "./navigation"

export default function Layout({ children, home }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content="https://og-image.now.sh/ARRDEP.SPACE.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
        />
        <meta name="og:title" content="ARRDEP.SPACE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <p style={{ textAlign: "center" }}>
          BSD-3 licensed. Issues and forking at{" "}
          <a href="https://github.com/aldegoeij/arrdep.space" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </footer>
    </Container>
  )
}
