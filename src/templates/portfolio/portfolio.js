import React from "react"
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import Catalog from "../../components/catalog";
import MainBody from "../../components/TextTransfer";
import * as style from "./index.module.css"

const PortfolioCase = ({ data }) => {
  const portfolio = data.allStrapiPortfolio.nodes[0];
  const cover = getImage(portfolio.cover.localFile);
  const mainContentString = portfolio.mainBody.data.mainBody;

  return (
    <Layout>
      <Breadcrumbs upLevel="portfolio" active={portfolio.title} />
      <main className={style.articleContainer}>
        <Catalog data={mainContentString} />
        <article>

          {/* 此处同文章样式 */}
          <GatsbyImage className={style.articleCover} image={cover} alt={portfolio.title} />
          <h1 className={style.articleTitle}>{portfolio.title}</h1>
          <p className={style.date}>{portfolio.date}</p>
          <p className={style.description}>{portfolio.description}</p>
          <div className={style.mainContent}>
            <MainBody data={mainContentString} />
          </div>
        </article>
        <address className={style.about}>
          <div>
            <header className={style.aboutAuthorHeader}>
              <small className={style.aboutAuthorTitle}>关于作者</small>
              <div className={style.line}></div>
            </header>
            <div className={style.info}>
              <svg className={style.avatar} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.9616 56.0369L37.1831 51.8804C37.8144 49.7323 37.6668 47.4302 36.7662 45.3804C35.6238 42.7804 35.7046 39.8057 36.9863 37.2715L39.3602 32.5781L35.9616 33.387L19.1686 45.5209C18.2356 46.1276 17.1102 43.2963 17.3693 41.8807C18.3689 36.4205 25.7658 30.3535 25.9657 28.129C26.1257 26.3494 25.4993 24.4214 25.1661 23.6799L19.3212 26.7207C18.5739 27.1094 17.7194 27.241 16.8899 27.0951C14.7229 26.7138 12.492 26.9628 10.4623 27.8124L7.77333 28.9379C7.37349 31.9714 8.05322 39.8988 13.9708 48.1499C19.8883 56.4009 31.097 56.8458 35.9616 56.0369Z" fill="#E9EAEB" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.5262 45.2925C46.3878 51.0502 39.6317 54.7999 31.9999 54.7999C19.4078 54.7999 9.1999 44.592 9.1999 31.9999C9.1999 31.205 9.24058 30.4197 9.31996 29.6458C9.7516 29.3716 10.2347 29.0818 10.728 28.8132C11.777 28.2421 12.7197 27.8529 13.2994 27.795C14.7015 27.6547 16.8156 28.1016 17.7252 28.3614L18.0895 28.4655L18.4313 28.3021L24.7607 25.275C24.893 25.6242 25.0063 26.0687 25.0545 26.5705C25.1407 27.4686 25.0001 28.3725 24.5587 29.0592C24.0415 29.8637 23.1841 31.0194 22.2021 32.3429L22.202 32.343L22.2019 32.3431L22.2019 32.3432C21.5006 33.2883 20.7359 34.3191 19.9861 35.3687C19.106 36.6009 18.2602 37.8425 17.6183 38.9382C17.2974 39.486 17.0179 40.0134 16.8093 40.4962C16.6069 40.9645 16.4417 41.4566 16.4033 41.9169C16.21 44.2375 17.4409 45.8307 18.1999 46.3999L18.7862 46.8396L19.3821 46.413C24.8077 42.5279 35.8851 34.6259 37.1299 33.8479C37.5271 33.5997 38.0213 33.5248 38.5414 33.571C38.9709 33.6091 39.3573 33.7254 39.6088 33.8293L50.5262 45.2925ZM51.6493 43.5717L40.924 32.3103L40.8035 32.1837L40.6471 32.1055C40.21 31.8869 39.5089 31.6491 38.7184 31.5788C37.9251 31.5084 36.9527 31.6002 36.0699 32.1519C35.9406 32.2327 35.7162 32.3825 35.4115 32.5907L28.596 23.2194C27.972 22.3614 26.8246 22.0709 25.8675 22.5286L17.9021 26.3382C16.7849 26.0533 14.6974 25.6452 13.1004 25.8049C12.08 25.9069 10.8228 26.4844 9.77171 27.0566C9.75864 27.0638 9.74557 27.0709 9.73252 27.078C11.9826 16.8518 21.0977 9.1999 31.9999 9.1999C44.592 9.1999 54.7999 19.4078 54.7999 31.9999C54.7999 36.2239 53.6512 40.1796 51.6493 43.5717ZM57.5999 31.9999C57.5999 46.1384 46.1384 57.5999 31.9999 57.5999C17.8614 57.5999 6.3999 46.1384 6.3999 31.9999C6.3999 17.8614 17.8614 6.3999 31.9999 6.3999C46.1384 6.3999 57.5999 17.8614 57.5999 31.9999ZM26.9785 24.3957L33.7678 33.7311C30.1122 36.29 23.1746 41.2395 18.9357 44.2729C18.623 43.8013 18.3154 43.0553 18.3964 42.083C18.4081 41.9432 18.4741 41.6853 18.6452 41.2896C18.81 40.9083 19.0462 40.4575 19.344 39.9491C19.9396 38.9324 20.7437 37.749 21.6136 36.5312C22.3001 35.57 23.0377 34.5749 23.7333 33.6364C24.7606 32.2504 25.6964 30.9879 26.2411 30.1407C26.9996 28.9607 27.1591 27.5646 27.0453 26.3794C26.9786 25.6845 26.8117 24.9986 26.5693 24.41L26.7305 24.3329C26.8175 24.2913 26.9218 24.3177 26.9785 24.3957Z" fill="#444137" />
              </svg>
              <div className={style.person}>
                <div className={style.authorName}>李大毛没有猫</div>
                <div className={style.slogan}>喜欢写代码的设计师。爱好摄影、骑摩托。现居成都。</div>
              </div>
            </div>
          </div>
        </address>
      </main>
    </Layout>
  );
}

export function Head({ data }) {
  return (
    <>
      <title>{data.allStrapiPortfolio.nodes[0].title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={data.allStrapiPortfolio.nodes[0].description} />
    </>
  )
}

export const portfolioQuery = graphql`
  query PortfolioByID($strapi_id: Int!) {
    allStrapiPortfolio(filter: {strapi_id: {eq: $strapi_id}}) {
      nodes {
        slug
        title
        description
        date
        mainBody {
          data {
            mainBody
          }
        }
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`

export default PortfolioCase