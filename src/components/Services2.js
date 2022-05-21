import React from "react";
import SectionHeader from "./SectionHeader";
import { GiPlagueDoctorProfile } from "react-icons/gi";

const Services2 = () => {
  return (
    <section className="bg-rose-50 py-24">
      <div className="container px-10 mx-auto ">
        <SectionHeader
          subTitle="this is subtitle"
          mainTitle="Example Title"
          description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className=" rounded-lg overflow-hidden">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/woman-patient-dentist_1303-9365.jpg?w=2000"
                  alt=""
                />
              </div>
              <div className="bg-white  p-5 relative">
                <div className="absolute top-0 -translate-y-1/2 px-6 py-6 bg-white rounded shadow">
                  <GiPlagueDoctorProfile className="text-secondary text-4xl" />
                </div>
                <h5 className="text-2xl text-primary font-medium mt-10">
                  Surgery
                </h5>
                <p className="text-neutral-500 my-2 mx-auto text-base leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, optio!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
