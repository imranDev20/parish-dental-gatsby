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
      <main
      // initial={{ opacity: 0, x: -200 }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0, x: 200 }}
      // transition={{
      //   type: "spring",
      //   mass: 0.35,
      //   stiffness: 75,
      //   duration: 0.3,
      // }}
      >
        {children}
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Layout;
