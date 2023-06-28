import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const toastId = React.useRef(null);

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success("Product added successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "customId",
      });
    }
  };

  const handleAddToCart = (product, count) => {
    const itemInCart = cart.find((cartItem) => cartItem.name === product.name);
    if (itemInCart) {
      const indexOfItem = cart.findIndex(
        (cartItem) => cartItem.name === itemInCart.name
      );
      const tempCart = [...cart];

      tempCart[indexOfItem].quantity = count;
      setCart(tempCart);
    } else {
      setCart([...cart, product]);
      notify();
    }
  };

  const handleDeleteFromCart = (index) => {
    const tempCart = [...cart];
    tempCart.splice(index, 1);
    setCart(tempCart);
  };

  const handleUpdateCart = (item, index, value) => {
    const tempCart = [...cart];

    if (!value) {
      tempCart[index].quantity = item.quantity + 1;
    } else {
      tempCart[index].quantity = item.quantity + value;
    }
    setCart(tempCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleDeleteFromCart,
        handleUpdateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};