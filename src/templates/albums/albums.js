import React from "react";
import { graphql, Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./index.module.css"
import Layout from "../../components/layout/layout";
import Pagination from "../../components/pagination/pagination";

const Albums = ({data}) => {
  const albums = data.allStrapiAlbum.nodes
  const pageInfo = data.allStrapiAlbum.pageInfo

  return (
      <Layout>
        <main className={style.gridContainer}>
          <div className={style.photoGrid}>
            {
              albums.map(
                node => {
                  const image = getImage(node.cover.localFile)
                  return (
                    <Link to={'/album/' + node.slug}>
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
  )
}

export function Head() {
  return (
    <>
      <title>所有摄影 | 可可托海没有海</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="设计师、开发者李大毛的个人网站" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZS3N1LGHWZ"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ZS3N1LGHWZ');
      </script>
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