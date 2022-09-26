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