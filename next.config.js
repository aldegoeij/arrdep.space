// See: https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

// See: https://github.com/twopluszero/next-images
const withImages = require("next-images")

module.exports = withBundleAnalyzer(withImages({}))
