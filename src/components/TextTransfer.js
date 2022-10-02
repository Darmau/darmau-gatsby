import React from "react";
import * as style from "../templates/article-content/index.module.css"

const MainBody = ({ data }) => {
  const mainContentObject = JSON.parse(data)
  const blocksObj = mainContentObject.blocks
  const blocksArr = []
  for (let i in blocksObj) {
    blocksArr.push(blocksObj[i])
  }

  // 将block分发到对应处理函数
  function transfer(block) {
    switch (block.type) {
      case 'header': return handleHeader(block.data)
      case 'paragraph': return handelParagraph(block.data)
      case 'list': return handleList(block.data)
      case 'delimiter': return handleDivider()
      case 'code': return handleCode(block.data)
      case 'quote': return handleQuote(block.data)
      case 'raw': return handleRaw(block.data)
      case 'image': return handleImage(block.data)

      default: return (<p>{block.data.text}</p>)
    }
  }

  //处理header
  let num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0, num6 = 0
  function handleHeader(data) {
    const level = data.level
    switch (level) {
      case 1:
        num1++
        return (<h1 id={'h1-' + num1.toString()}>{data.text}</h1>)
      case 2:
        num2++
        return (<h2 id={'h2-' + num2.toString()}>{data.text}</h2>)
      case 3:
        num3++
        return (<h3 id={'h3-' + num3.toString()}>{data.text}</h3>)
      case 4:
        num4++
        return (<h4 id={'h4-' + num4.toString()}>{data.text}</h4>)
      case 5:
        num5++
        return (<h5 id={'h5-' + num5.toString()}>{data.text}</h5>)
      case 6:
        num6++
        return (<h6 id={'h6-' + num6.toString()}>{data.text}</h6>)
      default:
        return (<p>{data.text}</p>)
    }
  }

  //处理段落
  function handelParagraph(data) {
    const paragraph = { __html: data.text }
    return (
      <p className={style.paragraph} dangerouslySetInnerHTML={paragraph}></p>
    )
  }

  //处理列表
  function handleList(data) {
    if (data.style === 'unordered') {
      return (
        <ul>{data.items.map(item => (<li>{item}</li>))}</ul>
      )
    } else {
      return (
        <ol>{data.items.map(item => (<li>{item}</li>))}</ol>
      )
    }
  }

  //处理分割线
  function handleDivider() {
    return (
      <div className={style.divider}></div>
    )
  }

  //处理代码 - 待优化
  function handleCode(data) {
    return (
      <div className={style.blockCode}>
        <code>{data.code}</code>
      </div>
    )
  }

  //处理引用
  function handleQuote(data) {
    return (
      <figure>
        <blockquote>{data.text}</blockquote>
        <figcaption>{data.caption}</figcaption>
      </figure>
    )
  }

  //处理html
  function handleRaw(data) {
    const rawHtml = { __html: data.html }
    return (
      <div className={style.rawHtml} dangerouslySetInnerHTML={rawHtml}></div>
    )
  }

  //处理图片
  function handleImage(data) {
    return (
      <picture className={style.imageFrame}>
        <img className={style.image} src={'https://darmau.media' + data.file.url} alt={data.file.alt} />
        {data.caption && <figcaption className={style.imageCaption}>{data.caption}</figcaption>}
      </picture>
    )
  }

  return (
    <div>
      {blocksArr.map(
        block => {
          return transfer(block)
        }
      )}
    </div>
  )
}

export default MainBody