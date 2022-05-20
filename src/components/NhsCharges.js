import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import NhsCard from "./NhsCard";
import SectionHeader from "./SectionHeader";

const NhsCharges = () => {
  const [fullArrayElems, setFullArrayElems] = useState("");

  const data = useStaticQuery(graphql`
    query NhsQuery {
      allStrapiNhsPrice {
        nodes {
          cardPrice
          cardTitle
          strapi_id
          nhsFeatures {
            nhsFeature
          }
        }
      }
    }
  `);

  // Over Engineering the simple card to show red cross and green tick

  const nhsCards = data?.allStrapiNhsPrice?.nodes;
  const fullArray = nhsCards[2]?.nhsFeatures?.map((elem) => elem?.nhsFeature);
  console.log(fullArray);

  return (
    <section className="w-full">
      <div className="container mx-auto px-10 bg-rose-50 py-24">
        <SectionHeader
          subTitle="demo subtitle"
          mainTitle="NHS Dental Fees"
          description="Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link."
        />

        <div className="grid grid-cols-3 gap-10">
          {nhsCards?.map((nhsCard) => {
            const cardFeaturesArray = nhsCard?.nhsFeatures?.map(
              (element) => element?.nhsFeature
            );
            const remainingArray = fullArray?.filter(
              (f) => !cardFeaturesArray?.includes(f)
            );
            return (
              <NhsCard
                key={nhsCard?.strapi_id}
                title={nhsCard?.cardTitle}
                price={nhsCard?.cardPrice}
                features={cardFeaturesArray}
                remaining={remainingArray}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NhsCharges;
