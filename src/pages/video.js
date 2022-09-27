import React from "react";
import Layout from '../components/Layout'
import VideoCard from "../components/VideoCard";
import Head from "../components/Head"


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