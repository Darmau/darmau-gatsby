import React from "react";
import * as style from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Subscription() {
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
        <StaticImage className={style.qrcode} src="../../images/qrcode.png" />
        <div className={style.searchFrame}>
          <p className={style.intro}>微信公众号</p>
          <div className={style.searchBar}>
            <span class="material-symbols-outlined">search</span>
            <p>可可托海没有海</p>
          </div>
        </div>
      </div>
      <div className={style.external}>
        <a href="https://darmau.design/rss" target="_blank" rel="noreferrer">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 17c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.021-.588 1.413A1.925 1.925 0 015 21zm12 0c0-1.933-.367-3.746-1.1-5.438a14.25 14.25 0 00-3.012-4.45A14.25 14.25 0 008.438 8.1C6.746 7.367 4.933 7 3 7V4c2.35 0 4.558.446 6.625 1.338 2.067.891 3.867 2.104 5.4 3.637 1.533 1.533 2.746 3.333 3.638 5.4C19.554 16.442 20 18.65 20 21h-3zm-6 0c0-2.217-.78-4.104-2.338-5.662C7.104 13.779 5.217 13 3 13v-3c1.533 0 2.967.288 4.3.863a11.093 11.093 0 013.488 2.349 11.093 11.093 0 012.349 3.488c.575 1.333.863 2.767.863 4.3h-3z"
              fill="#fff"
            />
          </svg>
          RSS
        </a>
        <a
          href="https://twitter.com/darmaulee"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 5.96154C22.25 6.35385 21.5 6.48462 20.625 6.61538C21.5 6.09231 22.125 5.30769 22.375 4.26154C21.625 4.78462 20.75 5.04615 19.75 5.30769C19 4.52308 17.875 4 16.75 4C14.125 4 12.125 6.61538 12.75 9.23077C9.375 9.1 6.375 7.4 4.25 4.78462C3.125 6.74615 3.75 9.23077 5.5 10.5385C4.875 10.5385 4.25 10.2769 3.625 10.0154C3.625 11.9769 5 13.8077 6.875 14.3308C6.25 14.4615 5.625 14.5923 5 14.4615C5.5 16.1615 7 17.4692 8.875 17.4692C7.375 18.6462 5.125 19.3 3 19.0385C4.875 20.2154 7 21 9.25 21C16.875 21 21.125 14.3308 20.875 8.18462C21.75 7.66154 22.5 6.87692 23 5.96154Z"
              fill="white"
            />
          </svg>
          Follow Twitter
        </a>
      </div>
    </div>
  );
};
