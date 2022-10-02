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

  let num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0, num6 = 0
  function generateHeader(header) {
    const level = header.level
    switch (level) {
      case 1:
        num1++
        return (<a href={'#h1-' + num1.toString()}>{header.text}</a>)
      case 2:
        num2++
        return (<a href={'#h2-' + num2.toString()}>{header.text}</a>)
      case 3:
        num3++
        return (<a href={'#h3-' + num3.toString()}>{header.text}</a>)
      case 4:
        num4++
        return (<a href={'#h4-' + num4.toString()}>{header.text}</a>)
      case 5:
        num5++
        return (<a href={'#h5-' + num5.toString()}>{header.text}</a>)
      case 6:
        num6++
        return (<a href={'#h6-' + num6.toString()}>{header.text}</a>)
      default:
        return (<a>{data.text}</a>)
    }
  }

  return (
    <aside className={style.catalog}>
      <header className={style.aboutTitle}>
        <small className={style.aboutAuthor}>目录</small>
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