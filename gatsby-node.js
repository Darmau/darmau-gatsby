const { reporter } = require("gatsby-cli/lib/reporter/reporter")
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  //创建文章分页
  const resultArticles = await graphql(`
        {
            allStrapiArticle(sort: {order: DESC, fields: basic___date}) {
            pageInfo {
                itemCount
            }
            }
        }`)

  if (resultArticles.errors) {
    reporter.panicOnBuild(`Error while running article counts query.`)
    return
  }

  const articleCount = resultArticles.data.allStrapiArticle.pageInfo.itemCount //文章总数
  const articlesPerPage = 10
  const numArticlesPages = Math.ceil(articleCount / articlesPerPage)
  Array.from({ length: numArticlesPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: path.resolve("./src/templates/articles/articles.js"),
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        currentPage: i + 1,
      },
    })
  })

  // 创建文章详情页
  const articleContentTemplate = path.resolve(`./src/templates/article-content/article-content.js`)

  const resultArticle = await graphql(`
         {
            allStrapiArticle(sort: {order: DESC, fields: basic___date}) {
            edges {
                node {
                strapi_id
                slug
                }
            }
            }
        } 
    `)

  if (resultArticle.errors) {
    reporter.panicOnBuild(`Error while running article info query.`)
    return
  }

  const articles = resultArticle.data.allStrapiArticle.edges

  articles.forEach((article) => {
    createPage({
      path: `/article/${article.node.slug}`,
      component: articleContentTemplate,
      context: { strapi_id: article.node.strapi_id },
    })
  });

  //创建相册分页
  const resultAlbums = await graphql(`
        {
            allStrapiAlbum {
            pageInfo {
                itemCount
            }
            }
        }`)

  if (resultAlbums.errors) {
    reporter.panicOnBuild(`Error while running article counts query.`)
    return
  }

  const albumCount = resultAlbums.data.allStrapiAlbum.pageInfo.itemCount //相册总数
  const albumsPerPage = 24
  const numAlbumsPages = Math.ceil(albumCount / albumsPerPage)
  Array.from({ length: numAlbumsPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/albums` : `/albums/${i + 1}`,
      component: path.resolve("./src/templates/albums/albums.js"),
      context: {
        limit: albumsPerPage,
        skip: i * albumsPerPage,
        currentPage: i + 1,
      },
    })
  })

  // 创建相册详情页
  const albumViewerTemplate = path.resolve(`./src/templates/album-viewer/album-viewer.js`)

  const resultAlbum = await graphql(`
         {
            allStrapiAlbum {
            edges {
                node {
                strapi_id
                slug
                }
            }
            }
        } 
    `)

  if (resultAlbum.errors) {
    reporter.panicOnBuild(`Error while running album info query.`)
    return
  }

  const albums = resultAlbum.data.allStrapiAlbum.edges

  albums.forEach((album) => {
    createPage({
      path: `/album/${album.node.slug}`,
      component: albumViewerTemplate,
      context: { strapi_id: album.node.strapi_id },
    })
  });

  // 创建视频分页
  const resultVideos = await graphql(`
        {
            allStrapiVideo {
            pageInfo {
                itemCount
            }
            }
        }`)

  if (resultVideos.errors) {
    reporter.panicOnBuild(`Error while running video counts query.`)
    return
  }

  const videoCount = resultVideos.data.allStrapiVideo.pageInfo.itemCount //视频总数
  const videosPerPage = 12
  const numVideosPages = Math.ceil(videoCount / videosPerPage)
  Array.from({ length: numVideosPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/videos` : `/videos/${i + 1}`,
      component: path.resolve("./src/templates/videos/videos.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        currentPage: i + 1,
      },
    })
  })

  // 创建视频详情页
  const videoPlayerTemplate = path.resolve(`./src/templates/video-player/video-player.js`)
  const resultVideo = await graphql(`
         {
            allStrapiVideo {
            edges {
                node {
                strapi_id
                slug
                }
            }
            }
        } 
    `)
  if (resultVideo.errors) {
    reporter.panicOnBuild(`Error while running video info query.`)
    return
  }
  const videos = resultVideo.data.allStrapiVideo.edges
  videos.forEach((video) => {
    createPage({
      path: `/video/${video.node.slug}`,
      component: videoPlayerTemplate,
      context: { strapi_id: video.node.strapi_id },
    })
  });

  // 创建文章话题页
  const categoryArticleTemplate = path.resolve(`./src/templates/category-article/category-article.js`)

  const resultCategoryArticle = await graphql(`
         {
            allStrapiCategoryArticle {
            edges {
                node {
                strapi_id
                slug
                }
            }
            }
        } 
    `)

  if (resultCategoryArticle.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const categoryArticle = resultCategoryArticle.data.allStrapiCategoryArticle.edges

  categoryArticle.forEach((category) => {
    createPage({
      path: `/category/articles/${category.node.slug}`,
      component: categoryArticleTemplate,
      context: { strapi_id: category.node.strapi_id },
    })
  });

  //创建标签页
  const tagTemplate = path.resolve(`./src/templates/tag/tag.js`)

  const resultTag = await graphql(`
         {
            allStrapiTag {
            edges {
                node {
                strapi_id
                slug
                }
            }
            }
        } 
    `)

  if (resultTag.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const tags = resultTag.data.allStrapiTag.edges

  tags.forEach((tag) => {
    createPage({
      path: `/tag/${tag.node.slug}`,
      component: tagTemplate,
      context: { strapi_id: tag.node.strapi_id },
    })
  });

  //创建作品页
  const portfolioTemplate = path.resolve(`./src/templates/portfolio/portfolio.js`)

  const resultPortfolio = await graphql(`
    {allStrapiPortfolio {
      edges {
        node {
          strapi_id
          slug
        }
      }
    }}`)

  if (resultPortfolio.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const portfolios = resultPortfolio.data.allStrapiPortfolio.edges

  portfolios.forEach((portfolio) => {
    createPage({
      path: `/portfolio/${portfolio.node.slug}`,
      component: portfolioTemplate,
      context: { strapi_id: portfolio.node.strapi_id },
    })
  });

}