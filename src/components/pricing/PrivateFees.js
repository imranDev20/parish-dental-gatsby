import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeader from "../global/SectionHeader";

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
      allContentfulPrivatePrice(sort: { order: ASC, fields: privateFeeId }) {
        nodes {
          privateFeeId
          service
          price
          category
        }
      }
    }
  `);

  const privateFee = data?.allContentfulPrivatePrice.nodes;
  const categories = privateFee.map((item) => item.category);
  const uniqueItems = [...new Set(categories)];
  const unique = uniqueItems.map((item) => categories.indexOf(item));

  const header = data?.contentfulPages?.blocks[4];

  var regexTest =
    /(?=.)\£(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?/;

  console.log(regexTest.test("computer £5,000.00"));
  console.log(regexTest.test("£5,000.00"));
  console.log(regexTest.test("£5,000.00 that was computer price"));
  console.log(regexTest.test("computer 5,000.00"));

  return (
    <>
      <section className="w-full bg-white">
        <div className="py-24 mx-auto container px-10 ">
          <SectionHeader
            mainTitle={header?.mainTitle}
            description={header?.description?.description}
          />

          <div className="mt-3">
            {privateFee.map((fee, index) => {
              const numRegx = /\d+/;
              const priceWithPound = fee?.price?.replaceAll(
                fee?.price.match(numRegx),
                `£${fee?.price.match(numRegx)}`
              );

              return (
                <React.Fragment key={fee.privateFeeId}>
                  {unique.includes(index) ? (
                    <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                      {fee.category}
                    </h3>
                  ) : null}

                  <div
                    key={fee.privateFeeId}
                    className="flex justify-between items-center"
                  >
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-neutral-500 my-4 w-3/5 max-w-[600px] ">
                        {fee?.service}
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-1/5">
                        {regexTest.test(fee?.price)
                          ? fee?.price
                          : priceWithPound}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateFees;
