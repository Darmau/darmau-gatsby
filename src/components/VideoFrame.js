import React from "react";

export default function VideoFrame(props) {
    return (
        <iframe
            src={props.src} 
            width="840"
            height="525"
            scrolling="no" 
            border="0" 
            frameborder="no" 
            framespacing="0" 
            allowfullscreen="true"
        ></iframe>
    )
}
