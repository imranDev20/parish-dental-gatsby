import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import QueriesForm from "../../global/QueriesForm";
import QueriesFormDark from "./QueriesFormDark";

const Contact = () => {
  return (
    <section className="w-full relative mt-28">
      <StaticImage
        layout="fullWidth"
        src="../../../images/maps-bg.png"
        className=" -z-[0] h-[90vh]"
      />
      <div className="container mx-auto px-10 grid lg:grid-cols-2 absolute top-1/2 -translate-y-1/2">
        <div></div>
        <div className="py-10 bg-[#1E1E1E] p-9 rounded-lg">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <QueriesFormDark />
        </div>
      </div>
    </section>
  );
};

export default Contact;
