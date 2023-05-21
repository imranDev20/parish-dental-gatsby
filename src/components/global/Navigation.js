import { Link } from "gatsby";
import React, { Fragment } from "react";
import { navPages } from "../../common/constant";
import {
  BsCheck,
  BsChevronCompactDown,
  BsFillCalendar2DateFill,
} from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import useServicesQuery from "../../hooks/useServicesQuery";
import { customSlugify } from "../../common/utils";

const Navigation = ({ open }) => {
  const services = useServicesQuery();
  return (
    <nav
      className={`fixed lg:static bg-white lg:bg-white top-0 ${
        open ? "right-0" : "-right-full"
      }  flex flex-col justify-center items-center lg:flex-row w-full h-screen lg:h-auto lg:w-auto z-10  ${
        open ? "opacity-100" : "opacity-0"
      } lg:opacity-100 transition-all duration-300 py-20 lg:py-0`}
    >
      {navPages.map((page) => {
        if (page.route === "/services") {
          return (
            <Menu as="div" className="relative inline-block" key={page.id}>
              <div>
                <Menu.Button className="nav-item px-3 py-8  uppercase  text-sm text-primary border-t-[3px] border-transparent font-semibold flex relative">
                  <BsChevronCompactDown
                    className="absolute bottom-3 left-1/2 -translate-x-1/2"
                    aria-hidden="true"
                  />
                  {page.name}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-1/2 -translate-x-1/2  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {services.map((service, index) => (
                    <div className="px-1 py-1" key={service.id}>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={
                              index === 4 || index === 5
                                ? `/services/${customSlugify(service.name)}`
                                : "/services"
                            }
                            className={`${
                              active
                                ? "bg-secondary text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <img
                                className=" h-5 w-5 mr-2 "
                                src={service && service.icon.url}
                                alt={service && service.name}
                              />
                            ) : (
                              <img
                                className=" h-5 w-5 mr-2 "
                                src={service && service.icon.url}
                                alt={service && service.name}
                              />
                            )}
                            {service.name}
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          );
        } else {
          return (
            <Link
              partiallyActive={page.route !== "/" ? true : false}
              key={page.id}
              activeClassName={`border-b-[3px] lg:border-b-0 border-b-secondary border-t-0 lg:border-t-[3px] lg:border-t-secondary`}
              className="nav-item px-3 py-8 inline-block uppercase  text-sm text-primary border-t-[3px] border-transparent font-semibold"
              to={page.route}
            >
              {page.name}
            </Link>
          );
        }
      })}

      <a
        className="ml-4 w-32 flex items-center bg-secondary rounded px-3 py-2 text-white"
        id="Setmore_button_iframe"
        href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b"
      >
        <BsFillCalendar2DateFill className="mr-2" />
        Book Now
      </a>
    </nav>
  );
};

export default Navigation;
