import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SectionHeader from "./SectionHeader";

const PrivateFees = () => {
  const data = useStaticQuery(graphql`
    query PrivateFeesQuery {
      allStrapiPrivateFee {
        nodes {
          serviceName
          strapi_id
          servicesDetailed {
            serviceDetailedTitle
            servicePrice
            strapi_id
          }
        }
      }
    }
  `);

  const privateFees = data.allStrapiPrivateFee.nodes;
  console.log(privateFees);

  return (
    <section className="w-full bg-white">
      <div className="py-24 mx-auto container px-10 ">
        <SectionHeader
          mainTitle="Private Fee Guide"
          subTitle="Demo subtitle"
          description="Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link."
        />

        <div className="w-full mt-16">
          {privateFees.map((privateFee) => {
            console.log(privateFee);
            return (
              <div key={privateFee.strapi_id} className="mb-10">
                <h3 className="text-3xl text-primary font-semibold mb-1">
                  {privateFee.serviceName}
                </h3>
                <hr />
                <div className="mt-3">
                  {privateFee.servicesDetailed.map((service) => {
                    return (
                      <div className="flex justify-between items-center">
                        <div className="flex justify-between items-center w-10/12 pr-7">
                          <h5 className="text-base lg:text-xl text-neutral-500 my-7 w-3/5 max-w-[600px] ">
                            {service.serviceDetailedTitle}
                          </h5>
                          <p className="text-base lg:text-lg text-secondary font-medium w-1/5">
                            £{service.servicePrice}
                          </p>
                        </div>
                        <button className="bg-primary inline-block px-2 py-2 text-white rounded w-2/12 text-sm lg:text-base">
                          Book now
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrivateFees;
