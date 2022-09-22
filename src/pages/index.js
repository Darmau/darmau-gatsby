import { graphql } from "gatsby"
import React from "react"

function IndexPage({ data }) {
  return (
    <div>
      {data.allStrapiVideo.nodes.map(
        node => (
          <div>
            <h3>{node.title}</h3>
          </div>
        )
      )}
    </div>
  )
}

export default IndexPage

export const allVideos = graphql`
{
  allStrapiVideo(sort: {order: DESC, fields: date}) {
    edges {
      node {
        title
      }
    }
  }
}`