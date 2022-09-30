import { graphql, Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "../styles/ArticleList.module.css"
import Breadcrumbs from "../components/Breadcrumbs";

export default function CategoryArticle({ data }) {

  const articles = data.allStrapiArticle.nodes
  const category = data.allStrapiCategoryArticle.nodes[0]

  return (
    <>
      <Head title={category.title} />
      <Layout>
        <Breadcrumbs upLevel="article" active={category.title}/>
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
                  gatsbyImageData(width: 210, placeholder: BLURRED, formats: AUTO)
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
        slug
      }
    }
  }`