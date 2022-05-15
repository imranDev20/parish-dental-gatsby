import React from "react";

const Topbar = () => {
  return (
    <div className="bg-primary text-white py-3 text-sm font-light hidden lg:block">
      <div className="flex justify-between container mx-auto px-10">
        <div>
          <span>Mon - Sat 8:00 17:30, Sunday - CLOSED</span>
        </div>
        <div className="flex">
          <a href="tel:+654/4715-167" className="px-4">
            +654/4715-167
          </a>
          <a href="mailto:allsmiles@qodeinteractive.com" className="px-4">
            allsmiles@qodeinteractive.com
          </a>
          <div className="pl-4">48 Salisbury Road, London, UK ENP51</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
