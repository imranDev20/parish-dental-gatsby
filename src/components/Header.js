import React, { useState, useEffect } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <header className="">
      <Topbar />
      <div className="flex justify-between items-center container mx-auto px-10 py-6 lg:py-0">
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <Navigation open={open} />
      </div>
    </header>
  );
};

export default Header;
