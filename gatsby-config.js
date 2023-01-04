require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['article', 'album', 'video', 'category-article', 'category-album', 'tag', 'portfolio'],
  singleTypes: ['changelog'],
};

// 将block分发到对应处理函数
function transfer(block) {
  switch (block.type) {
    case 'header': return handleHeader(block.data)
    case 'paragraph': return handelParagraph(block.data)
    case 'list': return handleList(block.data)
    case 'delimiter': return handleDivider()
    case 'code': return handleCode(block.data)
    case 'quote': return handleQuote(block.data)
    case 'image': return handleImage(block.data)

    default: return (`<p style="margin-bottom: 16px;">该内容无法在RSS显示，请访问原文</p>`)
  }
}

//处理header
let num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0, num6 = 0
function handleHeader(data) {
  const level = data.level
  switch (level) {
    case 1:
      num1++
      return (`<h1 style="font-size:26px;margin-top: 28px;margin-bottom:16px;">${Object.values(data.text).join('')}</h1>`)
    case 2:
      num2++
      return (`<h2 style="font-size:24px;margin-top: 24px;margin-bottom:16px;">${Object.values(data.text).join('')}</h2>`)
    case 3:
      num3++
      return (`<h3 style="font-size:20px;margin-bottom:16px;">${Object.values(data.text).join('')}</h3>`)
    case 4:
      num4++
      return (`<h4 style="margin-bottom:18px;">${Object.values(data.text).join('')}</h4>`)
    case 5:
      num5++
      return (`<h5 style="margin-bottom:16px;">${Object.values(data.text).join('')}</h5>`)
    case 6:
      num6++
      return (`<h6 style="margin-top: 4px;margin-bottom:16px;">${Object.values(data.text).join('')}</h6>`)
    default:
      return (`<p>${Object.values(data.text).join('')}</p>`)
  }
}

//处理段落
function handelParagraph(data) {
  return (
    `<p style="margin-bottom: 16px;font-size:15px; line-height: 1.5;">${Object.values(data.text).join('')}</p>`
  )
}

//处理列表
function handleList(data) {
  if (data.style === 'unordered') {
    return (
      `<ul style="margin-bottom: 16px;font-size:15px;">${data.items.map(item => (`<li>${Object.values(item).join('')}</li>`)).join('')}</ul>`
    )
  } else {
    return (
      `<ol style="margin-bottom: 16px;font-size:15px;">${data.items.map(item => (`<li>${Object.values(item).join('')}</li>`)).join('')}</ol>`
    )
  }
}

//处理分割线
function handleDivider() {
  return (
    `<div style="margin-top: 16px;margin-bottom: 16px;">***</div>`
  )
}

//处理代码
function handleCode(data) {
  return (
    `<code style="margin-bottom: 16px;font-size:14px;">${Object.values(data.code).join('')}</code>`
  )
}

//处理引用
function handleQuote(data) {
  return (
    `<figure style="margin-bottom: 16px;">
      <blockquote style="font-size: 17px;">${Object.values(data.text).join('')}</blockquote>
      <figcaption style="font-size: 14px;text-align:end;">${Object.values(data.caption).join('')}</figcaption>
    </figure>`
  )
}

function handleImage(data) {
  return (
    `<figure style="margin-bottom: 16px;">
      <img height="360" width="auto" style="display: block;margin: 0 auto;" decoding="async" src="https://image.darmau.design${data.file.url}" alt="${data.file.alt}" />
      ${data.caption && `<figcaption>${Object.values(data.caption).join('')}</figcaption>`}
     </figure>`
  )
}

module.exports = {
  siteMetadata: {
    title: `可可托海没有海`,
    siteUrl: `https://darmau.design`,
  description: `设计师、开发者李大毛的个人网站`,
    twitterUsername: `@herac1es`,
      image: `/default-cover.jpg`,
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

  // //Google Analytics配置
  // {
  //   resolve: `gatsby-plugin-google-gtag`,
  //   options: {
  //     trackingIds: [
  //       process.env.GA_ID,
  //     ],
  //     pluginConfig: {
  //       head: true
  //     },
  //   },
  // },

  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Roboto Mono`,
          file: `https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap`,
        },
        {
          name:`Material Symbols Outlined`,
          file: `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`,
        }
      ],
    },
  },

  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "可可托海没有海",
      short_name: "可可托海没有海",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#B23D2B",
      display: "standalone",
      icon: "src/images/favicon.svg",
      crossOrigin: `use-credentials`,
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
              const blocksArr = mainContentObject.blocks
              const contentArr = blocksArr.map(block => transfer(block))
              const content = contentArr.join('')

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
          query: `{
              allStrapiArticle(sort: {basic: {date: DESC}}, limit: 10) {
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
              }
            }`,
          output: "/rss",
          title: "可可托海没有海",
        },
      ],
    },
  },

]
};
