import React from "react";

const VideoFrame = (props) => {
  return (
    <iframe
      src={props.src}
      key={props.key}
      width="100%"
      height="100%"
      title={props.title}
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
    ></iframe>
  )
}

export default VideoFrame