import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faUserAstronaut } from "@fortawesome/pro-solid-svg-icons"

import Navbar from "./navigation"

export default function Layout({
  children,
  home,
}: {
  children: React.ReactChild[]
  home?: boolean
}) {
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
        <Navbar home={home} />
      </header>
      <main>{children}</main>
      <footer style={{ paddingTop: 50, textAlign: "center", color: "gray" }}>
        <p>
          BSD-3 licensed. Issues and forking at{" "}
          <a
            id="footer_github_repo"
            href="https://github.com/aldegoeij/arrdep.space"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repository"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Built for my two boys <FontAwesomeIcon icon={faHeart} /> With hope they can space travel
          in their lifetime.
        </p>
        <p>
          Feel free to read our{" "}
          <Link href="/privacy" passHref>
            <a aria-label="Privacy Policy">Privacy Policy</a>
          </Link>
          , you&apos;ll find it's similar to everyone else&apos;s :)
        </p>
        <p>&nbsp;</p>
        <p>
          <FontAwesomeIcon icon={faUserAstronaut} size={"6x"} />
        </p>
        <p>&nbsp;</p>
      </footer>
    </Container>
  )
}
