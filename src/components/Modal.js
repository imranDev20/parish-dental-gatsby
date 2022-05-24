import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1 },
  exit: {
    y: "100vh",
    transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 },
  },
};

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="max-w-[90%] lg:max-w-[50%] m-auto flex flex-col items-center z-20 bg-white rounded px-5 py-5"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-semibold text-primary mb-5">
          Request an appointment!
        </h2>

        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
