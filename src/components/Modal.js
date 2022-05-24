import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1 },
  exit: {
    y: "100vh",
    transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 },
  },
};

const Modal = ({ handleClose, children, title }) => {
  return (
    <Backdrop>
      <motion.div
        className="max-w-[90%] lg:max-w-[50%] m-auto flex flex-col items-center z-20 bg-white rounded px-7 pt-10 pb-5 relative"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-semibold text-primary mb-5">{title}</h2>

        <FaTimes
          onClick={handleClose}
          className="absolute top-7 right-7 text-xl cursor-pointer"
        />

        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
