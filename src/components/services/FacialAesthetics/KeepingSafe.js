import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CareQualityImage from "../../../images/care-quality-com.svg";

const KeepingSafe = () => {
  return (
    <section className="mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="max-w-[660px] pr-5 pl-10 flex flex-col justify-center ml-auto">
          <h2 className="text-4xl font-semibold mb-12">
            How We are Keeping You Safe
          </h2>

          <p className="leading-8 text-gray-400">
            At Parish Dental, your safety is paramount. We prioritise your
            well-being and have implemented stringent measures to create a safe
            and healthy environment. As a regulated clinic under the Care
            Quality Commission (CQC), we adhere to rigorous guidelines for
            cleanliness, sterilisation, and staff training. Our team is equipped
            with the latest safety procedures and personal protective equipment.
            We maintain social distancing and limit patient numbers to ensure
            minimal risk of exposure. By choosing Parish Dental, you can trust
            that we meet the highest standards of quality and safety. Your
            health and peace of mind are our utmost priority.
          </p>
          <div className="mt-3 flex justify-end">
            <img
              src={CareQualityImage}
              alt="Care Quality Image"
              width={180}
              className="bg-[#6C266A] p-3 rounded"
            />
          </div>
        </div>
        <div className="pl-5 lg:mt-0 mt-10">
          <StaticImage layout="fullWidth" src="../../../images/gloves.jpeg" />
        </div>
      </div>
    </section>
  );
};

export default KeepingSafe;
