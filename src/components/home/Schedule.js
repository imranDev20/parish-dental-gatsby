import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Schedule = () => {
  const data = useStaticQuery(graphql`
    query ScheduleQuery {
      allContentfulSchedule(sort: { order: ASC, fields: scheduleId }) {
        nodes {
          day
          contentful_id
          time
        }
      }
      allContentfulGlobal {
        nodes {
          phone
        }
      }
    }
  `);

  const schedule = data?.allContentfulSchedule?.nodes;
  const phone = data?.allContentfulGlobal?.nodes[0].phone;

  return (
    <aside className="bg-backgroundSecondary rounded pt-10 flex flex-col justify-between">
      <h3 className="text-center text-primary text-3xl font-medium">
        Working Hours
      </h3>

      <div className="px-5 lg:px-10">
        {schedule.map((item) => (
          <div
            key={item.contentful_id}
            className="flex justify-between items-center text-gray-600 my-5 font-light"
          >
            <span>{item.day}</span>
            {[0, 1, 2, 3, 4].map((n) => (
              <div key={n} className="w-1 h-px bg-secondary"></div>
            ))}
            <span className="before:content-[''] before:bg-gradient-to-r before:bg-bottom before:bg-[length:200px_100px] before:bg-repeat-x whitespace-nowrap">
              {item.time}
            </span>
          </div>
        ))}
      </div>
      <a
        className="bg-primary w-full block rounded-b text-center py-6 text-white"
        href={`tel:${phone}`}
      >
        Call Us: {phone}
      </a>
    </aside>
  );
};

export default Schedule;
