import React from "react";
import Navbar from "../nav-bar/nav-bar"
import Footer from "../footer/footer"
import * as style from "./index.module.css"

const Layout = ({ children }) => {
  return (
    <div className={style.mainContainer}>
      <Navbar />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;