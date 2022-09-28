import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
      <link
        rel="preload"
        href="./static/fonts/noto-serif-sc-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        key="notoSerif400"
      />,
      <link
        rel="preload"
        href="./static/fonts/noto-serif-sc-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        key="notoSerif700"
      />,
      <link
        rel="preload"
        href="./static/fonts/roboto-mono-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        key="robotoMono"
      />,
    ])
  }