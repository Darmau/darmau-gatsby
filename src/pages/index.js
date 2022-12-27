import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout/layout";
import * as style from "../styles/index.module.css"
import Cover from "../components/cover/cover.js";
import SubscriptionForm from "../components/subscription/Subscription";

function IndexPage({ data }) {

  const articles = data.allStrapiArticle.nodes  //文章数组
  const photos = data.allStrapiAlbum.nodes  //摄影数组
  const videos = data.allStrapiVideo.nodes  //视频数组

  return (
    <Layout>
      <section className={style.coverBlock}>
        <Cover />
      </section>
      <section className={style.sectionBlock}>
        <div className={style.contentBlock}>
          <header className={style.contentHeader}>
            <hgroup>
              <span className={style.sectionTitle}>文章</span>
              <h2 className={style.sectionDes}>一些关于设计和开发的东西，一些扯淡，一些历史地理</h2>
            </hgroup>
            <button className={style.more}>
              <Link to="/articles">more</Link>
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
        </div>
      </section>

      <section className={style.sectionBlock}>
        <div className={style.contentBlock}>
        <header className={style.contentHeader}>
            <hgroup>
              <span className={style.sectionTitle}>摄影</span>
              <h2 className={style.sectionDes}>只买得起副厂镜头的摄影爱好者。喜欢城市和自然风光</h2>
            </hgroup>
            <button className={style.more}>
              <Link to="/albums">more</Link>
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
        </div>
      </section>

      <section className={style.sectionBlock}>
        <div className={style.contentBlock}>
        <header className={style.contentHeader}>
            <hgroup>
              <span className={style.sectionTitle}>视频</span>
              <h2 className={style.sectionDes}>擅长剪辑中老年风格的旅行视频，并且没什么人观看</h2>
            </hgroup>
            <button className={style.more}>
              <Link to="/videos">more</Link>
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
        </div>
      </section>

      <section className={style.sectionBlock} id="subscribe">
        <SubscriptionForm />
      </section>
    </Layout>
  )
}

// 获取6个文章、18张摄影、8个视频的相应信息,根据日期倒序提取
export const frontPageQuery = graphql`{
  allStrapiArticle(limit: 6, sort: {basic: {date: DESC}}) {
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
            gatsbyImageData(
              width: 320
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      slug
    }
  }
  allStrapiAlbum(sort: {basic: {date: DESC}}, limit: 24) {
    nodes {
      cover {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 200
              formats: [AUTO, WEBP, AVIF]
              placeholder: DOMINANT_COLOR
            )
          }
        }
        alternativeText
      }
      slug
    }
  }
  allStrapiVideo(sort: {basic: {date: DESC}}, limit: 8) {
    nodes {
      basic {
        title
        date
      }
      slug
      cover {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 320
              formats: [AUTO, WEBP, AVIF]
              placeholder: DOMINANT_COLOR
            )
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
      <title>可可托海没有海</title>
      <meta name="description" content="设计师、开发者李大毛的个人网站，内容形式包括文章、摄影照片和视频，涵盖主题包括设计、开发、前端、摄影、风光、视频等" />
    </>
  )
}