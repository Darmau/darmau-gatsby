import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./index.module.css"


const VideoCards = () => {
  const { allStrapiVideo } = useStaticQuery(graphql`
    query {
      allStrapiVideo(sort: {fields: basic___date, order: DESC}) {
        nodes {
          basic {
            title
            date
          }
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 420, placeholder: BLURRED, formats: AUTO)
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
      <div className={style.videoGrid}>
        {
          allStrapiVideo.nodes.map(
            node => {
              const image = getImage(node.cover.localFile)
              return (
                <div className={style.videoCard}>
                  <Link to={node.slug}>
                    <GatsbyImage imgClassName={style.videoCover} image={image} alt={node.basic.title}></GatsbyImage>
                    <h6 className={style.videoTitle}>{node.basic.title}</h6>
                    <p className={style.videoDate}>{node.basic.date}</p>
                  </Link>
                </div>
              )
            }
          )
        }
      </div>
    </main>
  )
}

export default VideoCards