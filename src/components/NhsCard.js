import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const NhsCard = () => {
  return (
    <div className="bg-white rounded text-center py-16">
      <div className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
        Band 1
      </div>
      <h3 className="text-5xl my-2 text-primary font-semibold">£23.80</h3>
      <ul className="my-7 text-neutral-500 px-12 text-left">
        <li className="my-4">
          <span className="w-4 h-4 inline-block mr-3">
            <FaCheckCircle className="text-green-500 text-lg  mt-1" />
          </span>
          Examination
        </li>
        <li className="my-4 flex items-start">
          <span className="w-4 h-4 inline-block mr-3">
            <FaCheckCircle className="text-green-500 text-lg  mt-1" />
          </span>
          Diagnosis (eg: X-rays)
        </li>
        <li className="my-4 flex items-start">
          <span className="w-4 h-4 inline-block mr-3">
            <FaCheckCircle className="text-green-500 text-lg  mt-1" />
          </span>
          Advice on preventing future problems
        </li>
        <li className="my-4">
          <span className="w-4 h-4 inline-block mr-3">
            <FaTimesCircle className="text-red-500 text-lg  mt-1" />
          </span>
          Root Canal Work
        </li>
        <li className="my-4">
          <span className="w-4 h-4 inline-block mr-3">
            <FaTimesCircle className="text-red-500 text-lg  mt-1" />
          </span>
          Crowns
        </li>
      </ul>
    </div>
  );
};

export default NhsCard;
