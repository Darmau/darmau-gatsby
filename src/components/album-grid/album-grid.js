import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./index.module.css"

export default function AlbumGrid() {
  const { allStrapiAlbum } = useStaticQuery(graphql`
    {
        allStrapiAlbum(sort: {fields: basic___date, order: DESC}) {
          nodes {
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: AUTO, width: 345)
                }
              }
            }
            slug
            strapi_id
          }
        }
      }`)

  return (
    <main className={style.gridContainer}>
      <div className={style.photoGrid}>
        {
          allStrapiAlbum.nodes.map(
            node => {
              const image = getImage(node.cover.localFile)
              return (
                <Link to={node.slug}>
                  <div className={style.photoCard}>
                    <GatsbyImage className={style.photoFrame} image={image} alt={node.slug}></GatsbyImage>
                  </div>
                </Link>
              )
            }
          )
        }
      </div>
    </main>
  )
}
