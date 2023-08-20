import { GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ cartItem, index }) => {
  const { cart, setCart, handleDeleteFromCart, handleUpdateCart } =
    useContext(CartContext);

  const setToStateCount = (value) => {
    const tempCart = [...cart];
    cart[index].quantity = value;

    setCart(tempCart);
  };

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
              onClick={() => handleUpdateCart(index, "decr")}
              className="border border-r-0 w-6  text-2xl  rounded-l text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              -
            </button>
            <input
              type="number"
              value={parseInt(cart[index].quantity)}
              onChange={(e) => {
                if (e.target.value !== "") {
                  const value = parseInt(e.target.value);

                  if (value !== 0) {
                    setToStateCount(value);
                  }
                }
              }}
              className="border  py-1 w-12 text-center text-gray-600"
            />
            <button
              onClick={() => handleUpdateCart(index, "incr")}
              className="border border-l-0 w-6 text-2xl  rounded-r text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
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
