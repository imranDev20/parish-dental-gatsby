import React from "react";

import HaDermaImage from "../../../images/ha-derma.svg";
import AliaxinImage from "../../../images/aliaxin.svg";
import ProfhiloImage from "../../../images/profhilo-white.png";

const QualityProducts = () => {
  return (
    <section>
      <div className=" container px-10 mx-auto flex flex-col lg:flex-row mt-28">
        <div className=" w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold mb-10">
            We exclusively utilise premium-grade products of exceptional quality
          </h2>
          <p className="leading-8 text-gray-400">
            Experience excellence with our Aesthetics services, where we use
            only the finest products to ensure exceptional results each time.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-wrap p-3 pt-0 mt-10 lg:mt-0">
          <div className="w-1/2 p-4">
            <div className="bg-white rounded">
              <img src={HaDermaImage} alt="HA Derma" />
            </div>
          </div>

          <div className="w-1/2 p-4">
            <div className="bg-white rounded flex justify-center items-start mb-10">
              <img src={AliaxinImage} alt="HA Derma" />
            </div>
            <div className="">
              <img src={ProfhiloImage} alt="HA Derma" />
            </div>
          </div>
        </div>
      </div>

      <div className=" container px-10 mx-auto flex mt-7">
        <p className="text-medium leading-8 text-gray-400 max-w-5xl text-center mx-auto">
          Indulge in the finest aesthetic treatments you'll ever experience.
          Through meticulous research, we have curated a selection of top-notch
          products, ensuring utmost quality and satisfaction for our esteemed
          clients. Prepare to be impressed.
        </p>
      </div>
    </section>
  );
};

export default QualityProducts;
