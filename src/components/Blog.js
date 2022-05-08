import React from "react";
import SectionHeader from "./SectionHeader";

const Blog = () => {
  return (
    <section>
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            subTitle="Dental Practice"
            mainTitle="Read Latest Articles"
            description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
