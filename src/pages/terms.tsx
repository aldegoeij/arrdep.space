import { NextPage, GetStaticProps } from "next"
import Head from "next/head"

//utils
import { getHTML, MarkDownHTML } from "../utils/MarkDown"
import Layout from "../components/layout/layout"
import { Markdown } from "../components/elements"

// USE terms.md TO CHANGE CONTENT OF THIS PAGE

export default function Terms({ pageData }: { pageData: MarkDownHTML }) {
  return (
    <Layout>
      <Head>
        <title>{pageData.title || "Terms & Conditions"}</title>
      </Head>
      <h1>{pageData.title}</h1>
      {pageData.subTitle ? <h4>{pageData.subTitle}</h4> : ""}
      <p>&nbsp;</p>
      <Markdown dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      <p>&nbsp;</p>
    </Layout>
  )
}

interface Props {
  pageData?: MarkDownHTML
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageData = await getHTML("terms")
  return {
    props: {
      pageData,
    },
  }
}
