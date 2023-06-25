import React from "react";

const PriceList = () => {
  const prices = [
    {
      id: 1,
      heading: "Dermal Fillers",
      packages: [
        {
          name: "0.5ml",
          price: 100,
        },
        {
          name: "0.7ml",
          price: 150,
        },
        {
          name: "1ml",
          price: 250,
        },
        {
          name: "2ml",
          price: 350,
        },
        {
          name: "3ml",
          price: 400,
        },
        {
          name: "4ml",
          price: 450,
        },
      ],
      additional:
        "Nose to mouth lines, smokers lines, chin, lips and marionettes.",
    },
    {
      id: 2,
      heading: "Botox",
      packages: [
        {
          name: "1 area",
          price: 180,
        },
        {
          name: "2 areas",
          price: 240,
        },
        {
          name: "3 areas",
          price: 300,
        },
        {
          name: "4 areas",
          price: 400,
        },
      ],
      additional: "Any additional areas £100",
    },

    {
      id: 3,
      heading: "Others",
      packages: [
        {
          name: "Profhilo first dose",
          price: 249,
        },
        {
          name: "Sosum booster",
          price: 160,
        },
      ],
    },
  ];
  return (
    <section className="container mx-auto px-10 mt-28">
      <h2 className="text-4xl text-center font-semibold mb-16">
        Aesthetics Price List
      </h2>
      <div className="flex flex-wrap ">
        {prices.map((price) => (
          <div className="pr-10 w-full lg:w-1/2 mx-auto second:mt-10 lg:second:mt-0 third:mt-10">
            <h4 className="mb-2 font-semibold text-2xl text-center">
              {price.heading}
            </h4>

            <div className="mt-8">
              {price.packages.map((pack) => (
                <>
                  <div className="flex justify-between my-1">
                    <p className="text-gray-400 leading-8 uppercase">
                      {pack.name}
                    </p>
                    <p className="text-gray-400">£{pack.price}</p>
                  </div>
                  <div className="border-b border-b-gray-600"></div>
                </>
              ))}
            </div>
            <p className="text-right text-gray-400 leading-8 mt-3">
              {price.additional}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 leading-8 mt-10">
        Offers and packages now availabe. Please enquire with our team today on
        <a href="tel:01132638509" className="text-secondary">
          {" "}
          0113 2638509{" "}
        </a>{" "}
        to find out more
      </p>
    </section>
  );
};

export default PriceList;
