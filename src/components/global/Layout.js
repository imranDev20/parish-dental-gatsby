import React, { useContext, useEffect, useState } from "react";
import loadable from "@loadable/component";

import Header from "./Header";
import { ToastContainer } from "react-toastify";
import { Script } from "gatsby";
import {
  Badge,
  Button,
  IconButton,
  Spinner,
  ThemeProvider,
} from "@material-tailwind/react";
import { BsArrowUp, BsCart3 } from "react-icons/bs";

import { Drawer, Typography } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart/CartItem";
import getStripe from "../../utils/stripe";

import "react-toastify/dist/ReactToastify.css";

const Footer = loadable(() => import("./Footer"));
// import Footer from "./Footer";

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
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const closeDrawer = () => setOpen(false);

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

  const { cart } = useContext(CartContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const lineItems = cart.map((item) => ({
      price: item.priceId,
      quantity: item.quantity,
    }));

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: lineItems,
      billingAddressCollection: "required",
      shippingAddressCollection: {
        allowedCountries: ["GB"],
      },
      successUrl: `${window.location.origin}/payment-successfull/`,
      cancelUrl: `${window.location.origin}/shop/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <ThemeProvider value={theme}>
      <Header open={open} setOpen={setOpen} />
      <main>{children}</main>
      <ToastContainer />
      <Footer />

      <Script
        async
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

      <div className="fixed top-1/2 -translate-y-1/2 left-0 z-[1000] bg-secondary w-12 h-20 flex justify-center items-center rounded-r-lg shadow border border-white">
        <CartContext.Consumer>
          {({ cart }) => {
            return (
              <Badge content={cart && cart.length?.toString()} withBorder>
                <IconButton
                  variant="text"
                  className="rounded-full ml-2"
                  onClick={() => setOpen(true)}
                >
                  <BsCart3 className="text-lg text-white" />
                </IconButton>
              </Badge>
            );
          }}
        </CartContext.Consumer>
      </div>

      <IconButton onClick={scrollToTop} className={`!fixed bottom-10 left-5`}>
        <BsArrowUp />
      </IconButton>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4"
        placement="right"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Shopping Cart
          </Typography>

          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <div>
          {cart && cart.length > 0
            ? cart.map((cartItem, index) => (
                <CartItem
                  cartItem={cartItem}
                  index={index}
                  key={cartItem.name}
                />
              ))
            : null}
        </div>

        {cart.length === 0 ? (
          <Typography>There are no items in the cart</Typography>
        ) : (
          <div className="flex justify-center mt-16">
            <Button
              onClick={handleSubmit}
              className="flex items-center"
              disabled={loading}
            >
              {loading && <Spinner className="mr-3 h-4 w-4" />}
              Checkout
            </Button>
          </div>
        )}
      </Drawer>
    </ThemeProvider>
  );
};

export default Layout;
