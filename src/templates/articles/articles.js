import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Pagination from "../../components/pagination/pagination";
import * as style from "./index.module.css"
import * as about from "../article-content/index.module.css"

const Articles = ({ data }) => {
  const articles = data.allStrapiArticle.nodes
  const pageInfo = data.allStrapiArticle.pageInfo
  const categories = data.allStrapiCategoryArticle.nodes
  const tags = data.allStrapiTag.nodes

  return (
    <Layout>
      <div className={style.container}>
        <aside className={style.sort}>
          <header className={style.aboutAuthorHeader}>
            <small className={style.aboutAuthorTitle}>筛选</small>
            <div className={style.line}></div>
          </header>
          <div className={style.sortItem}>
            <h4 className={style.sortTitle}>分类</h4>
            <ul className={style.sortList}>
              {categories.map(category => 
              (<li className={style.articleCategory}>
                <Link to={'/category/articles/' + category.slug}>{category.title}</Link>
              </li>))}
            </ul>
          </div>
          <div>
            <h4 className={style.sortTitle}>标签</h4>
            <ul className={style.sortList}>
              {tags.map(tag => (<li className={style.articleTag}>
                <Link to={'/tag/' + tag.slug}>#{tag.title}</Link>
              </li>))}
            </ul>
          </div>
          <div className={about.wechatInfo}>
            <StaticImage className={about.wechatImg} src="../../images/qrcode.png" />
            <small className={about.wechatText}>获取本站更新，发表评论，请关注公众号</small>
            <div className={about.rss}>
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_230_1851)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6275 0 24.0001 5.37257 24.0001 12C24.0001 18.6275 18.6275 24.0001 12 24.0001C5.37257 24.0001 0 18.6275 0 12C0 5.37257 5.37257 0 12 0ZM7.84578 14.6417C7.0141 14.6417 6.33824 15.3198 6.33824 16.1463C6.33824 16.977 7.01403 17.648 7.84578 17.648C8.68004 17.648 9.3554 16.977 9.3554 16.1463C9.3554 15.3198 8.68019 14.6417 7.84578 14.6417ZM6.33968 10.185V12.3556C7.75318 12.3556 9.08151 12.9084 10.082 13.9098C11.0816 14.9083 11.6335 16.243 11.6335 17.662H13.8134C13.8134 13.5397 10.4592 10.1856 6.33968 10.1856V10.185ZM6.34241 6.33795V8.50904C11.3829 8.50904 15.4849 12.6153 15.4849 17.6614L17.6618 17.6616C17.6618 11.4194 12.583 6.33817 6.34256 6.33817L6.34241 6.33795Z" fill="#F26522" />
                </g>
                <defs>
                  <clipPath id="clip0_230_1851">
                    <rect width="32" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <small className={about.wechatText}><Link to="/rss.xml">RSS</Link></small>
            </div>
          </div>
        </aside>
        <main className={style.articleContainer}>
          <header className={style.aboutAuthorHeader}>
            <small className={style.aboutAuthorTitle}>全部文章</small>
            <div className={style.line}></div>
          </header>
          <div className={style.articleGrid}>
            {
              articles.map(node => {
                const image = getImage(node.cover.localFile)
                return (
                  <Link to={'/article/' + node.slug}>
                  <article className={style.articleCard}>
                    <GatsbyImage className={style.articleCover} image={image} alt={node.basic.title} />
                    <div className={style.articleInfo}>
                      <h4 className={style.articleTitle}>
                        {node.basic.title}
                      </h4>
                      <p className={style.articleDescription}>{node.basic.description}</p>
                      <div className={style.articleRelative}>
                        <p className={style.articleCategory}><Link to={'/category/articles/' + node.category_article.slug}>{node.category_article.title}</Link></p>
                        <p className={style.articleDate}>{node.basic.date}</p>
                      </div>
                    </div>
                  </article>
                  </Link>
                )
              })
            }
          </div>
          <Pagination pageInfo={pageInfo} sort='articles' />
        </main>
      </div>
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <title>文章 | 可可托海没有海</title>
      <meta name="description" content="设计师、开发者李大毛的文章" />
    </>
  )
}

export const allStrapiArticle = graphql`query articleListQuery($skip: Int!, $limit: Int!) {
  allStrapiArticle(sort: {basic: {date: DESC}}, skip: $skip, limit: $limit) {
    nodes {
      cover {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      slug
      strapi_id
      basic {
        title
        description
        date
      }
      category_article {
        title
        slug
      }
    }
    pageInfo {
      currentPage
      hasNextPage
      hasPreviousPage
      pageCount
    }
  }
  allStrapiCategoryArticle {
    nodes {
      title
      slug
    }
  }
  allStrapiTag {
    nodes {
      title
      slug
    }
  }
}`

export default Articles