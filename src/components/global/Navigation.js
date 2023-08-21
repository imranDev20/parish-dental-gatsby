import { Link } from "gatsby";
import React from "react";
import { navPages } from "../../common/constant";
import { BsChevronCompactDown } from "react-icons/bs";
import useServicesQuery from "../../hooks/useServicesQuery";
import BookingButton from "./BookingButton";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { customSlugify } from "../../common/utils";
import { useLocation } from "@reach/router";

const Navigation = ({ open }) => {
  const services = useServicesQuery();

  const location = useLocation();

  return (
    <nav className={`bg-white items-center z-10 hidden xl:flex`}>
      {navPages.map((page) => {
        if (page.route === "/services") {
          return (
            <Menu
              key={page.id}
              allowHover
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <Typography as="li" variant="small" className="">
                  <Link
                    partiallyActive={page.route !== "/" ? true : false}
                    to={page.route}
                    activeClassName={`border-b-[3px] xl:border-b-0 border-b-secondary border-t-0 xl:border-t-[3px] xl:border-t-secondary`}
                    className="nav-item px-3 py-8  uppercase  text-sm text-primary border-t-[3px] border-transparent font-semibold flex relative cursor-pointer"
                  >
                    {page.name}
                    <BsChevronCompactDown
                      className="absolute bottom-3 left-1/2 -translate-x-1/2"
                      aria-hidden="true"
                    />
                  </Link>
                </Typography>
              </MenuHandler>

              <MenuList>
                {services.map((service) => {
                  const isServiceInner = location.pathname.includes(
                    customSlugify(service.name)
                  );

                  return (
                    <Link
                      to={`/services/${customSlugify(service.name)}`}
                      key={service.id}
                    >
                      <MenuItem
                        className={`uppercase  text-sm ${
                          isServiceInner ? "text-secondary" : "text-primary"
                        } font-semibold hover:text-secondary`}
                      >
                        {service.name}
                      </MenuItem>
                    </Link>
                  );
                })}
              </MenuList>
            </Menu>
          );
        } else {
          return (
            <Typography key={page.id} as="li" variant="small">
              <Link
                partiallyActive={page.route !== "/" ? true : false}
                to={page.route}
                activeClassName={`border-b-[3px] xl:border-b-0 border-b-secondary border-t-0 xl:border-t-[3px] xl:border-t-secondary`}
                className="nav-item px-3 py-8 inline-block uppercase  text-sm text-primary border-t-[3px] border-transparent font-semibold"
              >
                {page.name}
              </Link>
            </Typography>
          );
        }
      })}

      <div className="ml-4">
        <BookingButton />
      </div>
    </nav>
  );
};

export default Navigation;
