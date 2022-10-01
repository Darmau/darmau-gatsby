import React from "react";
import { graphql, Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./index.module.css"
import Head from "../../components/Head";
import Layout from "../../components/layout/layout";
import Pagination from "../../components/pagination/pagination";

const Albums = ({data}) => {
  const albums = data.allStrapiAlbum.nodes
  const pageInfo = data.allStrapiAlbum.pageInfo

  return (
    <>
      <Head title="所有摄影" />
      <Layout>
        <main className={style.gridContainer}>
          <div className={style.photoGrid}>
            {
              albums.map(
                node => {
                  const image = getImage(node.cover.localFile)
                  return (
                    <Link to={node.slug}>
                      <div className={style.photoCard}>
                        <GatsbyImage className={style.photoFrame} image={image} alt={node.basic.title}></GatsbyImage>
                      </div>
                    </Link>
                  )
                }
              )
            }
          </div>
          <Pagination pageInfo={pageInfo} sort='albums'/>
        </main>
      </Layout>
    </>
  )
}

export const allStrapiAlbum = graphql `
  query albumListQuery($skip: Int!, $limit: Int!) {
      allStrapiAlbum(sort: {fields: basic___date, order: DESC}, skip: $skip, limit: $limit) {
        nodes {
          basic {
            title
          }
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
        pageInfo {
          currentPage
          hasNextPage
          hasPreviousPage
          pageCount
        }
      }
    }`

export default Albums