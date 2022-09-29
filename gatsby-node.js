const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    // 创建视频详情页
    const videoPlayerTemplete = path.resolve(`./src/templates/video-player.js`)
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
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    const videos = resultVideo.data.allStrapiVideo.edges
    videos.forEach((video) => {
        createPage({
            path: `/video/${video.node.slug}`,
            component: videoPlayerTemplete,
            context: {strapi_id: video.node.strapi_id},
        })
    });

    // 创建相册详情页
    const albumViewerTemplete = path.resolve(`./src/templates/album-viewer.js`)

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
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const albums = resultAlbum.data.allStrapiAlbum.edges

    albums.forEach((album) => {
        createPage({
            path: `/album/${album.node.slug}`,
            component: albumViewerTemplete,
            context: {strapi_id: album.node.strapi_id},
        })
    });
    
    // 创建文章话题页
    const categoryArticleTemplete = path.resolve(`./src/templates/category-article.js`)

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
            path: `/article/category/${categoryArticle.node.slug}`,
            component: categoryArticle,
            context: {strapi_id: categoryArticle.node.strapi_id},
        })
    });
}