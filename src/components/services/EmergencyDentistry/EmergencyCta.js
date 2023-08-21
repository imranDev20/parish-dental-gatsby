import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa";

function EmergencyCta() {
  return (
    <section className="bg-red-700 mt-20">
      <div className="container mx-auto px-10 py-20 text-white flex flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left">
          <Typography className="font-semibold text-lg">
            Book An Emergency Dental Appointment With US TODAY!
          </Typography>
          <Typography variant="h2" className="font-bold">
            Say Goodbye TO Your Dental Pain!
          </Typography>
        </div>
        <div className="flex justify-center items-center ">
          <a
            href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Button
              size="lg"
              variant="outlined"
              color="white"
              className="flex items-center mt-5 lg:mt-0"
            >
              <FaCalendarCheck className="mr-3" />
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
export default EmergencyCta;
