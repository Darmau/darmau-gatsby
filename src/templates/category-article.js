import { graphql } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function CategoryArticle({ data }) {
    const articles = date.allStrapiArticle.nodes[0]

    return (
        <>
            <Head title={articles.basic.title} />
            <Layout>
                {articles.map(article => {
                    const image = getImage(article.cover.localFile)
                    return (
                        <article>
                            <Link to={node.slug}>
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
  }
`