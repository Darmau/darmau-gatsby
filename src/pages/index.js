import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Head from "../components/Head";
import Layout from "../components/layout/layout";
import * as style from "../styles/index.module.css"

function IndexPage({ data }) {

  const articles = data.allStrapiArticle.nodes  //文章数组
  const photos = data.allStrapiAlbum.nodes  //摄影数组
  const videos = data.allStrapiVideo.nodes  //视频数组

  return (
    <>
      <Head title="可可托海没有海" />
      <Layout>
        <section className={style.cover}>
          <h1 className={style.coverTitle}>这里用什么图和文案都没想好</h1>
        </section>
        <section className={style.contentBlock}>
          <header className={style.contentHeader}>
            <h2 className={style.sectionTitle}>文章</h2>
            <button><Link to="/article">更多文章</Link><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0002 16.6666L8.81266 15.5L13.4793 10.8333H3.3335V9.16665H13.4793L8.81266 4.49998L10.0002 3.33331L16.6668 9.99998L10.0002 16.6666Z" fill="#B23D2B" />
            </svg>
            </button>
          </header>
          <div className={style.articleGrid}>
            {articles.map(article => {
              const cover = getImage(article.cover.localFile)
              return (
                <div className={style.articleCard}>
                  <GatsbyImage className={style.articleCover} image={cover} alt={article.basic.title} />
                  <div className={style.articleInfo}>
                    <h4 className={style.contentTitle}>{article.basic.title}</h4>
                    <p className={style.articleDescription}>{article.basic.description}</p>
                    <div>
                      <span className={style.articleCategory}>{article.category_article.title}</span>
                      <span className={style.articleDate}>{article.basic.date}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className={style.contentBlock}>
          <header className={style.contentHeader}>
            <h2 className={style.sectionTitle}>摄影</h2>
            <button><Link to="/album">更多照片</Link><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0002 16.6666L8.81266 15.5L13.4793 10.8333H3.3335V9.16665H13.4793L8.81266 4.49998L10.0002 3.33331L16.6668 9.99998L10.0002 16.6666Z" fill="#B23D2B" />
            </svg>
            </button>
          </header>
          <div className={style.photoGrid}>
            {photos.map(photo => {
              const cover = getImage(photo.cover.localFile)
              return (
                <Link className={style.photoWrapper} to={'/album/' + photo.slug}>
                  <GatsbyImage className={style.photoCover} image={cover} alt={photo.cover.alternativeText} />
                </Link>
              )
            })}
          </div>
        </section>

        <section className={style.contentBlock}>
          <header className={style.contentHeader}>
            <h2 className={style.sectionTitle}>视频</h2>
            <button><Link to="/video">更多视频</Link><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0002 16.6666L8.81266 15.5L13.4793 10.8333H3.3335V9.16665H13.4793L8.81266 4.49998L10.0002 3.33331L16.6668 9.99998L10.0002 16.6666Z" fill="#B23D2B" />
            </svg>
            </button>
          </header>
          <div className={style.videoGrid}>
            {videos.map(video => {
              const cover = getImage(video.cover.localFile)
              return (
                <div className={style.videoCard}>
                  <GatsbyImage className={style.videoCover} image={cover} alt={video.basic.title} />
                  <h5 className={style.contentTitle}>{video.basic.title}</h5>
                  <p className={style.videoDate}>{video.basic.date}</p>
                </div>
              )
            })}
          </div>
        </section>
      </Layout>
    </>
  )
}

// 获取6个文章、18张摄影、8个视频的相应信息,根据日期倒序提取
export const frontPageQuery = graphql`
  {
    allStrapiArticle(limit: 6, sort: {order: DESC, fields: basic___date}) {
      nodes {
        basic {
          title
          description
          date
        }
        category_article {
          title
        }
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED, formats: AUTO)
            }
          }
        }
        slug
      }
    }
    allStrapiAlbum(sort: {order: DESC, fields: basic___date}, limit: 24) {
      nodes {
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 200, formats: AUTO, placeholder: BLURRED)
            }
          }
          alternativeText
        }
        slug
      }
    }
    allStrapiVideo(sort: {order: DESC, fields: basic___date}, limit: 8) {
      nodes {
        basic {
          title
          date
        }
        slug
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 360, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }`

export default IndexPage;