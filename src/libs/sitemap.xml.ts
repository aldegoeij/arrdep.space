import { join as pathJoin } from "path"
import { readdirSync, writeFileSync } from "fs"

/**
 * Generate a sitemap.xml in ./out
 */
export function generateXML() {
  console.debug(`\nGenerating sitemap.xml in './out'...`)

  let xmlData = []
  xmlData.push(`<?xml version="1.0" encoding="UTF-8"?>\n`)
  xmlData.push(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`)

  const regex = /^([^_].*)\.(ts|tsx|js|jsx)$/

  for (const f of readdirSync(pathJoin(process.cwd(), "/src/pages"))) {
    const test = regex.test(f)
    const result = regex.exec(f)
    if (test) {
      xmlData.push(`
  <url>
    <loc>https://tracqapp.com/${result ? result[1] : "null"}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${result && result[1] === "index" ? "0.9" : "0.5"}</priority>
  </url>`)
    }
  }

  xmlData.push(`\n</urlset>`)

  writeFileSync(pathJoin(process.cwd(), "./public/") + "sitemap.xml", xmlData.join(""))

  return null
}

export default generateXML
