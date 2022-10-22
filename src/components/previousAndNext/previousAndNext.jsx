import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as style from "./index.module.css";

export const PreviousAndNext = (props) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticle(sort: { order: DESC, fields: basic___date }) {
        edges {
          node {
            basic {
              title
            }
            strapi_id
          }
          previous {
            basic {
              title
            }
            slug
          }
          next {
            basic {
              title
            }
            slug
          }
        }
      }
    }
  `);

  const articleList = data.allStrapiArticle.edges;

  const currentIndex = articleList.findIndex(
    (item) => item.node.strapi_id === props.strapiId
  );
  const currentArticle = articleList[currentIndex];

  return (
    <div className={style.prevNext}>

      {currentArticle.previous ? (
        <Link to={"/article/" + currentArticle.previous.slug}>
          <div className={style.prev}>
            <p className={style.header}>下一篇</p>
            <h3 className={style.articleTitle}>
              {currentArticle.previous.basic.title}
            </h3>
          </div>
        </Link>
      ) : (
        <div className={style.prev}>
          <p className={style.header}>下一篇</p>
          <h3 className={style.articleDisable}>已经是最新</h3>
        </div>
      )}

      {currentArticle.next ? (
        <Link to={"/article/" + currentArticle.next.slug}>
          <div className={style.next}>
            <p className={style.header}>前一篇</p>
            <h3 className={style.articleTitle}>
              {currentArticle.next.basic.title}
            </h3>
          </div>
        </Link>
      ) : (
        <div className={style.next}>
          <p className={style.header}>上一篇</p>
          <h3 className={style.articleDisable}>已经是第一篇</h3>
        </div>
      )}
      
    </div>
  );
};
