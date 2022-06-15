import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionHeader from "./SectionHeader";
import TeamCard from "./TeamCard";

const Team = () => {
  const data = useStaticQuery(graphql`
    query DentistQuery {
      allStrapiDentist {
        nodes {
          dentistDegree
          dentistDesignation
          dentistName
        }
      }
      strapiPage(strapi_id: { eq: 1 }) {
        blocks {
          ... on STRAPI__COMPONENT_HOME_DENTIST {
            dentistHeader {
              headerSubtitle
              headerText
              headerTitle
            }
          }
        }
      }
    }
  `);

  const dentists = data?.allStrapiDentist?.nodes;

  const header = data?.strapiPage?.blocks[5]?.dentistHeader;

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            subTitle={header.headerSubtitle}
            mainTitle={header.headerTitle}
            description={header.headerText}
          />
        </div>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {dentists?.map((dentist, index) => (
            <TeamCard
              key={index}
              name={dentist?.dentistName}
              position={dentist?.dentistDesignation}
              degree={dentist?.dentistDegree}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
