require("dotenv").config();
const websiteSEO = require("./config/website-config");

module.exports = {
  siteMetadata: {
    siteUrl: websiteSEO.siteUrl,
    title: websiteSEO.title,
    titleTemplate: websiteSEO.titleTemplate,
    description: websiteSEO.description,
    url: websiteSEO.url,
    image: websiteSEO.image,
    twitterUsername: websiteSEO.twitterUsername,
    ogLanguage: websiteSEO.ogLanguage,
    siteLanguage: websiteSEO.siteLanguage,
    headline: websiteSEO.headline,
    keywords: websiteSEO.keywords,
  },
  plugins: [
    "gatsby-plugin-sharp",
    `gatsby-transformer-remark`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-slug",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.jpg",
        name: "Transport Data Services Nigeria",
        short_name: "TDS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./config/algolia-queries"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/uploads`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@design-system": "src/design-system",
          "@icons": "src/icons",
          "@misc": "src/misc",
          "@seo": "src/seo",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_posts/newsandmedia`,
        name: `newsandmedia`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-embed-video`,
          `gatsby-remark-images`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_posts/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_posts/events`,
        name: `events`,
      },
    },
  ],
};
