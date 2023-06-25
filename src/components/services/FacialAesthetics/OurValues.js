import React from "react";

import GuidanceIcon from "../../../images/icons/guidance.svg";
import QualityIcon from "../../../images/icons/quality.svg";
import EleganceIcon from "../../../images/icons/elegance.svg";
import CommitmentIcon from "../../../images/icons/commitment.svg";

const OurValues = () => {
  const points = [
    {
      icon: GuidanceIcon,
      title: "Expert Guidance",
      description:
        "We take immense pride in delivering expert advice and guidance to our valued clients.",
    },
    {
      icon: QualityIcon,
      title: "Quality Assurance",
      description:
        "Our unwavering commitment lies in using the utmost quality products, with no room for compromise.",
    },
    // {
    //   icon: EleganceIcon,
    //   title: "Natural Elegance",
    //   description:
    //     'Embracing the philosophy of "less is more", our focus is on achieving naturally beautiful results.',
    // },
    {
      icon: CommitmentIcon,
      title: "Wholehearted Commitment",
      description:
        "Our motivation stems from a genuine desire to provide the best care, rather than being driven by sales incentives.",
    },
  ];
  return (
    <section className="container mx-auto px-10 mt-28">
      <h2 className="text-4xl text-center font-semibold mb-16">Our Values</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {points.map((item) => (
          <div className="px-2 py-5 rounded-md flex flex-col items-center ">
            <img src={item.icon} alt={item.title} width={70} className="mb-5" />
            <h3 className="text-white text-center mb-3 text-xl font-medium">
              {item.title}
            </h3>
            <p className="text-gray-400 text-center leading-8">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
