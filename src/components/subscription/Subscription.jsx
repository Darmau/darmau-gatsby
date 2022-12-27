import React from "react";
import * as style from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";

const SubscriptionForm = () => {
  return (
    <div className={style.formContainer}>
      <hgroup className={style.instruction}>
        <h2>关注本站更新</h2>
        <p>如果你喜欢我的内容，有三种方式关注更新：</p>
        <ol>
          <li>
            关注微信公众号，内容大部分一样，缺少交互信息以及存在自我审查；
          </li>
          <li>RSS订阅，实时追踪本站更新；</li>
          <li>邮件订阅，只推送干货文章。</li>
        </ol>
      </hgroup>
      <form
        className={style.subscriptionForm}
        action="https://tinyletter.com/darmau"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/darmau', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <input
          className={style.email}
          type="email"
          name="email"
          id="tlemail"
          placeholder="输入你的邮箱"
        />

        <input type="hidden" value="1" name="embed" />
        <input className={style.submitBtn} type="submit" value="订阅" />
      </form>
      <div className={style.wechat}>
        <StaticImage src="../../images/qrcode.png" />
        <div className={style.searchFrame}>
          <p className={style.intro}>微信公众号</p>
          <div className={style.searchBar}>
            <svg
              className={style.logo}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
            </svg>
            <p>可可托海没有海</p>
          </div>
        </div>
      </div>
      <div className={style.external}>
        <a href="https://darmau.design/rss" target="_blank" rel="noreferrer">
          RSS订阅
        </a>
        <a
          href="https://twitter.com/darmaulee"
          target="_blank"
          rel="noreferrer"
        >
          Follow Twitter
        </a>
      </div>
    </div>
  );
};

export default SubscriptionForm;
