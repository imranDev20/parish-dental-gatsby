import React from "react";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import ContactPageForm from "./ContactPageForm";
import SectionHeader from "./SectionHeader";

const Services2 = () => {
  return (
    <section className="py-36">
      <div className="container px-10 mx-auto ">
        <SectionHeader
          subTitle="this is subtitle"
          mainTitle="Example Title"
          description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
        />
        <div className="grid grid-cols-4 gap-5 my-10">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
            <div key={n} className=" rounded overflow-hidden">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/woman-patient-dentist_1303-9365.jpg?w=2000"
                  alt=""
                />
              </div>
              <div className="bg-rose-50  p-5 relative">
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

        <ContactPageForm />
      </div>
    </section>
  );
};

export default Services2;
