import React from "react";
import Head from "../components/Head"
import Layout from '../components/layout/layout'
import VideoCard from "../components/video-cards/video-cards";

const Video = () => {
  return (
    <>
      <Head title="所有视频" />
      <Layout>
        <VideoCard />
      </Layout>
    </>
  )
}

export default Video