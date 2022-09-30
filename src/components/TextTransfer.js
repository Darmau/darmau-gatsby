// 正文处理组件
import React from "react";

const blocks = [
  {
    "id": "aVlWivu0Nc",
    "type": "header",
    "data": {
      "text": "1号标题",
      "level": 1
    }
  },
  {
    "id": "SPPQMxYQAI",
    "type": "header",
    "data": {
      "text": "2号标题",
      "level": 2
    }
  },
  {
    "id": "sSNsTVtL1I",
    "type": "header",
    "data": {
      "text": "3号标题",
      "level": 3
    }
  }
]

const TextTransfer = ([blocks]) => {
  const transHeader = (data) => { (<h1>{data.text}</h1>) }

  const translate = ({ block }) => {
    if (block.type === 'header') { transHeader(block.data) }
  }

  const resultText = blocks.map(block => translate(block))
  return resultText
}

const test = TextTransfer(blocks)
console.log(test)