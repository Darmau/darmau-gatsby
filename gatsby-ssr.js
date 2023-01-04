const React = require("react");

const HtmlAttributes = {
  lang: "zh",
};

const HeadComponents = [
  <script
    key="adsense"
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2439295902943960"
    crossOrigin="anonymous"
  ></script>,
  <script
    key="plausible"
    defer
    data-domain="darmau.design"
    src="https://analytics.darmau.design/js/script.js"
  ></script>,
];

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
};
