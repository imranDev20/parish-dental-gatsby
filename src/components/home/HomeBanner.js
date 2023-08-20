import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import BookingButton from "../global/BookingButton";

const HomeBanner = () => {
  return (
    <div className="mt-20 container mx-auto  px-10">
      <div className=" lg:h-72 border flex flex-col lg:flex-row items-center rounded overflow-hidden ">
        <div className="lg:w-1/2 pl-6 my-10 lg:my-0">
          <h3 className="text-primary font-bold text-2xl mb-4">
            Making Private Dentistry <br /> More Affordable
          </h3>
          <ul className=" text-gray-600 text-lg">
            <li className="flex items-center">
              <AiOutlineCheck className="mr-2 text-primary" /> New Fee Structure
            </li>
            <li className="flex items-center">
              <AiOutlineCheck className="mr-2 text-primary" /> Fees that reflect
              the NHS
            </li>
            <li className="flex items-center">
              <AiOutlineCheck className="mr-2 text-primary" /> Payment schemes
              available
            </li>
          </ul>
          <div className="mt-7">
            <BookingButton />
          </div>
        </div>
        <div className="lg:w-1/2 max-h-60 lg:max-h-none">
          <StaticImage
            alt="Banner Image"
            className="h-full"
            src="../../images/smile.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
