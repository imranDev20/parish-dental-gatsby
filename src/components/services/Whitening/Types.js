import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// import image from "../../../images/whitening-strips.jpeg";

const Types = () => {
  return (
    <section className="mx-auto  my-28">
      <h2 className="text-[#4f5859] text-4xl text-center font-semibold mb-16">
        3 Types of Whitening Available at Parish Dental
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-end ">
          <div className="lg:max-w-[600px] flex items-center">
            <div>
              <StaticImage
                src="../../../images/whitening-strips.jpeg"
                alt="Professional Whitening Strips"
              />
            </div>
            <div>
              <StaticImage
                src="../../../images/dissolving-strips.jpeg"
                alt="Dissolving Whitening Strips"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#f3f3f3] py-16 px-16">
          <div className=" lg:max-w-[600px]">
            <h3 className="text-[#4f5859] font-semibold text-3xl">
              Whitening Strips
            </h3>
            <p className="leading-8 text-gray-600 mt-3">
              Introducing mint-flavored dissolving whitening strips with an
              advanced enamel-safe formula. These strips are perfect for
              on-the-go touch-ups and ongoing smile maintenance. With a short
              application time and no strips to remove, they offer convenience
              and effectiveness. The non-slip technology and premium strength
              formula ensure a more powerful and long-lasting whitening result.
              Each pack contains 14 applications (28 strips), providing ample
              supply for maintaining a white and confident smile.
            </p>
            <ul className="mt-7 text-[#4f5859] ">
              <li className="text-lg font-medium">
                Professional Whitening Strips
              </li>
              <li className="text-lg font-medium">
                Dissolving Whitening Strips
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="bg-[#f3f3f3] py-16 px-16 flex justify-end order-last lg:order-first">
          <div className="lg:max-w-[600px]">
            <h3 className="text-[#4f5859] font-semibold text-3xl">
              Home Teeth Whitening - £350
            </h3>
            <p className="leading-8 text-gray-600 mt-3">
              Our premium UK-made teeth whitening gel is meticulously crafted by
              dentists for optimum results. With a stable formula infused with
              potassium nitrate, calcium, and fluoride, it effectively minimizes
              sensitivity. You have the choice between hydrogen peroxide or
              carbamide peroxide options. Each package includes 4 x 3ml syringes
              and a 30ml pre-polishing paste.
            </p>
            <ul className="mt-7 text-[#4f5859] ">
              <li className="text-lg font-medium">Day Whitening Kits</li>
              <li className="text-lg font-medium">Night Whitening Kits</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="lg:max-w-[600px] flex items-center pl-10 py-10">
            <div>
              <StaticImage
                src="../../../images/day-whitening-kit.png"
                alt="Day Whitening Kits"
              />
            </div>
            <div>
              <StaticImage
                src="../../../images/night-whitening-kit.png"
                alt="Night Whitening Kits"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex lg:justify-end justify-center">
          <div className="lg:max-w-[600px] flex items-center px-10">
            <StaticImage
              src="../../../images/office-gel.png"
              height={500}
              alt="BEAM In-Office Whitening Gel"
            />
          </div>
        </div>
        <div className="bg-[#f3f3f3] py-16 px-16">
          <div className="lg:max-w-[600px]">
            <h3 className="text-[#4f5859] font-semibold text-3xl">
              In Office Whitening - £550
            </h3>
            <p className="leading-8 text-gray-600 mt-3">
              Experience the remarkable results of our professional in-office
              teeth whitening gel, proudly crafted with our unique hybrid
              dual-action whitening gel formula. Our optimized 6% Hydrogen
              Peroxide + PAP formula is complemented by a pre-whitening varnish,
              skillfully applied to prime the teeth for an outstanding in-office
              whitening session. To maintain and enhance your dazzling smile, we
              suggest continuing your whitening journey with the BEAM
              Professional Whitening Kit for at-home treatment.
            </p>
            <ul className="mt-7 text-[#4f5859] ">
              <li className="text-lg font-medium">
                BEAM In-Office Whitening Gel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types;
