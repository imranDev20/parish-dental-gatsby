import React from "react";

const PageHeader = ({ pageTitle }) => {
  return (
    <section className="w-full bg-background py-16 ">
      <div className="container mx-auto px-10 text-center">
        <h1 className="text-5xl text-primary font-semibold">{pageTitle}</h1>
        {/* <p className="text-secondary font-medium text-xs tracking-[.2em] uppercase my-2">
          Home / <span className="text-gray-600">About</span>
        </p> */}
      </div>
    </section>
  );
};

export default PageHeader;
