import React, { useEffect, useState } from "react";
import WhiteningBanner from "./WhiteningBanner";
import Seo from "../../global/Seo";
import WhiteningCta from "./WhiteningCta";
import Range from "./Range";
import ProductsBanner from "./ProductsBanner";
import Faq from "./Faq";
import Types from "./Types";
import { Button } from "@material-tailwind/react";

const Whitening = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Seo
        title="Teeth Whitening Treatment in Leeds | Buy Whitening Strips & Gel"
        description="Looking for Teeth Whitening Treatment in Leeds? Buy our latest teeth whitening strips and gels and secure a brilliantly radiant smile."
      />
      <WhiteningBanner />
      <Types />
      <WhiteningCta />
      <ProductsBanner />
      <Range />
      <Faq />

      {/* <Button
        className={`bg-white hover:shadow-white/20 text-[#263338] `}
        size="lg"
      >
        Book an Appointment
      </Button> */}
    </>
  );
};

export default Whitening;
