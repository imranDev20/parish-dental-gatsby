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
        title="Aesthetics"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <WhiteningBanner />
      <Types />
      <WhiteningCta />
      <ProductsBanner />
      <Range />
      <Faq />

      <Button
        className={`bg-white hover:shadow-white/20 text-[#263338] `}
        size="lg"
      >
        Book an Appointment
      </Button>
    </>
  );
};

export default Whitening;
