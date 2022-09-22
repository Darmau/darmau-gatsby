import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

function IndexPage({ data }) {
  return (
    <div>
      {data.allStrapiVideo.nodes.map(
        node => (
          <div>
            <GatsbyImage src={node.cover} />
            <h3>{node.title}</h3>
          </div>
        )
      )}
    </div>\
  )
}

export default IndexPage

export const allVideos = graphql`
{
  allStrapiVideo(sort: {order: DESC, fields: date}) {
    edges {
      node {
        title
        cover {
          url
          children {
            id
            ... on ImageSharp {
              id
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
}`