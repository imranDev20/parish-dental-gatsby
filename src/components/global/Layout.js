import React from "react";
import loadable from "@loadable/component";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = loadable(() => import("./Footer"));

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Layout;
