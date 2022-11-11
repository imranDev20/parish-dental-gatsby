import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionHeader from "./SectionHeader";
import TeamCard from "./TeamCard";

const Team = () => {
  const data = useStaticQuery(graphql`
    query DentistQuery {
      allContentfulTeam(sort: { fields: memberId, order: ASC }) {
        nodes {
          designation
          gdc
          name
          contentful_id
          photo {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
      contentfulPages(title: { eq: "Meet The Team" }) {
        id
        blocks {
          ... on ContentfulSections {
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

  console.log(data);

  const dentists = data?.allContentfulTeam?.nodes;
  const header = data?.contentfulPages?.blocks[0];

  console.log(header);

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            subTitle={header?.subtitle}
            mainTitle={header?.mainTitle}
            description={header?.description?.description}
          />
        </div>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {dentists?.map((dentist, index) => (
            <TeamCard
              key={index}
              name={dentist?.name}
              image={dentist?.photo?.gatsbyImageData}
              position={dentist?.designation}
              gdc={dentist?.gdc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
