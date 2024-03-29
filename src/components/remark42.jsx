import * as React from "react"

const insertScript = (id, parentElement) => {
  const script = window.document.createElement("script")
  script.type = "text/javascript"
  script.async = true
  script.id = id

  let url = window.location.origin + window.location.pathname
  if (url.endsWith("/")) {
    url = url.slice(0, -1)
  }
  // Now the actual config and script-fetching function:
  script.innerHTML = `
    var remark_config = {
      host: "https://comment.darmau.design",
      site_id: "darmau.design",
      url: "${url}",
      theme: "light",
      components: ['embed'],
      locale: "zh",
      no_footer: true,
    };
    !function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);`
  parentElement.appendChild(script)
}

/* This function removes the previously added script from the DOM.
Might be necessary when page transitions happen, to make sure a new instance 
is created, pointing to the current URL. Although this might actually 
not be necessary, please do your own testing.*/
const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id)
  if (script) {
    parentElement.removeChild(script)
  }
}

// This function will be provided to useEffect and will insert the script
// when the component is mounted and remove it when it unmounts
const manageScript = () => {
  if (!window) {
    return
  }
  const document = window.document
  if (document.getElementById("remark42")) {
    insertScript("comments-script", document.body)
  }
  return () => removeScript("comments-script", document.body)
}

/* Another function for another useEffect - this is the most crucial part for
Gatsby compatibility. It will ensure that each page loads its own appropriate
comments, and that comments will be properly loaded */
const recreateRemark42Instance = () => {
  if (!window) {
    return
  }
  const remark42 = window.REMARK42
  if (remark42) {
    remark42.destroy()
    remark42.createInstance(window.remark_config)
  }
}

// The location prop is {props.location.pathname} from the parent component.
// I.e. invoke the component like this in the parent: <Comments location={props.location.pathname} />
const Comments = ({ location }) => {
  // Insert the two useEffect hooks. Maybe you can combine them into one? Feel free if you want to.
  React.useEffect(manageScript, [location])
  React.useEffect(recreateRemark42Instance, [location])

  return (
    <>
      <h2>评论</h2>
      <div id="remark42"></div>
    </>
  )
}

export default Comments