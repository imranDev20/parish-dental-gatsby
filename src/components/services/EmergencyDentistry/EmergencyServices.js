import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

import ToothacheIcon from "../../../images/icons/toothache.svg";
import SensitivityIcon from "../../../images/icons/sensitivity.svg";
import FillingIcon from "../../../images/icons/filling.svg";
import SwellIcon from "../../../images/icons/swell.svg";
import DenturesIcon from "../../../images/icons/dentures.svg";
import DentalTraumaIcon from "../../../images/icons/dental-trauma.svg";
import GumpainIcon from "../../../images/icons/gum-pain.svg";
import CrownIcon from "../../../images/icons/crown.svg";

const services = [
  { id: 1, name: "Toothache", icon: ToothacheIcon },
  { id: 2, name: "Sensitivity", icon: SensitivityIcon },
  { id: 3, name: "Broken Filling Tooth", icon: FillingIcon },
  { id: 4, name: "Swelling/Abscess", icon: SwellIcon },
  { id: 5, name: "Denture Ajdustment", icon: DenturesIcon },
  { id: 6, name: "Re-cement Crowns", icon: CrownIcon },
  { id: 7, name: "Dental Trauma", icon: DentalTraumaIcon },
  { id: 8, name: "Painful Gums", icon: GumpainIcon },
];

function EmergencyServices() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-10 ">
        <Typography variant="h2" className="text-center font-bold">
          Our Emergency Dentist Can Help With The Following
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-14">
          {services.map((service) => (
            <Card className="text-center p-3">
              <CardBody className="flex items-center flex-col">
                <img
                  src={service.icon}
                  alt={service.name}
                  width={80}
                  height={80}
                />
                <Typography variant="h5" color="blue-gray" className="mt-5">
                  {service.name}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default EmergencyServices;
