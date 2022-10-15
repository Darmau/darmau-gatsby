import React from "react";
import * as style from "../templates/article-content/index.module.css"

const Catalog = ({ data }) => {
  const mainContentObject = JSON.parse(data)
  const blocksObj = mainContentObject.blocks
  const headersArr = []
  for (let i in blocksObj) {
    if (blocksObj[i].type === 'header') {
      headersArr.push(blocksObj[i])
    }
  }

  let num2 = 0, num3 = 0, num4 = 0
  function generateHeader(header) {
    const level = header.level
    switch (level) {
      case 1:
        break
      case 2:
        num2++
        return (<a href={'#h2-' + num2.toString()}>{header.text}</a>)
      case 3:
        num3++
        return (<a href={'#h3-' + num3.toString()}>&nbsp;&nbsp;{header.text}</a>)
      case 4:
        num4++
        return (<a href={'#h4-' + num4.toString()}>&nbsp;&nbsp;&nbsp;&nbsp;{header.text}</a>)
      case 5:
        break
      case 6:
        break
      default:
        return (<p>{data.text}</p>)
    }
  }

  return (
    <aside className={style.catalog}>
      <header className={style.aboutAuthorHeader}>
        <small className={style.aboutAuthorTitle}>目录</small>
        <div className={style.line}></div>
      </header>
      {headersArr.map(
        header => {
          return generateHeader(header.data)
        }
      )}
    </aside>
  )
}

export default Catalog