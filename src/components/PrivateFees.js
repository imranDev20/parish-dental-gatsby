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
    <section className="py-24 mx-auto container px-10 bg-background">
      <SectionHeader
        mainTitle="Private Fee Guide"
        subTitle="Demo subtitle"
        description="Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link.

"
      />

      <Tabs className="private-fees-tab flex overflow-hidden mt-10 rounded-lg bg-white">
        <TabList className="text-xl text-neutral-500 font-medium py-6 border-r ">
          {privateFees.map((privateFee) => (
            <Tab
              key={privateFee.strapi_id}
              className="font-['Catamaran'] px-10 py-4 cursor-pointer text-neutral-500 border-l-2 border-transparent"
            >
              {privateFee.serviceName}
            </Tab>
          ))}
        </TabList>

        <div className="flex-1 py-10">
          {privateFees.map((privateFee) => (
            <TabPanel
              className="w-full overflow-x-auto"
              key={privateFee.strapi_id}
            >
              <h2 className="text-4xl mb-5  text-primary font-medium px-10">
                {privateFee.serviceName}
              </h2>
              <hr />

              <table className="w-full">
                <tr className="w-full">
                  <th className="text-white px-10 bg-primary py-3 font-semibold text-lg w-[500px] text-left">
                    Services
                  </th>
                  <th className="text-white px-10 bg-primary py-3 font-semibold text-lg">
                    Price From
                  </th>
                  <th className="text-white px-10 bg-primary py-3 font-semibold text-lg">
                    Book now
                  </th>
                </tr>
                {privateFee.servicesDetailed.map((serviceDetailed) => (
                  <tr className="even:bg-rose-50">
                    <td className="text-neutral-500 text-lg py-4 px-10">
                      {serviceDetailed.serviceDetailedTitle}
                    </td>
                    <td className="text-secondary font-medium text-lg py-4 px-10 text-center">
                      £{serviceDetailed.servicePrice}
                    </td>
                    <td className="text-center">
                      <button className="px-4 py-2 rounded bg-primary text-white">
                        Book now
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </section>
  );
};

export default PrivateFees;
