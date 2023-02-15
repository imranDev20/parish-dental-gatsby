import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const Topbar = () => {
  const data = useStaticQuery(graphql`
    query TopbarQuery {
      allContentfulGlobal {
        nodes {
          phone
          email

          logo {
            url
            title
          }
          address
          workHours
        }
      }
    }
  `);

  const topbarData = data?.allContentfulGlobal.nodes[0];

  return (
    <div className="bg-primary text-white py-3 text-sm font-light hidden lg:block">
      <div className="flex justify-between container mx-auto px-10">
        <div className="flex items-center">
          <FiClock className="mr-2" /> <span>{topbarData?.workHours}</span>
        </div>
        <div className="flex">
          <a
            href={`tel:${topbarData?.phone}`}
            className="px-4 flex items-center"
          >
            <FiPhone className="mr-2" />
            {topbarData?.phone}
          </a>
          <a
            href="mailto:allsmiles@qodeinteractive.com"
            className="px-4 flex items-center"
          >
            <FiMail className="mr-2" />
            {topbarData?.email}
          </a>
          <div className="pl-4 flex items-center">
            <FiMapPin className="mr-2" /> {topbarData?.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
