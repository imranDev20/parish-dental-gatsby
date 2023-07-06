import React, { useState, useEffect } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Drawer from "./Drawer";
import { Badge, Button, IconButton } from "@material-tailwind/react";
import { CartContext } from "../../context/CartContext";
import { BsCart3 } from "react-icons/bs";
import { BiSolidPhone } from "react-icons/bi";

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
      <div className="flex justify-between items-center container mx-auto px-2 py-6 xl:py-0">
        <Logo />

        <div className="flex items-center">
          <Navigation />

          <a
            href="tel:01132638509"
            className="mr-2  font-medium text-gray-600 ml-3 block xl:hidden "
          >
            <Button
              variant="outlined"
              className=" flex items-center text-sm px-1.5 whitespace-nowrap"
            >
              <BiSolidPhone className="mr-2 text-xl text-secondary" />
              0113 263 8509
            </Button>
          </a>

          <Burger open={openDrawer} setOpen={setOpenDrawer} />
        </div>
      </div>

      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </header>
  );
};

export default Header;
