import { readFileSync } from "fs"
import { join as pathJoin } from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

export interface MarkDownHTML {
  id: string
  contentHtml: string
  [key: string]: any
}

export async function getHTML(id: string): Promise<MarkDownHTML> {
  const fullPath = pathJoin(process.cwd(), "src/content", `${id}.md`)
  const fileContents = readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()
  console.debug(`\nLoaded MarkDown for ${id}.md`)

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
