import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="bg-background">
      <div className="w-full relative before:content-[''] before:absolute before:w-[55%] before:h-full before:top-0 before:left-0 before:bottom-0 before:bg-[url('../images/patient.jpeg')] before:bg-cover before:bg-no-repeat before:bg-center">
        <div className="container mx-auto px-10 ">
          <div className="w-[45%] bg-background py-36 px-10 ml-auto relative">
            <h2 className=" text-4xl my-2 capitalize font-semibold text-primary">
              Request an Appointment
            </h2>
            <p className="text-neutral-500 font-light mx-auto my-5 text-lg leading-8">
              Te veritus tractatos delicatissimi qui, justo diceret mentitum ut
              sit. Qui sed reque dicam, qui veri nullam vituperatoribus in.
            </p>

            <Form />

            <svg
              className="absolute top-0 -left-28 w-28 h-full"
              width="100%"
              viewBox="0 0 100 700"
              preserveAspectRatio="none"
            >
              <polygon
                fill="#EEF7FF"
                points="0 700 100 700 100 0 100 0 0 700"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
