import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import NhsCard from "./NhsCard";
import SectionHeader from "./SectionHeader";

const NhsCharges = () => {
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

  return (
    <section className="w-full bg-rose-50">
      <div className="container mx-auto px-10  py-24">
        <SectionHeader
          subTitle="demo subtitle"
          mainTitle="NHS Dental Fees"
          description="Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
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
