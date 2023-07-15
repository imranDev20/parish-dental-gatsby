import React from "react";
import ProductsBannerBg from "../../../images/product-triangle-bg.svg";
import { StaticImage } from "gatsby-plugin-image";

const ProductsBanner = () => {
  return (
    <section className="relative mt-28">
      <div className="max-w-[1000px] mx-auto">
        <StaticImage
          src="../../../images/whitening-products.png"
          alt="Whitening Products"
        />
      </div>
      <svg
        className="h-[300px] absolute -bottom-[120px] right-0 -z-10 banner-triangle"
        style={{ transform: "rotateX(135deg)" }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#f3f3f3"
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>
    </section>
  );
};

export default ProductsBanner;
