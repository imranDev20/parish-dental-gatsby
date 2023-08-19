import React from "react";

const Burger = ({ open, setOpen }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOpen(!open)}
      onKeyDown={() => setOpen(!open)}
      className={`flex xl:hidden w-8 h-6 right-4 justify-between flex-col flex-nowrap z-20 cursor-pointer ml-5`}
    >
      {[0, 1, 2].map((n) => (
        <div
          key={n}
          className={`w-8 bg-gray-600 rounded h-0.5 origin-[1px] transition-transform duration-200  ${
            open ? "first:rotate-45" : "first:rotate-0"
          } ${open ? "second:translate-x-full" : "second:translate-x-0"} ${
            open ? "second:opacity-0" : "second:opacity-100"
          } ${open ? "third:-rotate-45" : "third:rotate-0"}`}
        ></div>
      ))}
    </div>
  );
};

export default Burger;
