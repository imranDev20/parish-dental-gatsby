import { Link } from "gatsby";
import React from "react";
import { navPages } from "../../common/constant";

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
          className="nav-item px-4 py-8 inline-block uppercase tracking-[0.1em] text-sm text-primary border-t-[3px] border-transparent font-semibold"
          to={page.route}
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
