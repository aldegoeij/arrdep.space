// https://github.com/cyrilwanner/next-compose-plugins
const withPlugins = require("next-compose-plugins")

// See: https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

// see: https://mdxjs.com/getting-started/next
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

// See: https://github.com/twopluszero/next-images
const withImages = require("next-images")

module.exports = withBundleAnalyzer(
  withImages(
    withMDX({
      pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    }),
  ),
)
