const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const videoPlayerTemplete = path.resolve(`./src/templates/video-player.js`)

    const result = await graphql(`
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

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const videos = result.data.allStrapiVideo.edges

    videos.forEach((video) => {
        createPage({
            path: `/video/${video.node.slug}`,
            component: videoPlayerTemplete,
            context: {strapi_id: video.node.strapi_id},
        })
    });

}

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const albumViewerTemplete = path.resolve(`./src/templates/album-viewer.js`)

    const result = await graphql(`
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

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const albums = result.data.allStrapiAlbum.edges

    albums.forEach((album) => {
        createPage({
            path: `/album/${album.node.slug}`,
            component: albumViewerTemplete,
            context: {strapi_id: album.node.strapi_id},
        })
    });

}