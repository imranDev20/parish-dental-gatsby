import React from "react";
import WhiteningBanner from "./WhiteningBanner";
import WhiteningCta from "./WhiteningCta";
import Range from "./Range";
import ProductsBanner from "./ProductsBanner";
import Faq from "./Faq";
import Types from "./Types";
const Whitening = () => {
  return (
    <>
      <WhiteningBanner />
      <Types />
      <WhiteningCta />
      <ProductsBanner />
      <Range />
      <Faq />
    </>
  );
};

export default Whitening;
