import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faUserAstronaut } from "@fortawesome/pro-solid-svg-icons"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

import Navbar from "./navigation"

const DEFAULT_DESCRIPTION =
  "Launches and landings, to and from space! One central arrivals and departures board for all space flights, to inspire the next generation of space enthusiasts."

export default function Layout({
  children,
  home,
  title,
  description,
  keywords = [],
}: {
  children: React.ReactChild[]
  home?: boolean
  title?: string
  description?: string
  keywords?: Array<string>
}) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title ? `${title} - ` : ""}ARRDEP.SPACE</title>
        <meta
          key="og:title"
          property="og:title"
          content={`${title ? `${title} - ` : ""}ARRDEP.SPACE`}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={`${title ? `${title} - ` : ""}ARRDEP.SPACE`}
        ></meta>
        <meta
          key="description"
          name="description"
          content={description ? description : DEFAULT_DESCRIPTION}
        />
        <meta
          key="og:description"
          property="og:description"
          content={description ? description : DEFAULT_DESCRIPTION}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description ? description : DEFAULT_DESCRIPTION}
        />

        <meta
          key="keywords"
          name="keywords"
          content={keywords
            .concat([
              "space",
              "mission",
              "flight",
              "launch",
              "landing",
              "arrival",
              "departure",
              "rocket",
              "spaceport",
              "spaceship",
              "spacecraft",
              "date",
              "time",
              "schedule",
              "calendar",
            ])
            .join(",")}
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://og-image.now.sh/ARRDEP.SPACE.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
        />
        <meta
          key="twitter:image"
          property="twitter:image"
          content="https://og-image.now.sh/ARRDEP.SPACE.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
        />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navbar home={home} />
      </header>
      <main>{children}</main>
      <footer style={{ paddingTop: 50, textAlign: "center", color: "gray" }}>
        <p>
          Launches and landings, to and from space!
          <br />
          One central arrivals and departures board for all space flights,
          <br />
          to inspire the next generation of space enthusiasts.
        </p>
        <p>
          BSD-3 licensed. File bugs and PRs on{" "}
          <a
            id="footer_github"
            href="https://github.com/aldegoeij/arrdep.space/issues/"
            target="_blank"
            rel="nofollow noopener"
            aria-label="GitHub Issues Link"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          , get support on{" "}
          <a
            id="footer_twitter"
            href="https://twitter.com/ArrDepSpace"
            target="_blank"
            aria-label="Twitter Support Link"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          .
        </p>
        <p>
          Built with <FontAwesomeIcon icon={faHeart} /> for my two boys, hoping they will travel to
          space in their lifetime.
        </p>
        <p>
          Feel free to read our{" "}
          <Link href="/privacy" passHref>
            <a id="footer_privacy" aria-label="Privacy Policy">
              Privacy Policy
            </a>
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
