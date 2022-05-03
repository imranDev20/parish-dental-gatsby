import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <header className="">
      <Topbar />
      <div className="flex justify-between items-center container mx-auto px-10">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
