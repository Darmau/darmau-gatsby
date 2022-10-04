import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Pagination from "../../components/pagination/pagination";
import * as style from "./index.module.css"

const Articles = ({ data }) => {
  const articles = data.allStrapiArticle.nodes
  const pageInfo = data.allStrapiArticle.pageInfo

  return (
    <Layout>
      <main className={style.articleContainer}>
        <div className={style.articleGrid}>
          {
            articles.map(node => {
              const image = getImage(node.cover.localFile)
              return (
                <article className={style.articleCard}>
                  <GatsbyImage className={style.articleCover} image={image} alt={node.basic.title} />
                  <div className={style.articleInfo}>
                    <h4 className={style.articleTitle}>
                      <Link to={'/article/' + node.slug}>{node.basic.title}</Link>
                    </h4>
                    <p className={style.articleDescription}>{node.basic.description}</p>
                    <div className={style.articleRelative}>
                      <p className={style.articleCategory}><Link to={'category/' + node.category_article.slug}>{node.category_article.title}</Link></p>
                      <p className={style.articleDate}>{node.basic.date}</p>
                    </div>
                  </div>
                </article>
              )
            })
          }
        </div>
        <Pagination pageInfo={pageInfo} sort='articles' />
      </main>
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <title>所有文章 | 可可托海没有海</title>
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

export const allStrapiArticle = graphql`
  query articleListQuery($skip: Int!, $limit: Int!)
  {
    allStrapiArticle(sort: {fields: basic___date, order: DESC}, skip: $skip, limit: $limit) {
      nodes {
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
            }
          }
        }
        slug
        strapi_id
        basic {
          title
          description
          date
        }
        category_article {
          title
          slug
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        pageCount
      }
    }
  }`

export default Articles