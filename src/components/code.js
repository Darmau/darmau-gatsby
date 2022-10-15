import React, { useEffect } from "react";
import highlightCode from "../utils/highlightCode";

export default function Code({data}) {
  useEffect(() => {
    highlightCode()
  })
  return (
    <pre>
      <code>{data}</code>
    </pre>
  )
}