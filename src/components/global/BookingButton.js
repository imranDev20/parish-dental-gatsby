import { Button } from "@material-tailwind/react";
import React from "react";
import { BsFillCalendar2DateFill } from "react-icons/bs";

const BookingButton = ({ children }) => {
  return (
    <a
      className="flex items-center"
      href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
      target="_blank"
      rel="noreferrer"
    >
      <Button className="flex items-center bg-secondary">
        <BsFillCalendar2DateFill className="mr-2" />
        {children ? children : "Book Now"}
      </Button>
    </a>
  );
};

export default BookingButton;
