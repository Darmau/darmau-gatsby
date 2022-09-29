import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import * as style from "../styles/Layout.module.css"

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