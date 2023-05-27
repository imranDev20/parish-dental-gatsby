import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { NormalButton } from "../global/Button";
import { Script } from "gatsby";

const HomeBanner = () => {
  return (
    <div className="mt-20 container mx-auto  px-10">
      <div className=" lg:h-72 border flex flex-col lg:flex-row items-center rounded overflow-hidden ">
        <div className="lg:w-1/2 pl-6 my-10 lg:my-0">
          <h3 className="text-secondary font-bold text-2xl mb-4">
            Making Private Dentistry <br /> More Affordable
          </h3>
          <ul className=" text-neutral-500 text-lg">
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
          {/* <NormalButton variant="blue" className="px-4 py-3 mt-5">
            Book Now
          </NormalButton> */}

          <a
            className="mt-5 block w-32"
            id="Setmore_button_iframe"
            href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
            target="_blank"
          >
            <img
              border="none"
              src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.png"
              alt="Book an appointment using Setmore"
            />
          </a>
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
