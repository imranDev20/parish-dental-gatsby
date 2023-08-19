import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { navPages } from "../../common/constant";
import { Link } from "gatsby";
import { customSlugify, serviceLink } from "../../common/utils";
import useServicesQuery from "../../hooks/useServicesQuery";
import BookingButton from "./BookingButton";
import { FiChevronRight } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi2";
import Logo from "./Logo";

const MobileMenu = ({ open, setOpen }) => {
  const [accordionOpen, setAccordionOpen] = useState(0);
  const services = useServicesQuery();

  useEffect(() => {}, []);

  const handleAccordionOpen = (value) =>
    setAccordionOpen(accordionOpen === value ? 0 : value);

  const closeDrawer = () => setOpen(false);

  return (
    <Drawer open={open} onClose={closeDrawer} className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <Logo />

        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>

      <div className="mb-6 flex justify-center items-center ">
        <BookingButton />
      </div>

      <List
        className={`${
          accordionOpen === 1 ? "overflow-y-scroll" : ""
        } h-[calc(100vh-50px)] pb-10`}
      >
        {navPages.map((page) => {
          if (page.name === "Services") {
            return (
              <Accordion
                open={accordionOpen === 1}
                icon={
                  <HiChevronDown
                    className={`mx-auto h-4 w-4 transition-transform ${
                      accordionOpen === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={accordionOpen === 1}>
                  <AccordionHeader
                    onClick={() => handleAccordionOpen(1)}
                    className="border-b-0 p-3"
                  >
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      {page.name}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {services.map((service) => (
                      <Link
                        to={`/services/${customSlugify(service.name)}`}
                        activeClassName="bg-blue-gray-50 rounded-lg"
                      >
                        <ListItem className="ml-4">
                          <Typography
                            color="blue-gray"
                            className="mr-auto font-normal"
                          >
                            {service.name}
                          </Typography>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
            );
          }

          return (
            <Link to={page.route} activeClassName="bg-blue-gray-50 rounded-lg">
              <ListItem>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  {page.name}
                </Typography>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
};

export default MobileMenu;
