import { Link } from "gatsby";
import React from "react";
import { navPages } from "../../common/constant";
import { BsFillCalendar2DateFill } from "react-icons/bs";

const Navigation = ({ open }) => {
  return (
    <nav
      className={`fixed lg:static bg-white lg:bg-white top-0 ${
        open ? "right-0" : "-right-full"
      }  flex flex-col justify-center items-center lg:flex-row w-full h-screen lg:h-auto lg:w-auto z-10  ${
        open ? "opacity-100" : "opacity-0"
      } lg:opacity-100 transition-all duration-300 py-20 lg:py-0`}
    >
      {navPages.map((page) => (
        <Link
          key={page.id}
          activeClassName={`border-b-[3px] lg:border-b-0 border-b-secondary border-t-0 lg:border-t-[3px] lg:border-t-secondary`}
          className="nav-item px-3 py-8 inline-block uppercase  text-sm text-primary border-t-[3px] border-transparent font-semibold"
          to={page.route}
        >
          {page.name}
        </Link>
      ))}
      <a
        className="ml-4 w-32 flex items-center bg-secondary rounded px-3 py-2 text-white"
        id="Setmore_button_iframe"
        href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b"
      >
        <BsFillCalendar2DateFill className="mr-2" />
        Book Now
        {/* <img
          border="none"
          src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.png"
          alt="Book an appointment using Setmore"
        /> */}
      </a>
    </nav>
  );
};

export default Navigation;
