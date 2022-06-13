import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Topbar = () => {
  const data = useStaticQuery(graphql`
    query TopbarQuery {
      strapiGlobal {
        contactInfo {
          address
          email
          phone
        }

        logo {
          alternativeText
          ext
          localFile {
            url
            publicURL
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  console.log(data);

  const topbarData = data?.strapiGlobal?.contactInfo;

  return (
    <div className="bg-primary text-white py-3 text-sm font-light hidden lg:block">
      <div className="flex justify-between container mx-auto px-10">
        <div>
          <span>Mon - Sat 8:00 17:30, Sunday - CLOSED</span>
        </div>
        <div className="flex">
          <a href={`tel:${topbarData?.phone}`} className="px-4">
            {topbarData?.phone}
          </a>
          <a href="mailto:allsmiles@qodeinteractive.com" className="px-4">
            {topbarData?.email}
          </a>
          <div className="pl-4">{topbarData.address}</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
