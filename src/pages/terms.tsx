import { NextPage, GetStaticProps } from "next"

//utils
import { getHTML, MarkDownHTML } from "../utils/MarkDown"

//components
import Layout from "../components/Layout"
import HeadlineSection from "../components/HeadlineSection"
import { PageContentWrapper } from "../components/PageWrapper"
import { Markdown } from "../components/elements"

// USE terms.md TO CHANGE CONTENT OF THIS PAGE

export default function Terms({ pageData }: { pageData: MarkDownHTML }) {
  return (
    <Layout title={pageData.title}>
      <HeadlineSection
        align="left"
        title={pageData.title}
        subTitle={pageData.subTitle}
        paddingTop
      />
      <PageContentWrapper>
        <Markdown dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </PageContentWrapper>
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
