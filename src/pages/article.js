import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head"

export default function Article() {
    return (
        <>
            <Head title="所有文章" />
            <Layout>
                <h1>文章列表页</h1>
            </Layout>
        </>
    )
}
