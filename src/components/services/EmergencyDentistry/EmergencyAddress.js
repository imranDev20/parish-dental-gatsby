import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FaCalendarCheck } from "react-icons/fa";

const addressBlocks = [
  { id: 1, name: "Address", val: "7 - 9 Branch Road,LEEDS, LS12 3AQ" },
  { id: 2, name: "Phone", val: "0113 322 8354" },
  { id: 3, name: "Email", val: "hello@emergency247dentist.co.uk" },
];

function EmergencyAddress() {
  return (
    <section className="bg-red-700">
      <div className="container mx-auto px-10 py-20 text-white grid grid-cols-3 gap-10"></div>
    </section>
  );
}
export default EmergencyAddress;
