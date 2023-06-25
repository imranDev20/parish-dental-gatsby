import React from "react";

const Schedule = () => {
  return (
    <div className=" bg-[#242625] p-7 lg:max-w-[400px] w-full rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-center">Open Hours</h3>
      <div className="flex items-center justify-between mt-8 mb-3">
        <p>Monday - Thursday</p>
        <p>9AM - 6PM</p>
      </div>
      <div className="border-b border-b-gray-600"></div>
      <div className="flex items-center justify-between mt-5 mb-3">
        <p>Friday</p>
        <p>9AM - 5PM</p>
      </div>
      <div className="border-b border-b-gray-600"></div>
      <div className="flex items-center justify-between mt-5 mb-3">
        <p>Saturday</p>
        <p>9AM - 1PM</p>
      </div>
      <div className="border-b border-b-gray-600"></div>
      <div className="flex items-center justify-between mt-5 mb-3">
        <p>Sunday</p>
        <p>Closed</p>
      </div>
    </div>
  );
};

export default Schedule;
