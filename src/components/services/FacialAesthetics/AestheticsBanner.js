import { Button } from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsCalendarCheck } from "react-icons/bs";

const AestheticsBanner = () => {
  return (
    <section className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#1E1E1E] before:z-[1] before:opacity-70">
      <StaticImage
        layout="fullWidth"
        className="h-[calc(100vh-130px)]"
        src="../../../images/facial-aesthetics-banner.jpg"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2]">
        <h3 className="text-3xl lg:text-5xl font-light mb-3">
          Parish Dental Aesthetics
        </h3>
        <div className="border-b mb-10 max-w-[300px] mx-auto"></div>
        <h1 className="font-bold text-5xl lg:text-8xl mb-5 whitespace-nowrap">
          Seeking Perfection?
        </h1>
        <p className="text-lg lg:text-2xl">
          The Award-Winning Leeds Dental and Aesthetics Clinic
        </p>

        <a
          href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
          target="_blank"
        >
          <Button className="mt-12 bg-secondary hover:shadow-secondary/50">
            Book Now
          </Button>
        </a>
      </div>
    </section>
  );
};

export default AestheticsBanner;
