import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="flex-1 z-0 mt-16 sm:mt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;