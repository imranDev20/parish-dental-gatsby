import React from "react";
import RootCanalIcon from "../images/icons/root-canal.svg";

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
      name: "Root Canal Specialist",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
    {
      id: 3,
      name: "Root Canal Specialist",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
    {
      id: 4,
      name: "Root Canal Specialist",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
    {
      id: 5,
      name: "Root Canal Specialist",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
    {
      id: 6,
      name: "Root Canal Specialist",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
  ];

  return (
    <section className="container mx-auto px-10 grid grid-cols-3 gap-10 my-32">
      {services.map((service) => (
        <div key={service.id} className="flex my-3">
          <div className="w-1/3 mr-8">
            <img className="w-full object-contain" src={service.icon} alt="" />
          </div>
          <div>
            <h3 className="text-primary font-medium text-xl mb-3">
              {service.name}
            </h3>
            <p className="text-gray-500">{service.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
