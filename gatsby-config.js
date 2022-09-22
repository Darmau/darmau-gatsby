require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['Article', 'Photograph', 'Video', 'CategoryArticle', 'CategoryPhoto', 'Tag'],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: `可可托海没有海`,
    siteUrl: `https://darmau.design`
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-ZS3N1LGHWZ"
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: strapiConfig,
    // },
  ]
};