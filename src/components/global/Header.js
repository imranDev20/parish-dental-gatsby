import React, { useState, useEffect } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Drawer from "./Drawer";
import { Badge, Button, IconButton } from "@material-tailwind/react";
import { CartContext } from "../../context/CartContext";
import { BsCart3 } from "react-icons/bs";

const Header = ({ open, setOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openDrawer]);

  return (
    <header>
      <Topbar />
      <div className="flex justify-between items-center container mx-auto px-2 lg:px-5 xl:px-10 py-6 lg:py-0">
        <Logo />

        <div className="flex items-center">
          <Navigation />
          <CartContext.Consumer>
            {({ cart, setCart }) => {
              return (
                <Badge content={cart && cart.length?.toString()} withBorder>
                  <IconButton
                    variant="text"
                    className="rounded-full ml-2"
                    onClick={() => setOpen(true)}
                  >
                    <BsCart3 className="text-lg" />
                  </IconButton>
                </Badge>
              );
            }}
          </CartContext.Consumer>
          <Burger open={openDrawer} setOpen={setOpenDrawer} />
        </div>
      </div>

      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </header>
  );
};

export default Header;
