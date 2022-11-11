import React from "react";
import { LinkButton } from "./Button";

const WhoWeAre = () => {
  return (
    <>
      <section className="my-24">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 ">
            <img
              className="rounded"
              src="https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80"
              alt=""
            />
          </div>
          <div className="w-full mt-10 lg:mt-0 lg:w-1/2 lg:px-10">
            <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
              Who We Are
            </h3>
            <h2 className="text-4xl text-primary font-semibold mb-5 mt-2">
              About Us
            </h2>
            <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
              At Parish Dental we hold a strong ethos in delivering the best
              dental care possible for all of our patients. We believe a healthy
              and happy smile is true to one’s nature in expression of
              themselves and we are committed to making sure all of our patients
              can be confident and satisfied with the care they receive from the
              moment they walk through our doors. We uphold community values and
              believe we have an important responsibility in serving our
              community to the best our ability.
            </p>
            <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
              We appreciate no two patients are the same and are committed to
              delivering care and treatment tailored to fulfil the dental care
              you deserve. Dentistry is a fundamental aspect of any individual
              well being and we are determined to ensure excellence no matter
              what your needs may be.
            </p>
            <LinkButton to="/services" variant="blue" className="px-4 py-5">
              Our Services
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
