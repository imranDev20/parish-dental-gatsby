import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Script } from "gatsby";
import { Button, IconButton, ThemeProvider } from "@material-tailwind/react";
import { BsArrowUp } from "react-icons/bs";
import { CartProvider } from "use-shopping-cart";
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
          // initial: {
          //   color: "text-secondary focus:ring-secondary/20 border-secondary",
          // },
          // fullWidth: {
          //   color: "text-secondary focus:ring-secondary/20 border-secondary",
          // },
        },
      },
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <a
        className={`mt-0 lg:mt-7 flex justify-center lg:justify-start fixed top-0 z-50 transition-all ${
          isVisible ? "block" : "hidden"
        }`}
        href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
        target="_blank"
      >
        <Button
          className=" bg-secondary hover:shadow-white/20 text-white"
          size="lg"
        >
          Book Now
        </Button>
      </a>

      <IconButton onClick={scrollToTop} className={`!fixed bottom-10 left-5`}>
        <BsArrowUp />
      </IconButton>
    </ThemeProvider>
  );
};

export default Layout;
