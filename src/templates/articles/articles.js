import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Head from "../../components/Head";
import Pagination from "../../components/pagination/pagination";
import * as style from "./index.module.css"

const Articles = ({ data }) => {
  const articles = data.allStrapiArticle.nodes
  const pageInfo = data.allStrapiArticle.pageInfo

  return (
    <>
      <Head title="所有文章" />
      <Layout>
        <main className={style.articleContainer}>
          <div className={style.articleWrap}>
            {
              articles.map(node => {
                const image = getImage(node.cover.localFile)
                return (
                  <Link to={node.slug}>
                    <article className={style.articleCard}>
                      <GatsbyImage className={style.articleCover} image={image} alt={node.basic.title} />
                      <div className={style.articleInfo}>
                        <h4 className={style.articleTitle}>{node.basic.title}</h4>
                        <p className={style.articleDescription}>{node.basic.description}</p>
                        <div className={style.articleRelative}>
                          <p className={style.articleCategory}><Link to={'category/' + node.category_article.slug}>{node.category_article.title}</Link></p>
                          <p className={style.articleDate}>{node.basic.date}</p>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })
            }
          </div>
          <Pagination pageInfo={pageInfo} sort='articles' />
        </main>
      </Layout>
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