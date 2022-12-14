import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import MainBody from "../components/text-transfer/TextTransfer"
import * as style from "../styles/changelog.module.css"

export default function Changelog({ data }) {
  const changeLog = data.allStrapiChangelog.nodes[0].about.data.about
  return (
    <Layout>
      <main className={style.mainContainer}>
        <h1 className={style.pageTitle}>关于本站</h1>
        <MainBody data={changeLog}/>
      </main>
    </Layout>
  )
}

export const changelogQuery = graphql`
  {
    allStrapiChangelog {
      nodes {
        about {
          data {
            about
          }}}}}`

export function Head() {
  return (
    <>
      <title>关于本站 | 可可托海没有海</title>
      <meta name="description" content="设计师、开发者李大毛个人网站的更新记录和技术栈" />
    </>
  )
}