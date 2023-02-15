import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import NhsCard from "./NhsCard";
import SectionHeader from "../global/SectionHeader";

const NhsCharges = () => {
  const data = useStaticQuery(graphql`
    query NHSQuery {
      contentfulPages(title: { eq: "Pricing" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
          ... on ContentfulNhsFeatures {
            id
            price
            services
            title
            contentful_id
          }
        }
      }
    }
  `);

  // Over Engineering the simple card to show red cross and green tick

  const header = data?.contentfulPages?.blocks[0];
  const nhsCards = data?.contentfulPages?.blocks?.slice(1, 4);

  const fullArray = nhsCards[2]?.services?.map((elem) => elem);

  return (
    <section className="w-full bg-backgroundSecondary">
      <div className="container mx-auto px-10  py-24">
        <SectionHeader
          mainTitle={header?.mainTitle}
          description={header?.description?.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
          {nhsCards?.map((nhsCard) => {
            const cardServicesArray = nhsCard?.services?.map(
              (element) => element
            );
            const remainingArray = fullArray?.filter(
              (f) => !cardServicesArray?.includes(f)
            );
            return (
              <NhsCard
                key={nhsCard?.contentful_id}
                title={nhsCard?.title}
                price={nhsCard?.price}
                features={cardServicesArray}
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
