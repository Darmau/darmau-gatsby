import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function VideoCard() {
  const { allStrapiVideo } = useStaticQuery(graphql`
    query {
      allStrapiVideo(limit: 16, sort: {fields: basic___date, order: DESC}) {
        nodes {
          basic {
            title
            date
          }
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 320, placeholder: BLURRED, formats: AUTO)
              }
            }
          }
          slug
          strapi_id
        }
      }
    }`)



  return (
    <main className="flex flex-wrap px-20 mb-16 justify-center">
      {
        allStrapiVideo.nodes.map(
          node => {
            const image = getImage(node.cover.localFile)
            return (
              <Link to={node.slug}>
                <div className="flex flex-col shrink-0 grow-0 justify-start m-3 w-80">
                  <GatsbyImage className="rounded-lg" image={image} alt={node.basic.title}></GatsbyImage>
                  <h6 className="text-lg font-bold my-2 hover:text-theme">{node.basic.title}</h6>
                  <p className="text-sm">{node.basic.date}</p>
                </div>
              </Link>
            )
          }
        )
      }
    </main>
  )
}
