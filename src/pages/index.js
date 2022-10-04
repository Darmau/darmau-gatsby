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
          <button>
            <Link to="/articles">更多文章</Link>
          </button>
        </header>
        <div className={style.articleGrid}>
          {articles.map(article => {
            const cover = getImage(article.cover.localFile)
            return (
              <div className={style.articleCard}>
                <GatsbyImage className={style.articleCover} image={cover} alt={article.basic.title} />
                <div className={style.articleInfo}>
                  <h4 className={style.contentTitle}><Link to={'/article/' + article.slug}>{article.basic.title}</Link></h4>
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
          <button>
            <Link to="/albums">更多照片</Link>
          </button>
        </header>
        <div className={style.photoGrid}>
          {photos.map(photo => {
            const cover = getImage(photo.cover.localFile)
            return (
              <Link to={'/album/' + photo.slug}>
                <GatsbyImage className={style.photoCover} image={cover} alt={photo.cover.alternativeText} />
              </Link>
            )
          })}
        </div>
      </section>

      <section className={style.contentBlock}>
        <header className={style.contentHeader}>
          <h2 className={style.sectionTitle}>视频</h2>
          <button>
            <Link to="/videos">更多视频</Link>
          </button>
        </header>
        <div className={style.videoGrid}>
          {videos.map(video => {
            const cover = getImage(video.cover.localFile)
            return (
              <div className={style.videoCard}>
                <GatsbyImage className={style.videoCover} image={cover} alt={video.basic.title} />
                <h5 className={style.contentTitle}><Link to={'/video/' + video.slug}>{video.basic.title}</Link></h5>
                <p className={style.videoDate}>{video.basic.date}</p>
              </div>
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
              gatsbyImageData(width: 320, placeholder: BLURRED, formats: AUTO)
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
              gatsbyImageData(width: 320, formats: AUTO, placeholder: BLURRED)
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
      <meta name="bytedance-verification-code" content="hIhTTTUL4HE+gifitM4U" />
      <meta name="sogou_site_verification" content="CsR7Ekik82" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZS3N1LGHWZ"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ZS3N1LGHWZ');
      </script>
    </>
  )
}