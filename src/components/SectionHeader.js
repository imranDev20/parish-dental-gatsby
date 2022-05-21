import React from "react";

const SectionHeader = ({ subTitle, mainTitle, description }) => {
  return (
    <>
      <h3 className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
        {subTitle}
      </h3>
      <h2 className="text-center text-5xl my-2 capitalize font-semibold text-primary">
        {mainTitle}
      </h2>
      <p className="text-neutral-500 max-w-4xl text-center mx-auto my-5 text-lg">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
