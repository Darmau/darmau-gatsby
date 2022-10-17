import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import * as style from "../styles/portfolio.module.css"

const Portfolios = ({ data }) => {
  const portfolio = data.allStrapiPortfolio.nodes
  return (
    <Layout>
      <section>
        <p>你好，我是</p>
        <h1>李大毛没有猫</h1>
        <h2>设计师，开发者，摄影师</h2>
        <p>比起单纯的设计界面，我更享受创造和将创造变成现实的过程。希望我能成为设计师和工程师之间的桥梁，优化产品的实际体验，使成品更接近设计师的设想。</p>
      </section>

      <section>
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
      </section>
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