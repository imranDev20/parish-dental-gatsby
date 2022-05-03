import React from "react";

const Schedule = () => {
  const schedule = [
    { id: 1, day: "Sunday", time: "8AM-7PM" },
    { id: 2, day: "Monday", time: "8AM-7PM" },
    { id: 3, day: "Tuesday", time: "8AM-7PM" },
    { id: 4, day: "Wednesday", time: "8AM-7PM" },
    { id: 5, day: "Thursday", time: "8AM-7PM" },
    { id: 6, day: "Friday", time: "8AM-7PM" },
    { id: 7, day: "Saturday", time: "8AM-7PM" },
  ];

  return (
    <aside className="bg-rose-100/60 rounded pt-10 flex flex-col justify-between">
      <h3 className="text-center text-primary text-3xl font-medium">
        Working Hours
      </h3>

      <div className="px-10">
        {schedule.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-gray-600 my-5 font-light"
          >
            <span>{item.day}</span>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
              <div key={n} className="w-1 h-px bg-secondary"></div>
            ))}
            <span className="before:content-[''] before:bg-gradient-to-r before:bg-bottom before:bg-[length:200px_100px] before:bg-repeat-x">
              {item.time}
            </span>
          </div>
        ))}
      </div>
      <a
        className="bg-primary w-full block rounded-b text-center py-6 text-white"
        href="tel:+654/4715-167"
      >
        Call Us: +654/4715-167
      </a>
    </aside>
  );
};

export default Schedule;
