import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FaCalendarCheck } from "react-icons/fa";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

const addressBlocks = [
  {
    id: 1,
    name: "Address",
    val: "7 - 9 Branch Road,LEEDS, LS12 3AQ",
    Icon: HiOutlineMapPin,
  },
  { id: 2, name: "Phone", val: "0113 322 8354", Icon: HiOutlinePhone },
  {
    id: 3,
    name: "Email",
    val: "hello@emergency247dentist.co.uk",
    Icon: HiOutlineEnvelope,
  },
];

function EmergencyAddress() {
  return (
    <section className="bg-red-700">
      <div className="container mx-auto px-10 py-20 text-white grid grid-cols-1 lg:grid-cols-3 gap-10">
        {addressBlocks.map((block) => (
          <div className="flex items-center">
            <div className="mr-3 bg-white/25 p-3 rounded-full">
              {<block.Icon className="text-2xl" />}
            </div>
            <div>
              <Typography variant="h4" className="font-bold">
                {block.name}
              </Typography>
              <p className=" text-gray-300">{block.val}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default EmergencyAddress;
