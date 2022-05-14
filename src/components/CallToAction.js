import React from "react";
import { LinkButton } from "./Button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-10 flex items-center justify-between">
        <div className="text-white ">
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
          <LinkButton className="px-7 py-5" to="/">
            Learn More
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
