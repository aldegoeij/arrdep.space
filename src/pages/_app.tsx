import * as React from "react"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import { MDXProvider } from "@mdx-js/react"
import { useEffect } from "react"
import { useRouter } from "next/router"
import * as gtag from "../utils/gtag"

import "../styles/global.css"

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <pre style={{ color: "tomato" }} {...props} />,
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
