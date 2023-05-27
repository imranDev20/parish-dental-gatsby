import React, { useState } from "react";
import { navPages } from "../../common/constant";
import Logo from "./Logo";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "gatsby";
import { customSlugify, serviceLink } from "../../common/utils";
import useServicesQuery from "../../hooks/useServicesQuery";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import BookingButton from "./BookingButton";

const Drawer = ({ open, setOpen }) => {
  const [isServices, setIsServices] = useState(false);
  const services = useServicesQuery();

  return (
    <div
      className={`block lg:hidden fixed top-0  w-screen bg-white h-screen z-10 ${
        open ? "left-0 opacity-100" : "-left-[110%] opacity-0"
      } transition-all duration-500`}
    >
      <div
        className="flex items-center pl-3 pt-10 cursor-pointer"
        onClick={() => setIsServices(false)}
      >
        <FaChevronLeft
          className={`mr-2 text-3xl text-primary ${
            isServices ? "visible" : "invisible pointer-events-none"
          }`}
        />
      </div>
      <div className="py-20 flex flex-col p-10 items-stretch">
        {!isServices
          ? navPages.map((page) => {
              if (page.name === "Services") {
                return (
                  <div
                    className="py-2 items-center flex justify-between cursor-pointer text-neutral-500 leading-8"
                    onClick={(e) => setIsServices(true)}
                  >
                    {page.name} <FaChevronRight className="ml-2 text-xl" />
                  </div>
                );
              }

              return (
                <Link
                  activeClassName="text-secondary"
                  to={page.route}
                  className="py-2 text-neutral-500 leading-8"
                  onClick={(e) => console.log(e)}
                >
                  {page.name}
                </Link>
              );
            })
          : null}

        {isServices
          ? services.map((service, index) => (
              <Link
                activeClassName="text-secondary"
                className="py-2 text-neutral-500 leading-8"
                target={index === 6 ? "_blank" : "_self"}
                to={serviceLink(index, service)}
              >
                {service.name}
              </Link>
            ))
          : null}

        <div className="mt-10">
          <BookingButton />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
