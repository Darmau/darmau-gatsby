import React from "react"
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import * as style from "../articles/index.module.css"

export default function Tag({ data }) {

  const articles = data.allStrapiArticle.nodes
  const tag = data.allStrapiTag.nodes[0]

  return (
    <Layout>
      <Breadcrumbs upLevel="articles" active={tag.title} />
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
      <title>{data.allStrapiTag.nodes[0].title} | 可可托海没有海</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="设计师、开发者李大毛的个人网站" />
    </>
  )
}


export const tagQuery = graphql`
query ArticlesByTag($strapi_id: Int) {
    allStrapiArticle(filter: {tags: {elemMatch: {strapi_id: {eq: $strapi_id}}}}) {
        nodes {
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 210, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
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
    allStrapiTag(filter: {strapi_id: {eq: $strapi_id}}) {
      nodes {
        title
      }
    }
  }`