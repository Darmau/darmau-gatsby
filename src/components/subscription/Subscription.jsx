import React from "react";
import * as style from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";

const SubscriptionForm = () => {
  return (
    <div className={style.formContainer}>
      <hgroup>
        <h2>关注本站更新</h2>
        <p>如果你喜欢我的内容，有三种方式关注更新：</p>
        <ol>
          <li>邮件订阅，只推送干货文章；</li>
          <li>关注微信公众号，内容大部分一样，缺少交互信息以及存在自我审查；</li>
          <li>RSS订阅，实时追踪本站更新。</li>
        </ol>
      </hgroup>
      <form
        action="https://tinyletter.com/darmau"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/darmau', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <p>
          <label for="tlemail">Enter your email address</label>
        </p>
        <p>
          <input className={style.email} type="email" name="email" id="tlemail" placeholder="输入你的邮箱"/>
        </p>
        <input type="hidden" value="1" name="embed" />
        <input className={style.submitBtn} type="submit" value="订阅" />
      </form>
      <div>
        <StaticImage src="../../images/qrcode.png"/>
        <div>微信搜索公众号：可可托海没有海</div>
      </div>
      <div>
        <a href="https://darmau.com/rss" target="_blank" rel="noreferrer">RSS订阅</a>
        <a href="https://twitter.com/darmaulee" target="_blank" rel="noreferrer">Follow</a>
      </div>
    </div>
  );
};

export default SubscriptionForm;
