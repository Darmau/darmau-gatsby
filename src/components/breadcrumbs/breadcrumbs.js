import React from "react";
import { Link } from "gatsby";
import * as style from "./index.module.css"

const Breadcrumbs = (props) => {
  let parentPage = ''
  switch (props.upLevel) {
    case 'articles': parentPage = '全部文章'; break
    case 'videos': parentPage = '全部视频'; break
    case 'albums': parentPage = '全部照片';break
    case 'portfolio': parentPage = '作品集';break
    default: parentPage= '首页';
  }

  return (
    <ol className={style.breadList}>
      <li className={style.parent}>
        <span><Link to={'/' + props.upLevel}>{parentPage}</Link></span>
        <span className={style.separator}>/</span>
      </li>
      <li className={style.activeItem}>
        <span>{props.active}</span>
      </li>
    </ol>
  )
}

export default Breadcrumbs