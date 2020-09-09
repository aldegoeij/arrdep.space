// .prettierrc.js
module.exports = {
  // Change your rules accordingly to your coding style preferencies.
  // https://prettier.io/docs/en/options.html
  semi: false,
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "all",
  overrides: [
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
}
