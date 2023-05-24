import React, { useState, useEffect } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Drawer from "./Drawer";

const Header = () => {
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
        <Burger open={openDrawer} setOpen={setOpenDrawer} />
        <Navigation />
      </div>

      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </header>
  );
};

export default Header;
