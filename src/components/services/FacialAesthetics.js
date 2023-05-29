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
  const faqInfo = [
    {
      id: 1,
      text: "30 Min Procedure",
      icon: "",
    },
    {
      id: 2,
      text: "Recovery few days",
      icon: "",
    },
    {
      id: 3,
      text: "No of treatments: 1+",
      icon: "",
    },
    {
      id: 4,
      text: "Lasts 3-6 months",
      icon: "",
    },
  ];

  const faqRisk = [
    {
      id: 1,
      text: "Redness at injection site",
      icon: "",
    },
    {
      id: 2,
      text: "Headaches",
      icon: "",
    },
    {
      id: 3,
      text: "Minor bruising",
      icon: "",
    },
    {
      id: 4,
      text: "Risks are RARE",
      icon: "",
    },
  ];

  return (
    <>
      <Seo
        title="Facial Aesthetics"
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
