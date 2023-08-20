import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const NhsCard = ({ title, price, features, remaining }) => {
  return (
    <div className="bg-white rounded text-center py-16">
      <div className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
        {title}
      </div>
      <h3 className="text-5xl my-2 text-primary font-semibold">{price}</h3>
      <ul className="my-7 text-gray-600 px-12 text-left">
        {features.map((feature, i) => (
          <li key={i} className="my-4 flex items-start">
            <span className="w-4 h-4 inline-block mr-4">
              <FaCheckCircle className="text-green-500 text-lg  mt-1" />
            </span>
            {feature}
          </li>
        ))}

        {remaining.map((remainingFeature, i) => (
          <li key={i} className="my-4 flex items-start line-through">
            <span className="w-4 h-4 inline-block mr-4">
              <FaTimesCircle className="text-red-500 text-lg  mt-1" />
            </span>
            {remainingFeature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NhsCard;
