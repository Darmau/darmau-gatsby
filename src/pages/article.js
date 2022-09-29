import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head"
import ArticleList from "../components/ArticleList";

const Album = () => {
  return (
    <>
      <Head title="所有摄影" />
      <Layout>
        <ArticleList />
      </Layout>
    </>
  )
}

export default Album