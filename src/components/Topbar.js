import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const Topbar = () => {
  const data = useStaticQuery(graphql`
    query TopbarQuery {
      strapiGlobal {
        contactInfo {
          address
          email
          phone
        }
        scheduleText
      }
    }
  `);

  const topbarContact = data?.strapiGlobal?.contactInfo;
  const topbarSchedule = data?.strapiGlobal?.scheduleText;

  return (
    <div className="bg-primary text-white py-3 text-sm font-light hidden lg:block">
      <div className="flex justify-between container mx-auto px-10">
        <div className="flex items-center">
          <FiClock className="mr-2" /> <span>{topbarSchedule}</span>
        </div>
        <div className="flex">
          <a
            href={`tel:${topbarContact?.phone}`}
            className="px-4 flex items-center"
          >
            <FiPhone className="mr-2" />
            {topbarContact?.phone}
          </a>
          <a
            href="mailto:allsmiles@qodeinteractive.com"
            className="px-4 flex items-center"
          >
            <FiMail className="mr-2" />
            {topbarContact?.email}
          </a>
          <div className="pl-4 flex items-center">
            <FiMapPin className="mr-2" /> {topbarContact.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
