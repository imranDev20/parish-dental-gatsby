import React, { useState } from "react";
import loadable from "@loadable/component";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Script } from "gatsby";
import Drawer from "./Drawer";
import { ThemeProvider } from "@material-tailwind/react";
const Footer = loadable(() => import("./Footer"));

const Layout = ({ children }) => {
  const theme = {
    input: {
      styles: {
        base: {
          input: {
            color: "text-gray-400 focus:!border-secondary",
          },
          label: {
            color:
              "peer-focus:text-white  peer-focus:after:!border-secondary peer-focus:before:!border-secondary after:border-secondary",
          },
        },
      },
    },
    textarea: {
      styles: {
        base: {
          textarea: {
            color: "text-gray-400 focus:border-secondary",
          },
          label: {
            color:
              "peer-focus:text-white  peer-focus:after:!border-secondary peer-focus:before:!border-secondary after:border-secondary",
          },
        },
      },
    },
    button: {
      styles: {
        base: {
          initial: {
            color: "text-secondary focus:ring-secondary/20 border-secondary",
          },
          fullWidth: {
            color: "text-secondary focus:ring-secondary/20 border-secondary",
          },
        },
      },
    },
  };

  return (
    <ThemeProvider value={theme}>
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
        type="text/javascript"
        src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
      ></Script>
    </ThemeProvider>
  );
};

export default Layout;
