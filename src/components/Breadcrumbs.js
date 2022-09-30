import { Link } from "gatsby";
import React from "react";
import * as style from "../styles/Breadcrumbs.module.css"

const Breadcrumbs = (props) => {
  let parentPage = ''
  switch (props.upLevel) {
    case 'article': parentPage = '全部文章'; break
    case 'video': parentPage = '全部视频'; break
    case 'album': parentPage = '全部照片';break
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