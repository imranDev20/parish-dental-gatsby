import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Schedule from "./Schedule";

const TreatmentFaq = () => {
  const faqInfo = [
    {
      id: 1,
      text: "30 Min Procedure",
      icon: "",
    },
    {
      id: 2,
      text: "Recovery few days",
      icon: "",
    },
    {
      id: 3,
      text: "No of treatments: 1+",
      icon: "",
    },
    {
      id: 4,
      text: "Lasts 3-6 months",
      icon: "",
    },
  ];

  const faqRisk = [
    {
      id: 1,
      text: "Redness at injection site",
      icon: "",
    },
    {
      id: 2,
      text: "Headaches",
      icon: "",
    },
    {
      id: 3,
      text: "Minor bruising",
      icon: "",
    },
    {
      id: 4,
      text: "Risks are RARE",
      icon: "",
    },
  ];

  return (
    <section className="container mx-auto mt-28 px-10">
      <h2 className="text-4xl text-center font-semibold mb-16">
        Treatment FAQ
      </h2>
      <div className="flex lg:flex-row flex-col justify-between">
        <Schedule />
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 pl-10 mt-10 lg:mt-0">
          <div>
            <h4 className="text-2xl font-semibold">Info</h4>
            <ul className="mt-5 list-disc list-inside">
              {faqInfo.map((item) => (
                <li className="leading-8 text-gray-400 mb-7">{item.text}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Risks</h4>
            <ul className="mt-5 list-disc list-inside">
              {faqRisk.map((item) => (
                <li className="leading-8 text-gray-400 mb-7">{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentFaq;
