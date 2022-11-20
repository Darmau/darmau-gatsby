import React from "react"
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import * as style from "../articles/index.module.css"

export default function CategoryArticle({ data }) {

  const articles = data.allStrapiArticle.nodes
  const category = data.allStrapiCategoryArticle.nodes[0]

  return (
    <Layout>
      <Breadcrumbs upLevel="articles" active={category.title} />
      <main className={style.articleContainer}>
        <div>
          {articles.map(article => {
            const image = getImage(article.cover.localFile)
            return (
              <Link to={'/article/' + article.slug}>
                <article className={style.articleCard}>
                  <GatsbyImage className={style.articleCover} image={image} alt={article.basic.title} />
                  <div className={style.articleInfo}>
                    <h4 className={style.articleTitle}>{article.basic.title}</h4>
                    <p className={style.articleDescription}>{article.basic.description}</p>
                    <p className={style.articleDate}>{article.basic.date}</p>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export function Head({ data }) {
  return (
    <>
      <title>{data.allStrapiCategoryArticle.nodes[0].title} | 文章</title>
      <meta name="description" content="文章分类 按照大分类浏览文章" />
    </>
  )
}


export const categoryArticleQuery = graphql`
query ArticlesByCategory($strapi_id: Int) {
    allStrapiArticle(filter: {category_article: {strapi_id: {in: [$strapi_id]}}}) {
        nodes {
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 210, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
            basic {
              title
              description
              date
            }
            slug
          }
    }
    allStrapiCategoryArticle(filter: {strapi_id: {eq: $strapi_id}}) {
      nodes {
        title
      }
    }
  }`