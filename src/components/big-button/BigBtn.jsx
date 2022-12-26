import React from "react";
import * as style from "./index.module.css"

const BigBtn = (props) => {
  return (
    <a className={style.bigButton} href={props.href}>{props.label}</a>
  )
}

export default BigBtn;