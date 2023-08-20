import { Button } from "@material-tailwind/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const WhiteningCta = () => {
  return (
    <section className="px-10 container mx-auto mt-28">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="text-center lg:text-left">
          <h2 className="text-[#4f5859] text-4xl font-semibold">
            Award Winning Whitening
          </h2>
          <p className="leading-8 text-gray-600 my-7">
            Experience our award-winning whitening treatments for a brilliantly
            radiant smile. Discover the difference of our acclaimed whitening
            services today.
          </p>

          <Link to="/shop">
            <Button
              className="bg-[#263338] hover:shadow-[#263338]/20"
              size="lg"
            >
              View Our Product Range
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-10 lg:mt-0">
          <StaticImage
            src="../../../images/logoset-dark.png"
            width={350}
            alt="Product Range"
          />
        </div>
      </div>
    </section>
  );
};

export default WhiteningCta;
