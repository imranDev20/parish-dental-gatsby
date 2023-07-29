import React from "react";
import Seo from "../global/Seo";
import AestheticsBanner from "./FacialAesthetics/AestheticsBanner";
import AestheticsServices from "./FacialAesthetics/AestheticsServices";
import QualityProducts from "./FacialAesthetics/QualityProducts";
import OurValues from "./FacialAesthetics/OurValues";
import PriceList from "./FacialAesthetics/PriceList";
import AestheticsTestimonial from "./FacialAesthetics/AestheticsTestimonial";
import Contact from "./FacialAesthetics/Contact";
import KeepingSafe from "./FacialAesthetics/KeepingSafe";
import ThingsToKnow from "./FacialAesthetics/ThingsToKnow";
import TreatmentFaq from "./FacialAesthetics/TreatmentFaq";

const FacialAesthetics = () => {
  return (
    <>
      <Seo
        title="Best Aesthetics Clinic in Leeds | Guaranteed Perfect Treatment"
        description="Seeking Perfection for Aesthetics treatments? Visit the Award-Winning and the best Aesthetics Clinic in Leeds, Parish Dental!"
      />
      <div className="bg-[#1E1E1E] text-white">
        <AestheticsBanner />
        <AestheticsServices />
        <QualityProducts />
        <OurValues />
        <PriceList />
        <AestheticsTestimonial />
        <ThingsToKnow />
        <KeepingSafe />
        <TreatmentFaq />
        <Contact />
      </div>
    </>
  );
};

export default FacialAesthetics;
