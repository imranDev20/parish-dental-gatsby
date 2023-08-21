import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

function EmergencyBanner() {
  return (
    <section className="relative after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-black/60">
      <StaticImage
        className="h-[calc(100vh-132px)]"
        imgClassName="h-[calc(100vh-132px)]"
        src="../../../images/emergency-banner.jpg"
        alt="Emergency Banner"
      />

      <div className="container mx-auto px-10 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Card className="p-5">
            <CardBody>
              <Typography
                variant="h1"
                color="blue-gray"
                className="mb-2 font-bold text-3xl lg:text-5xl"
              >
                Emergency Dentist
              </Typography>
              <Typography className="font-bold text-lg lg:text-2xl my-5">
                Covering LEEDS 24 Hours 7 days of the week including National
                and Bank Holidays
              </Typography>

              <Typography className="font-bold text-lg lg:text-xl my-2">
                £45 consultation
              </Typography>
              <Typography className="font-medium text-lg lg:text-xl my-2">
                £90* out-of-hours consultation
              </Typography>
            </CardBody>
          </Card>

          <div className="flex justify-center items-center">
            <div className="flex flex-col">
              <a href="tel:01133228354">
                <Button className="my-3 bg-red-700 flex items-center text-base lg:text-lg">
                  <FaPhoneAlt className="mr-3 text-lg" />
                  <span>
                    Call us now <br /> 0113 322 8354
                  </span>
                </Button>
              </a>

              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
              >
                <Button
                  className="my-3 bg-red-700 flex items-center text-base lg:text-lg p-5"
                  size="lg"
                >
                  <FaCalendarCheck className="mr-3 text-lg" /> Book Online
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EmergencyBanner;
