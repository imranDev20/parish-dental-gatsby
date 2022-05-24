import React from "react";
import { LinkButton } from "./Button";

const CallToAction = ({ bgColor }) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="text-white mb-3 lg:mb-0">
          <h2 className="font-semibold text-3xl">
            Discount dental plans save you{" "}
            <span className="text-secondary">up to 60%</span>
          </h2>
          <p className="text-lg my-2">
            Sea te illum euismod, ex dicta noluisse qui, sea an hinc pericula
            imperdiet sum.
          </p>
        </div>
        <div>
          <LinkButton variant="white" className="px-7 py-5" to="/pricing">
            Learn More
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
