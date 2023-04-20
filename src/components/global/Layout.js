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

      <Script
        id="first-unique-id"
        dangerouslySetInnerHTML={{
          __html: `(function(d, w, c) {
          w.ChatraID = '${process.env.CHATRA_ID}';
          var s = d.createElement('script');
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = 'https://call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'Chatra');`,
        }}
      />
    </>
  );
};

export default Layout;
