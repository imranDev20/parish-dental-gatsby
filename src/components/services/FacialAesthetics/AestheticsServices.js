import React from "react";

import BotoxIcon from "../../../images/icons/botox.svg";
import DermaFillerIcon from "../../../images/icons/derma-filler.svg";
import ChemicalPeelIcon from "../../../images/icons/chemical-peels.svg";
import LipEnhanceIcon from "../../../images/icons/lip-enhance.svg";
import SkinRejuvenIcon from "../../../images/icons/skin-rejuvenation.svg";
import MicroneedlingIcon from "../../../images/icons/microneedling.svg";

const AestheticsServices = () => {
  const aesthetics = [
    {
      id: 1,
      name: "Botox",
      icon: BotoxIcon,
      description:
        "Botox is a non-surgical treatment that smooths out wrinkles and fine lines, giving you a more youthful appearance.",
    },
    {
      id: 2,
      name: "Dermal fillers",
      icon: DermaFillerIcon,
      description:
        "Dermal fillers are used to add volume and fullness to areas of the face that have lost volume due to aging or other factors. ",
    },
    {
      id: 3,
      name: "Chemical peels",
      icon: ChemicalPeelIcon,
      description:
        "Chemical peels are an effective way to rejuvenate the skin by removing dead skin cells and promoting the growth of new, healthy skin.",
    },
    {
      id: 4,
      name: "Lip enhancement",
      icon: LipEnhanceIcon,
      description:
        "Our lip enhancement treatments are designed to add volume and definition to your lips, giving you a fuller and more youthful appearance.",
    },
    {
      id: 5,
      name: "Skin Rejuvenation",
      icon: SkinRejuvenIcon,
      description:
        "Our skin rejuvenation treatments are designed to reduce the appearance of fine lines, wrinkles, and other signs of aging.",
    },
    {
      id: 6,
      name: "Microneedling",
      icon: MicroneedlingIcon,
      description:
        "We offer microneedling as a safe and effective treatment to help improve the overall health and appearance of your skin.",
    },
  ];
  return (
    <section className="container mx-auto px-10 mt-28">
      <h2 className="text-4xl text-center font-semibold mb-16">
        Aesthetics Treatments
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {aesthetics.map((item) => (
          <div className="flex flex-col items-center bg-[#242625] rounded-md p-5 shadow-lg">
            <img src={item.icon} alt="" width={80} />
            <h4 className="text-center mt-3 text-2xl font-medium mb-3">
              {item.name}
            </h4>
            <p className="text-center text-gray-400 leading-8">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AestheticsServices;
