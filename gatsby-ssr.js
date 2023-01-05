const React = require("react");

const HtmlAttributes = {
  lang: "zh",
};

const HeadComponents = [
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
