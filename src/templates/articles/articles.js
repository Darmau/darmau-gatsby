import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Pagination from "../../components/pagination/pagination";
import * as style from "./index.module.css"

const Articles = ({ data }) => {
  const articles = data.allStrapiArticle.nodes
  const pageInfo = data.allStrapiArticle.pageInfo
  const categories = data.allStrapiCategoryArticle.nodes
  const tags = data.allStrapiTag.nodes

  return (
    <Layout>
      <div className={style.container}>
        <aside className={style.sort}>
          <header className={style.aboutAuthorHeader}>
            <small className={style.aboutAuthorTitle}>筛选</small>
            <div className={style.line}></div>
          </header>
          <div className={style.sortItem}>
            <h4 className={style.sortTitle}>分类</h4>
            <ul className={style.sortList}>
              {categories.map(category => 
              (<li className={style.articleCategory}>
                <Link to={'/category/articles/' + category.slug}>{category.title}</Link>
              </li>))}
            </ul>
          </div>
          <div>
            <h4 className={style.sortTitle}>标签</h4>
            <ul className={style.sortList}>
              {tags.map(tag => (<li className={style.articleTag}>
                <Link to={'/tag/' + tag.slug}>#{tag.title}</Link>
              </li>))}
            </ul>
          </div>
        </aside>
        <main className={style.articleContainer}>
          <header className={style.aboutAuthorHeader}>
            <small className={style.aboutAuthorTitle}>全部文章</small>
            <div className={style.line}></div>
          </header>
          <div className={style.articleGrid}>
            {
              articles.map(node => {
                const image = getImage(node.cover.localFile)
                return (
                  <Link to={'/article/' + node.slug}>
                  <article className={style.articleCard}>
                    <GatsbyImage className={style.articleCover} image={image} alt={node.basic.title} />
                    <div className={style.articleInfo}>
                      <h4 className={style.articleTitle}>
                        {node.basic.title}
                      </h4>
                      <p className={style.articleDescription}>{node.basic.description}</p>
                      <div className={style.articleRelative}>
                        <p className={style.articleCategory}><Link to={'/category/articles/' + node.category_article.slug}>{node.category_article.title}</Link></p>
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
      </div>
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <title>文章 | 可可托海没有海</title>
      <meta name="description" content="设计师、开发者李大毛的文章" />
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
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
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
    allStrapiCategoryArticle {
      nodes {
        title
        slug
      }
    }
    allStrapiTag {
      nodes {
        title
        slug
      }
    }
  }`

export default Articles