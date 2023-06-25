import React from "react";

const Cta = () => {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-10 flex flex-col lg:flex-row  items-center justify-between">
        <p className="text-2xl font-semibold text-white pr-5 text-center lg:text-left mb-3 lg:mb-0">
          Require emergency dental care and want same day treatment?
        </p>

        <a
          target="_blank"
          href="https://emergency247dentist.co.uk/"
          className="tracking-[0.2em] uppercase font-medium rounded-md inline-block transition-colors bg-secondary px-5 py-2 text-lg text-white"
        >
          Visit
        </a>
      </div>
    </section>
  );
};

export default Cta;
