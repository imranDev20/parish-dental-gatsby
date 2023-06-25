import React from "react";
import {
  FaBirthdayCake,
  FaLongArrowAltRight,
  FaUserShield,
} from "react-icons/fa";

import CareQualityImage from "../../images/care-quality-com.svg";

import Seo from "../global/Seo";
import AestheticsBanner from "./FacialAesthetics/AestheticsBanner";
import AestheticsServices from "./FacialAesthetics/AestheticsServices";
import QualityProducts from "./FacialAesthetics/QualityProducts";
import OurValues from "./FacialAesthetics/OurValues";
import PriceList from "./FacialAesthetics/PriceList";
import AestheticsTestimonial from "./FacialAesthetics/AestheticsTestimonial";
import Contact from "./FacialAesthetics/Contact";
import { Button } from "@material-tailwind/react";
import KeepingSafe from "./FacialAesthetics/KeepingSafe";
import ThingsToKnow from "./FacialAesthetics/ThingsToKnow";
import TreatmentFaq from "./FacialAesthetics/TreatmentFaq";

const FacialAesthetics = () => {
  return (
    <>
      <Seo
        title="Aesthetics"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
