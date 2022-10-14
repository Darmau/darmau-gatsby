require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['article', 'album', 'video', 'category-article', 'category-album', 'tag', 'portfolio'],
  singleTypes: ['author', 'changelog'],
};

module.exports = {
  siteMetadata: {
    title: `可可托海没有海`,
    siteUrl: `https://darmau.design/`,
    description: "李大毛的个人网站",
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },

    //PWA配置
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `可可托海没有海`,
        short_name: `可可托海没有海`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `./src/images/favicon.svg`,
      },
    },

    //Google Analytics配置
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_ID,
        ],
        pluginConfig: {
          head: true
        },
      },
    },

    //RSS配置
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiArticle } }) => {
              return allStrapiArticle.edges.map(edge => {

                //将正文数据里的文本提取出来
                const mainContentObject = JSON.parse(edge.node.mainBody.data.mainBody)
                const blocksObj = mainContentObject.blocks
                let textArr = ['查看完整内容建议访问原链接。']
                for (let i in blocksObj) {
                  textArr.push(blocksObj[i].data.text ? blocksObj[i].data.text : '该内容不支持RSS预览')
                }
                const content = textArr.join('<br />')

                return Object.assign({}, edge.node, {
                  title: edge.node.basic.title,
                  description: edge.node.basic.description,
                  date: edge.node.basic.date,
                  url: site.siteMetadata.siteUrl + '/article/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + '/article/' + edge.node.slug,
                  custom_elements: [{ "content:encoded": content }],
                })
              })
            },
            query: `
              {allStrapiArticle(sort: {fields: basic___date, order: DESC}) {
                edges {
                  node {
                    basic {
                      title
                      description
                      date
                    }
                    slug
                    mainBody {
                      data {
                        mainBody
                      }
                    }
                  }
                }
              }}`,
            output: "/rss.xml",
            title: "可可托海没有海的RSS",
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    },

    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      }
    },

  ]
};