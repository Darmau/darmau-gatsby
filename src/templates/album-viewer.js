import { graphql } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "../styles/album-viewer.module.css"

export default function AlbumViewer({ data }) {

    const album = data.allStrapiAlbum.nodes[0]

    // 默认展示gallery第一张
    const [activePhoto, setActivePhoto] = React.useState(getImage(album.gallery[0].localFile))

    // 获取点击列表项的index，并将展示图片state更改为相应图片
    const switchActive = (index) => (event) => {
        setActivePhoto(getImage(album.gallery[index].localFile))
    }

    return (
        <>
            <Head title={album.basic.title} />
            <Layout>
                <main className={style.albumContainer}>
                    <div className={style.albumMain}>
                        <div clsssName={style.gallery}>
                            <GatsbyImage className={style.albumActive} image={activePhoto} />
                            <div className={style.albumList}>
                                {album.gallery.map(
                                    (photo, index) => {
                                        const image = getImage(photo.localFile)
                                        return (
                                            <div className={style.albumPhoto} onClick={switchActive(index)} onKeyDown={switchActive(index)} key={index}><GatsbyImage imgClassName={style.innerImage} image={image} alt={photo.alternativeText}></GatsbyImage></div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                        <div clsssName={style.albumInformation}>
                            <h4 className={style.albumTitle}>{album.basic.title}</h4>
                            <p className={style.albumDescription}>{album.basic.description}</p>
                            <div className={style.albumRelative}>
                                <p className={style.albumCategory}>{album.category_album.title}</p>
                                <p className={style.albumDate}>{album.basic.date}</p>
                            </div>
                        </div>
                    </div>
                </main>
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