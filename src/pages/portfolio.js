import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout/layout";
import * as style from "../styles/portfolio.module.css"
import designer from "../images/designer.svg"
import developer from "../images/developer.svg"
import photographer from "../images/photographer.svg"
import SocialMedia from "../components/social-media";


const Portfolios = ({ data }) => {
  const darmau = data.allStrapiPortfolio.nodes[0]
  const vanke = data.allStrapiPortfolio.nodes[2]
  const mindmark = data.allStrapiPortfolio.nodes[3]
  const ubisoft = data.allStrapiPortfolio.nodes[1]
  return (
    <Layout>
      <main className={style.mainContent}>
        <section className={style.coverSection}>
          <div className={style.textContainer}>
            <p className={style.coverIntro}>你好，我是</p>
            <h1 className={style.glitch}>李大毛没有猫</h1>
            <p className={style.coverDescription}>比起单纯的设计界面，我更享受创造和将创造变成现实的过程。希望我能成为设计师和工程师之间的桥梁，优化产品的实际体验，使成品更接近设计师的设想。</p>
            <SocialMedia />
          </div>
        </section>

        <section className={style.contentSection}>
          <div className={style.sectionHeader}>
            <h1 className={style.sectionTitle}>我是一个……</h1>
          </div>
          <div className={style.roles}>

            <div className={style.role}>

              <img src={designer} alt="设计师图标" />

              <div>
                <h2 className={style.personalTitle}>设计师</h2>
                <p className={style.personalText}>我喜欢设计简洁、高效、令人愉悦的产品。</p>
              </div>

              <h3 className={style.whatIDo}>我设计过</h3>
              <p className={style.personalText}>网页，iOS/Android，小程序，平面</p>
              <h3 className={style.whatIDo}>使用过的软件</h3>
              <ol className={style.skillList}>
                <li>Figma</li>
                <li>Framer</li>
                <li>Sketch</li>
                <li>Webflow</li>
                <li>Affinity Designer</li>
              </ol>

            </div>

            <div className={style.role}>
              <img src={developer} alt="开发者图标" />

              <div>
                <h2 className={style.personalTitle}>开发者</h2>
                <p className={style.personalText}>虽然才入门，但我已爱上将脑海里构思的产品变成现实的感觉。</p>
              </div>

              <h3 className={style.whatIDo}>我初步掌握的</h3>
              <p className={style.personalText}>HTML，CSS，Javascript，React</p>
              <h3 className={style.whatIDo}>计划掌握了解的</h3>
              <ol className={style.skillList}>
                <li>Vue</li>
                <li>P5.js</li>
                <li>Three.js</li>
                <li>Typescript</li>
              </ol>

            </div>

            <div className={style.role}>

              <img src={photographer} alt="摄影师图标" />

              <div>
                <h2 className={style.personalTitle}>摄影师</h2>
                <p className={style.personalText}>我还是一个自封的业余摄影师，你可以在本站观看我的拍摄作品。</p>
              </div>

              <h3 className={style.whatIDo}>我喜欢拍摄</h3>
              <p className={style.personalText}>自然风光，城市风光，航拍</p>
              <h3 className={style.whatIDo}>工具</h3>
              <ol className={style.skillList}>
                <li>Lightroom</li>
                <li>Photoshop</li>
                <li>剪映</li>
                <li>Adobe Premiere</li>
              </ol>

            </div>

          </div>
        </section>

        <section className={style.contentSection}>
          <div className={style.sectionHeader}>
            <h3 className={style.sectionTitle}>作品</h3>
            <div className={style.sectionIntro}>一些我觉得值得说说和挺有意思的项目</div>
          </div>

          {/* 个人网站 */}
          <Link to={'/portfolio/' + darmau.slug}>
            <div className={style.portfolioItem}>
              <GatsbyImage className={style.cover} image={getImage(darmau.cover.localFile)} />
              <div className={style.info}>
                <h3 className={style.portfolioTitle}>{darmau.title}</h3>
                <div className={style.tags}>
                  <span className={style.tag}>React</span>
                  <span className={style.tag}>GraphQL</span>
                  <span className={style.tag}>Headless CMS</span>
                  <span className={style.tag}>Nginx</span>
                  <span className={style.tag}>CDN</span>
                </div>
                <p className={style.portfolioDescription}>{darmau.description}</p>
                <p className={style.readMore}>了解更多</p>
              </div>
            </div>
          </Link>

          {/* 万科设计系统 */}
          <Link to={'/portfolio/' + vanke.slug}>
            <div className={style.portfolioItem2}>
              <GatsbyImage className={style.cover} image={getImage(vanke.cover.localFile)} />
              <div className={style.infoLeft}>
                <h3 className={style.portfolioTitle}>{vanke.title}</h3>
                <div className={style.tags}>
                  <span className={style.tag}>Design System</span>
                  <span className={style.tag}>组件库</span>
                  <span className={style.tag}>Design Token</span>
                  <span className={style.tag}>项目管理</span>
                </div>
                <p className={style.portfolioDescription}>{vanke.description}</p>
                <p className={style.readMore}>了解更多</p>
              </div>
            </div>
          </Link>

          {/* mindmark */}
          <Link to={'/portfolio/' + mindmark.slug}>
            <div className={style.portfolioItem}>
              <GatsbyImage className={style.cover} image={getImage(mindmark.cover.localFile)} />
              <div className={style.info}>
                <h3 className={style.portfolioTitle}>{mindmark.title}</h3>
                <div className={style.tags}>
                  <span className={style.tag}>思维导图</span>
                  <span className={style.tag}>标记语言</span>
                  <span className={style.tag}>概念设计</span>
                </div>
                <p className={style.portfolioDescription}>{mindmark.description}</p>
                <p className={style.readMore}>了解更多</p>
              </div>
            </div>
          </Link>

          {/* 育碧字体 */}
          <Link to={'/portfolio/' + ubisoft.slug}>
            <div className={style.portfolioItem2}>
              <GatsbyImage className={style.cover} image={getImage(ubisoft.cover.localFile)} />
              <div className={style.infoLeft}>
                <h3 className={style.portfolioTitle}>{ubisoft.title}</h3>
                <div className={style.tags}>
                  <span className={style.tag}>Typography</span>
                  <span className={style.tag}>字体</span>
                  <span className={style.tag}>分析</span>
                </div>
                <p className={style.portfolioDescription}>{ubisoft.description}</p>
                <p className={style.readMore}>了解更多</p>
              </div>
            </div>
          </Link>

        </section>

        <section className={style.contentSection}>
          <div className={style.sectionHeader}>
            <h3 className={style.sectionTitle}>想聊聊？</h3>
            <div className={style.sectionIntro}>你可以通过邮件、微信公众号，甚至是在评论区留言，总有办法能找到我。</div>
            <button className={style.mailButton}><a href="mailto:contact@darmau.design">发邮件</a></button>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <title>李大毛的作品集</title>
      <meta name="description" content="设计师、开发者李大毛的部分作品展示" />
    </>
  )
}

export const portfolioQuery = graphql`{
  allStrapiPortfolio(sort: {date: DESC}) {
    nodes {
      title
      slug
      description
      cover {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
}`

export default Portfolios
