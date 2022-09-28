import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function AlbumViewer({ data }) {

    const albumQuery = useStaticQuery(graphql`
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
                }
                alternativeText
            }
            category_album {
                title
            }
        }
        }
    }`)

    const album = data.allStrapiAlbum.nodes[0]

    return (
        <>
            <Head title={album.basic.title} />
            <Layout>
                <ul>
                    {album.gallery.map(
                        photo => {
                            const image = getImage(photo.localFile)
                            return (
                                <li><GatsbyImage image={image} alt={photo.alternativeText}></GatsbyImage></li>
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