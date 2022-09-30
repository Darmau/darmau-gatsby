import React from "react";
import Head from "../components/Head"
import Layout from "../components/layout/layout";
import ArticleList from "../components/article-list/article-list";

const Album = () => {
  return (
    <>
      <Head title="所有文章" />
      <Layout>
        <ArticleList />
      </Layout>
    </>
  )
}

export default Album