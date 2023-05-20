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

      <Script
        async
        defer
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

      <Script
        async
        id="setmore_script"
        type="text/javascript"
        src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
      ></Script>
    </>
  );
};

export default Layout;
