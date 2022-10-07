import React from "react"
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import * as style from "./index.module.css"
import { Disqus } from 'gatsby-plugin-disqus';

const AlbumViewer = ({ data }) => {

  const album = data.allStrapiAlbum.nodes[0]

  // 默认展示gallery第一张
  const [activePhoto, setActivePhoto] = React.useState(getImage(album.gallery[0].localFile))

  // 获取点击列表项的index，并将展示图片state更改为相应图片
  const switchActive = (index) => (event) => {
    setActivePhoto(getImage(album.gallery[index].localFile))
  }

  //评论配置
  let disqusConfig = {
    url: `https://darmau.design/album/ + ${album.slug}`,
    identifier: album.id,
    title: album.basic.title,
  }

  return (
    <Layout>
      <Breadcrumbs upLevel="albums" active={album.basic.title} />
      <main className={style.albumContainer}>
        <div className={style.gallery}>
          <div className={style.activePhotoFrame}>
            <GatsbyImage imgClassName={style.activePhotoImg} className={style.activePhoto} image={activePhoto} />
          </div>
          <div className={style.albumFrame}>
            <div className={style.albumList}>
              {album.gallery.map(
                (photo, index) => {
                  const image = getImage(photo.localFile)
                  return (
                    <div className={style.albumPhotoFrame} onClick={switchActive(index)} onKeyDown={switchActive(index)} key={index}>
                      <GatsbyImage imgClassName={style.albumPhotoImg} className={style.albumPhoto} image={image} alt={photo.alternativeText} ></GatsbyImage>
                    </div>)
                }
              )}
            </div>
          </div>
        </div>
        <div className={style.albumInformation}>
          <h4 className={style.albumTitle}>{album.basic.title}</h4>
          <div className={style.albumRelative}>
            <p className={style.albumCategory}>{album.category_album.title}</p>
            <p className={style.albumCaption}>{album.basic.date}</p>
          </div>
          <p className={style.albumDescription}>{album.basic.description}</p>
          <div className={style.albumLocation}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0002 9.99984C10.4585 9.99984 10.851 9.8365 11.1777 9.50984C11.5038 9.18373 11.6668 8.7915 11.6668 8.33317C11.6668 7.87484 11.5038 7.48234 11.1777 7.15567C10.851 6.82956 10.4585 6.6665 10.0002 6.6665C9.54183 6.6665 9.14961 6.82956 8.8235 7.15567C8.49683 7.48234 8.3335 7.87484 8.3335 8.33317C8.3335 8.7915 8.49683 9.18373 8.8235 9.50984C9.14961 9.8365 9.54183 9.99984 10.0002 9.99984ZM10.0002 16.1248C11.6946 14.5693 12.9516 13.1559 13.771 11.8848C14.5904 10.6143 15.0002 9.48595 15.0002 8.49984C15.0002 6.98595 14.5174 5.74623 13.5518 4.78067C12.5868 3.81567 11.4029 3.33317 10.0002 3.33317C8.59738 3.33317 7.41322 3.81567 6.44766 4.78067C5.48266 5.74623 5.00016 6.98595 5.00016 8.49984C5.00016 9.48595 5.40988 10.6143 6.22933 11.8848C7.04877 13.1559 8.30572 14.5693 10.0002 16.1248ZM10.0002 18.3332C7.76405 16.4304 6.09405 14.6629 4.99016 13.0307C3.88572 11.399 3.3335 9.88873 3.3335 8.49984C3.3335 6.4165 4.00377 4.75678 5.34433 3.52067C6.68433 2.28456 8.23627 1.6665 10.0002 1.6665C11.7641 1.6665 13.316 2.28456 14.656 3.52067C15.9966 4.75678 16.6668 6.4165 16.6668 8.49984C16.6668 9.88873 16.1149 11.399 15.011 13.0307C13.9066 14.6629 12.2363 16.4304 10.0002 18.3332Z" fill="#B23D2B" />
            </svg>
            {album.location && <p className={style.albumCaption}>{album.location}</p>}
          </div>
          <Disqus config={disqusConfig}/>
        </div>
      </main>
    </Layout>
  )
}

export function Head({ data }) {
  return (
    <>
      <title>{data.allStrapiAlbum.nodes[0].basic.title} | 可可托海没有海</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="设计师、开发者李大毛的个人网站" />
    </>
  )
}

// 查询指定id的相册
export const albumQuery = graphql`
  query AlbumViewerById($strapi_id: Int!) {
    allStrapiAlbum(filter: {strapi_id: {eq: $strapi_id}}) {
      nodes {
        basic {
          date
          description
          isTop
          title
        }
        location
        gallery {
          localFile {
            childImageSharp {
            gatsbyImageData(width: 960, placeholder: DOMINANT_COLOR)
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

export default AlbumViewer