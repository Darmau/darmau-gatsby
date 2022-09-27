import { graphql } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import VideoFrame from "../components/VideoFrame";
import * as playerStyle from "./video-player.module.css"

export default function VideoPlayer({ data }) {

    const video = data.allStrapiVideo.nodes[0]

    return (
        <Layout>
            <main className="flex justify-center w-full">
                <div className={playerStyle.videoContainer}>
                    <div className={playerStyle.videoFrame}>
                        <VideoFrame src={video.source.bilibili} title={video.basic.title} />
                    </div>
                    <div className="px-4 sm:px-0">
                        <h4 className={playerStyle.videoTitle}>{video.basic.title}</h4>
                        <p className={playerStyle.videoDate}>{video.basic.date}</p>
                        <p className={playerStyle.videoDescription}>{video.basic.description}</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export const videoQuery = graphql`
    query VideoPlayerById($strapi_id: Int) {
        allStrapiVideo(filter: {strapi_id: {eq: $strapi_id }}) {
            nodes {
                source {
                    bilibili
                    youtube
                    xigua
                }
                strapi_id
                slug
                basic {
                    date
                    description
                    isTop
                    title
                }
                cover {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 840)
                      }
                    }
                }
            }
        }
    }
`