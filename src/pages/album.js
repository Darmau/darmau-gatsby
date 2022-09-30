import React from "react";
import Layout from "../components/layout/layout";
import Head from "../components/Head"
import AlbumGrid from "../components/album-grid/album-grid"

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