import React from "react";
import Schedule from "./Schedule";
import { Link } from "gatsby";

const Features = () => {
  const featurePoints = [
    { id: 1, text: "Professional dental services 24/7" },
    { id: 2, text: "Oral hygiene advisory & assessment" },
    { id: 3, text: "Oral and maxillofacial surgery" },
    { id: 4, text: "Dental public health insurance" },
    { id: 5, text: "Free online appointment booking" },
    { id: 6, text: "Various cosmetic dentistry services" },
    { id: 7, text: "Special care dentistry services" },
  ];

  return (
    <section className="container mx-auto px-10 grid grid-cols-3 my-32 gap-10">
      <div>
        <div className="max-h-[230px] overflow-hidden rounded mb-10">
          <img
            className="overflow-hidden h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </div>
        <h2 className="text-2xl font-medium mb-3 text-primary">
          Pick the dentist that fits all your needs the best
        </h2>
        <p className="text-neutral-500 font-light">
          Lorem ipsum dolor sit amet, eu duo ferri labor. Mea ex modo reque
          senserit, et sed hinc dolor, scaevola sum salutandi expetendis vix ne.
          Eros dicat his sum mel quod mundi consequat sum.
        </p>
        <Link
          className="tracking-[.2em] text-sm uppercase mt-5 inline-block text-primary"
          to="/about/"
        >
          Read More
        </Link>
      </div>
      <div>
        <div className="max-h-[230px] overflow-hidden rounded mb-10">
          <img
            className="overflow-hidden h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div>
          {featurePoints.map((featurePoint) => (
            <p
              key={featurePoint.id}
              className="my-3 text-neutral-500 flex items-center"
            >
              <span className="text-secondary font-medium text-xl mr-3">+</span>{" "}
              {featurePoint.text}
            </p>
          ))}
        </div>
      </div>
      <Schedule />
    </section>
  );
};

export default Features;
