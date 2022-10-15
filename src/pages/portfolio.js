import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import * as style from "../styles/portfolio.module.css"

const Portfolios = ({data}) => {
  const portfolio = data.allStrapiPortfolio.nodes
  return (
    <Layout>
      <h1>本页面仍在开发中</h1>
      <ul>
        {portfolio.map(item => (
          <li>
            <Link to={'/portfolio/' + item.slug}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const portfolioQuery = graphql`
  {
    allStrapiPortfolio(sort: {fields: date, order: DESC}) {
      nodes {
        title
        slug
        description
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: DOMINANT_COLOR, formats:[AUTO, WEBP, AVIF])
            }}}}}}`

export default Portfolios