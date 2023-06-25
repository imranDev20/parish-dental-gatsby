import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Schedule from "./Schedule";

const TreatmentFaq = () => {
  const faqInfo = [
    {
      id: 1,
      text: "Fast Recovery",
      icon: "",
    },
    {
      id: 2,
      text: "Non Surgical",
      icon: "",
    },
    {
      id: 3,
      text: "Lasts 3-6 months",
      icon: "",
    },
    {
      id: 4,
      text: "Affordable pricing",
      icon: "",
    },
  ];

  const faqRisk = [
    {
      id: 1,
      text: "Infection",
      icon: "",
    },
    {
      id: 2,
      text: "Swelling, bleeding, bruising and pain",
      icon: "",
    },
    {
      id: 3,
      text: "Headaches",
      icon: "",
    },
    {
      id: 4,
      text: "Migration",
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
        <div className="flex-grow ">
          <div className="grid grid-cols-1 md:grid-cols-2 pl-10 mt-10 lg:mt-0">
            <div>
              <h4 className="text-2xl font-semibold">Info</h4>
              <ul className="mt-5 list-disc list-inside">
                {faqInfo.map((item) => (
                  <li className="leading-8 text-gray-400 mb-2">{item.text}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Risks</h4>
              <ul className="mt-5 list-disc list-inside">
                {faqRisk.map((item) => (
                  <li className="leading-8 text-gray-400 mb-2">{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="leading-8 text-gray-400 pl-10 mt-5">
            Please note the probability of experiencing severe side affects is
            extremely low. It is important that all patient's carefully follow
            the aftercare instructions advised by their Aesthetic nurse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TreatmentFaq;
