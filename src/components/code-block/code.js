import React, { useEffect } from "react";
import highlightCode from "../../utils/highlightCode";
import * as style from "./index.module.css"

export default function Code({data}) {
  useEffect(() => {
    highlightCode()
  })
  return (
    <pre className={style.codeBlock}>
      <code className={style.codeLine}>{data}</code>
    </pre>
  )
}