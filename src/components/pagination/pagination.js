import React from "react";
import { Link } from "gatsby";
import * as style from "./index.module.css"

//接收一个pageInfo对象，一个分类的名称

const Pagination = (props) => {
  const sort = props.sort
  const pageInfo = props.pageInfo

  return (
    <div className={style.pagination}>
      <div className={style.pageNav}>
        <Link to={`/${sort}/${pageInfo.currentPage === 2 ? `` : pageInfo.currentPage - 1}`}>
          {pageInfo.hasPreviousPage && "上一页"}
        </Link>
      </div>
      <div className={style.currentPage}>第{pageInfo.currentPage}页 / 共{pageInfo.pageCount}页</div>
      <div className={style.pageNav}>
        <Link to={`/${sort}/${pageInfo.currentPage + 1}`}>
          {pageInfo.hasNextPage && "下一页"}
        </Link></div>
    </div>
  )

}

export default Pagination