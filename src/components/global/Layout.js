import React from "react";
import loadable from "@loadable/component";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Script } from "gatsby";
const Footer = loadable(() => import("./Footer"));

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ToastContainer />
      <Footer />
      {/* <Script
        defer
        async
        id="hs-script-loader"
        type="text/javascript"
        src="//js.hs-scripts.com/27046288.js"
      /> */}
    </>
  );
};

export default Layout;