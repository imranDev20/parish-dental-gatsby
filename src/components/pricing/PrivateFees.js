import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeader from "../global/SectionHeader";
import PrivateFeeFiltered from "./PrivateFeeFiltered";

const PrivateFees = () => {
  const data = useStaticQuery(graphql`
    query PrivateFeeQuery {
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
        }
      }
    }
  `);

  const header = data?.contentfulPages?.blocks[4];

  return (
    <>
      <section className="w-full bg-white">
        <div className="py-24 mx-auto container px-10 ">
          <SectionHeader
            mainTitle={header?.mainTitle}
            description={header?.description?.description}
          />

          <div className="mt-3">
            <PrivateFeeFiltered category={null} />
            <PrivateFeeFiltered category="Periodontal" />
            <PrivateFeeFiltered category="Restorative" />
            <PrivateFeeFiltered category="Root Canal Treatment" />
            <PrivateFeeFiltered category="Extractions" />
            <PrivateFeeFiltered category="Crown & Bridge" />
            <PrivateFeeFiltered category="Dentures" />
            <PrivateFeeFiltered category="Prevention" />
            <PrivateFeeFiltered category="Aesthetics" />
            <PrivateFeeFiltered category="Other Items" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateFees;
