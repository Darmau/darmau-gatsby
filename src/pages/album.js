import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head"
import AlbumGrid from "../components/AlbumGrid";

const Album = () => {
  return (
    <>
      <Head title="所有摄影" />
      <Layout>
        <AlbumGrid />
      </Layout>
    </>
  )
}

export default Album