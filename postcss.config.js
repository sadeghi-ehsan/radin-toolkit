const url = require("postcss-url");
const importCss = require("postcss-import");
const tailwindNesting = require("@tailwindcss/nesting");
const variables = require("postcss-css-variables");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssNano = require("cssnano");
const replace = require("postcss-replace");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    importCss,
    variables,
    url({
      url: "rebase"
    }),
    replace({
      pattern: /~"(\S+?)"/g,
      data: { replaceAll: "$1" }
    }),
    tailwindNesting,
    tailwindcss,
    isProduction ? autoprefixer : null,
    isProduction ? cssNano({ preset: "default" }) : null
  ]
};
