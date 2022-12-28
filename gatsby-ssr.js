const HtmlAttributes = {
  lang: "zh"
}

const HeadComponents = [
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2439295902943960"
     crossorigin="anonymous"></script>
]

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
