import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "../styles/ArticleList.module.css"

export default function ArticleList() {
  const { allStrapiArticle } = useStaticQuery(graphql`
    {
        allStrapiArticle(sort: {fields: basic___date, order: DESC}) {
          nodes {
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: AUTO, width: 860)
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
        }
      }`)

  return (
    <main className={style.articleContainer}>
      <div className={style.articleWrap}>
        {
          allStrapiArticle.nodes.map(node => {
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
    </main>
  )
}