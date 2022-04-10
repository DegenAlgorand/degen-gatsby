/** @type {import('gatsby').GatsbyConfig} */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
      title: `Degen Token`,
    siteUrl: `https://www.degentoken.xyz`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: `gatsby-source-filesystem`,
    options: {
      "name": "posts",
      "path": "./src/posts/",
    },
  }, {
    resolve: "gatsby-plugin-page-creator",
    options: {
      "path": "./src/posts/",
    },
  }, {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      resetCSS: true,
      isUsingColorMode: true,
    },
  }]
};