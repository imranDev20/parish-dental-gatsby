import React from "react";
import { FaBirthdayCake, FaUserShield } from "react-icons/fa";

const ThingsToKnow = () => {
  return (
    <section className="bg-[#242625] py-20 mt-28">
      <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-3 ">
        <div className="pr-4">
          <h2 className="text-3xl font-semibold mb-5">Things to Know</h2>
          <p className="leading-8 text-gray-400">
            Before you embark on your journey, it's essential to be aware of
            some key details.
          </p>
        </div>

        <div className="pr-4 mt-10 lg:mt-0">
          <h4 className="text-xl font-semibold mb-5 flex items-center">
            <FaBirthdayCake className="text-secondary mr-2" /> Age Limit
          </h4>
          <p className="leading-8 text-gray-400">
            For the well-being and safety of our patients, all individuals
            seeking treatment with us MUST be at least 18 years of age.
          </p>
        </div>

        {/* <div className="pr-4 mt-10 lg:mt-0">
          <h4 className="text-xl font-semibold mb-5 flex items-center">
            <FaUserShield className="text-secondary mr-2" /> Privacy Policy
          </h4>
          <p className="leading-8 text-gray-400">
            For the well-being and safety of our patients, we kindly request
            that all individuals seeking treatment with us be at least 18 years
            old.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ThingsToKnow;
