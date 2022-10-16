import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import * as style from "../styles/portfolio.module.css"

const Portfolios = ({data}) => {
  const portfolio = data.allStrapiPortfolio.nodes
  return (
    <Layout>
      <p>本页面仍在开发中</p>
    </Layout>
  )
}

export default Portfolios