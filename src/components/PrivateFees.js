import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeader from "./SectionHeader";

const PrivateFees = () => {
  const data = useStaticQuery(graphql`
    query PrivateFeeQuery {
      contentfulPages(title: { eq: "Pricing" }) {
        id
        blocks {
          ... on ContentfulPrivatePrice {
            id
            contentful_id
            price
            service
          }
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

  const privateFee = data?.contentfulPages?.blocks?.slice(5);

  const header = data?.contentfulPages?.blocks[4];

  return (
    <>
      <section className="w-full bg-white">
        <div className="py-24 mx-auto container px-10 ">
          <SectionHeader
            mainTitle={header?.mainTitle}
            subTitle={header?.subtitle}
            description={header?.description?.description}
          />

          <div className="mt-3">
            {privateFee.map((service, index) => {
              return (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex justify-between items-center w-full border-b">
                    <h5 className="text-base lg:text-xl text-neutral-500 my-4 w-3/5 max-w-[600px] ">
                      {service?.service}
                    </h5>
                    <p className="text-base lg:text-lg text-secondary font-medium w-1/5">
                      {service?.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateFees;
