const React = require('react')

const HtmlAttributes = {
  lang: "zh"
}

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes(HtmlAttributes)
}