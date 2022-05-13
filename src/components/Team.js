import React from "react";
import SectionHeader from "./SectionHeader";

const Team = () => {
  const teamDetails = [];

  return (
    <section className="my-36">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            subTitle="The S&B Team"
            mainTitle="Meet Our Experts"
            description="An delicata inimicus sea, vis equidem oporteat conclusion mundi et. Nec malis dolor fabellas ex, eu nec falli iuvaret. Per elitr eloquentiam an esse."
          />
        </div>
        <div className="my-5 grid grid-cols-1 lg:grid-cols-3"></div>
      </div>
    </section>
  );
};

export default Team;
