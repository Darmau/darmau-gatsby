import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout/layout";
import * as style from "../styles/index.module.css"
import Cover from "../components/cover/cover.js";

function IndexPage({ data }) {

  const articles = data.allStrapiArticle.nodes  //文章数组
  const photos = data.allStrapiAlbum.nodes  //摄影数组
  const videos = data.allStrapiVideo.nodes  //视频数组

  return (
    <Layout>
      <section className={style.coverBlock}>
        <Cover />
      </section>
      <section className={style.contentBlock}>
        <header className={style.contentHeader}>
          <h2 className={style.sectionTitle}>文章</h2>
          <button className={style.more}>
            <Link to="/articles">更多文章</Link>
          </button>
        </header>
        <div className={style.articleGrid}>
          {articles.map(article => {
            const cover = getImage(article.cover.localFile)
            return (
              <Link to={'/article/' + article.slug}>
                <div className={style.articleCard}>
                  <GatsbyImage className={style.articleCover} image={cover} alt={article.basic.title} />
                  <div className={style.articleInfo}>
                    <h3 className={style.contentTitle}>{article.basic.title}</h3>
                    <p className={style.articleDescription}>{article.basic.description}</p>
                    <div>
                      <span className={style.articleCategory}>{article.category_article.title}</span>
                      <span className={style.articleDate}>{article.basic.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className={style.contentBlock}>
        <header className={style.contentHeader}>
          <h2 className={style.sectionTitle}>摄影</h2>
          <button className={style.more}>
            <Link to="/albums">更多照片</Link>
          </button>
        </header>
        <div className={style.photoGrid}>
          {photos.map(photo => {
            const cover = getImage(photo.cover.localFile)
            return (
              <Link className={style.photoLink} to={'/album/' + photo.slug}>
                <GatsbyImage className={style.photoCover} image={cover} alt={photo.cover.alternativeText} />
              </Link>
            )
          })}
        </div>
      </section>

      <section className={style.contentBlock}>
        <header className={style.contentHeader}>
          <h2 className={style.sectionTitle}>视频</h2>
          <button className={style.more}>
            <Link to="/videos">更多视频</Link>
          </button>
        </header>
        <div className={style.videoGrid}>
          {videos.map(video => {
            const cover = getImage(video.cover.localFile)
            return (
              <Link to={'/video/' + video.slug}>
                <div className={style.videoCard}>
                  <GatsbyImage className={style.videoCover} image={cover} alt={video.basic.title} />
                  <h3 className={style.contentTitle}>{video.basic.title}</h3>
                  <p className={style.videoDate}>{video.basic.date}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </Layout>
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
              gatsbyImageData(width: 320, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
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
              gatsbyImageData(width: 200, formats: [AUTO, WEBP, AVIF], placeholder: DOMINANT_COLOR)
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
              gatsbyImageData(width: 320, formats: [AUTO, WEBP, AVIF], placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }`

export default IndexPage;

export function Head() {
  return (
    <>
      <title>首页 | 可可托海没有海</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="设计师、开发者李大毛的个人网站" />
    </>
  )
}