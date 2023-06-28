import React from "react";
import { CartProvider } from "../context/CartContext";

const RootElement = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default RootElement;
