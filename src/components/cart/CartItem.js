import { GatsbyImage } from "gatsby-plugin-image";
import React, { useContext, useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ cartItem, index }) => {
  const { cart, setCart, handleDeleteFromCart, handleUpdateCart } =
    useContext(CartContext);

  return (
    <div className="flex items-center mb-5">
      <div>
        <GatsbyImage className="w-24" image={cartItem.image} />
      </div>

      <div className="px-2">
        <h5 className="text-md font-medium">{cartItem.name}</h5>
        <div className="flex items-center mt-3">
          <div className="flex  items-center">
            <button
              onClick={() => handleDeleteFromCart(index)}
              className="border border-r-0 px-2 text-2xl  rounded-l text-gray-500"
            >
              -
            </button>
            <input
              value={cartItem.quantity}
              onChange={(e) =>
                handleUpdateCart(cartItem, index, parseInt(e.target.value))
              }
              className="border  py-1 w-10 text-center text-gray-600"
            />
            <button
              onClick={() => handleUpdateCart(cartItem, index)}
              className="border border-l-0 px-2 text-2xl text-gray-500"
            >
              +
            </button>
          </div>

          <button
            className="flex items-center ml-3"
            onClick={() => handleDeleteFromCart(index)}
          >
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
