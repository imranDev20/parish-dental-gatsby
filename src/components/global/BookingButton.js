import React from "react";
import { BsFillCalendar2DateFill } from "react-icons/bs";

const BookingButton = ({ children }) => {
  return (
    <a
      className="w-32 flex items-center bg-secondary rounded px-3 py-2 text-white"
      id="Setmore_button_iframe"
      href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
      target="_blank"
    >
      <BsFillCalendar2DateFill className="mr-2" />
      {children ? children : "Book Now"}
    </a>
  );
};

export default BookingButton;
