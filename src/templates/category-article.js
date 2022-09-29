import { graphql, Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function CategoryArticle({ data }) {

  const articles = data.allStrapiArticle.nodes
  const category = data.allStrapiCategoryArticle.nodes[0]

  return (
    <>
      <Head title={category.title} />
      <Layout>
        {articles.map(article => {
          const image = getImage(article.cover.localFile)
          return (
            <article>
              <Link to={article.slug}>
                <GatsbyImage image={image} alt={article.basic.title} />
                <h4>{article.basic.title}</h4>
                <p>{article.basic.description}</p>
                <p>{article.basic.date}</p>
              </Link>
            </article>
          )
        })}
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