import React from "react";
import Triangle from "../images/triangle.svg";

const About = () => {
  return (
    <section className="bg-background">
      <div className="w-full relative before:content-[''] before:absolute before:w-[55%] before:h-full before:top-0 before:right-0 before:bottom-0 before:bg-[url('../images/surgery.jpeg')] before:bg-cover before:bg-no-repeat before:bg-center">
        <div className="container mx-auto px-10 ">
          <div className="w-[45%] bg-background py-36 px-20 mr-auto relative">
            <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
              Our dear clients
            </h3>
            <h2 className=" text-4xl my-2 capitalize font-semibold text-primary">
              Fully dedicated to your dental health
            </h2>
            <p className="text-gray-500 font-light mx-auto my-5 text-base">
              Te veritus tractatos delicatissimi qui, justo diceret mentitum ut
              sit. Qui sed reque dicam, qui veri nullam vituperatoribus in.
              Tibique maiestatis sum quod sum ut alienum nec et, summo possim
              persequeris vix mea. Adhuc quodsi qui, sit no tale essent
              electram. Mei sum prodesset in pro, quo scripta feugait vidisse.
            </p>

            <p className="font-['Catamaran'] text-xl text-orange-500 font-medium mt-10">
              Andrea McCollins
            </p>

            <svg
              className="absolute top-0 -right-28 w-28 h-full"
              width="100%"
              viewBox="0 0 100 700"
              preserveAspectRatio="none"
            >
              <polygon
                fill="#EEF7FF"
                points="100 0 0 0 0 700 0 700 100 0"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
