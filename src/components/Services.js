import React from "react";
import RootCanalIcon from "../images/icons/root-canal.svg";
import TeethAlignmentIcon from "../images/icons/teeth-alignment.svg";
import ToolsIcon from "../images/icons/tools.svg";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Root Canal Specialist",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
    {
      id: 2,
      name: "Alignment Specialist",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: TeethAlignmentIcon,
    },
    {
      id: 3,
      name: "Cosmetic Dentistry",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: ToolsIcon,
    },
    {
      id: 4,
      name: "Oral Hygiene Experts",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: ToolsIcon,
    },
    {
      id: 5,
      name: "Live Dental Advisory",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
    {
      id: 6,
      name: "Cavity Inspection",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
  ];

  return (
    <section className="container mx-auto px-10 grid grid-cols-3 gap-10 my-32">
      {services.map((service) => (
        <div key={service.id} className="flex my-3">
          <div className="w-2/5 mr-5">
            <img className="w-full object-contain" src={service.icon} alt="" />
          </div>
          <div>
            <h3 className="text-primary font-medium text-xl mb-3">
              {service.name}
            </h3>
            <p className="text-neutral-500">{service.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
