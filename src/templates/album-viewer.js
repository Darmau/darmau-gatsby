import { graphql } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function AlbumViewer({ data }) {

    const album = data.allStrapiAlbum.nodes[0]

    // 默认展示gallery第一张
    const [activePhoto, setActivePhoto] = React.useState(getImage(album.gallery[0].localFile))

    // 获取点击列表项的index，并set相应state
    const switchActive = (index) => (event) => {
        setActivePhoto(getImage(album.gallery[index].localFile))
    }

    return (
        <>
            <Head title={album.basic.title} />
            <Layout>
                <GatsbyImage image={activePhoto} />
                <ul className="flex h-28">
                    {album.gallery.map(
                        (photo, index) => {
                            const image = getImage(photo.localFile)
                            return (
                                <li onClick={switchActive(index)} key={index}><GatsbyImage image={image} alt={photo.alternativeText}></GatsbyImage></li>
                            )
                        }
                    )}
                </ul>
                <div>
                    <h4>{album.basic.title}</h4>
                    <p>{album.basic.description}</p>
                    <p>{album.category_album.title}</p>
                    <p>{album.basic.date}</p>
                </div>
            </Layout>
        </>
    )
}

// 查询指定id的相册
export const albumQuery = graphql`
query AlbumViewerById($strapi_id: Int) {
    allStrapiAlbum(filter: {strapi_id: {eq: $strapi_id}}) {
        nodes {
            strapi_id
            slug
            basic {
                date
                description
                isTop
                title
            }
            gallery {
                localFile {
                    childImageSharp {
                    gatsbyImageData(width: 960)
                    }
                    id
                }
                alternativeText
            }
            category_album {
                title
            }
        }
    }
}`