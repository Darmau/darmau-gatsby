import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./index.module.css"
import Layout from "../../components/layout/layout";
import Head from "../../components/Head";
import Pagination from "../../components/pagination/pagination";

const Videos = ({ data }) => {
  const videos = data.allStrapiVideo.nodes
  const pageInfo = data.allStrapiVideo.pageInfo


  return (
    <>
      <Head title="所有视频" />
      <Layout>
        <main className={style.gridContainer}>
          <div className={style.videoGrid}>
            {
              videos.map(
                node => {
                  const image = getImage(node.cover.localFile)
                  return (
                    <div className={style.videoCard}>
                      <GatsbyImage imgClassName={style.videoCover} image={image} alt={node.basic.title}></GatsbyImage>
                      <Link to={'/video/' + node.slug}>
                        <h4 className={style.videoTitle}>{node.basic.title}</h4>
                      </Link>
                      <p className={style.videoDate}>{node.basic.date}</p>
                    </div>
                  )
                }
              )
            }
          </div>
          <Pagination pageInfo={pageInfo} sort='videos' />
        </main>
      </Layout>
    </>
  )
}

export const allStrapiVideo = graphql`
  query videoListQuery($skip: Int!, $limit: Int!) {
    allStrapiVideo(sort: {fields: basic___date, order: DESC}, skip: $skip, limit: $limit) {
      nodes {
        basic {
          title
          date
        }
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
            }
          }
        }
        slug
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        pageCount
      }
    }
  }`

export default Videos