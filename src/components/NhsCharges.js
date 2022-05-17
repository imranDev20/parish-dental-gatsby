import React from "react";
import NhsCard from "./NhsCard";
import SectionHeader from "./SectionHeader";

const NhsCharges = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-10 bg-rose-50 py-24">
        <SectionHeader
          subTitle="demo subtitle"
          mainTitle="NHS Dental Fees"
          description="Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link."
        />

        <div className="grid grid-cols-3 gap-10">
          {[0, 1, 2].map((n) => (
            <NhsCard key={n} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NhsCharges;
