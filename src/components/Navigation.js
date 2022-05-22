import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

const Navigation = ({ open }) => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      allStrapiPage(sort: { fields: strapi_id, order: ASC }) {
        nodes {
          slug
          title
          strapi_id
        }
      }
    }
  `);

  const routes = data?.allStrapiPage?.nodes;

  return (
    <nav
      className={`fixed lg:static bg-white lg:bg-white top-0 ${
        open ? "right-0" : "-right-full"
      }  flex flex-col justify-center items-center lg:flex-row w-full h-screen lg:h-auto lg:w-auto z-10  ${
        open ? "opacity-100" : "opacity-0"
      } lg:opacity-100 transition-all duration-300 py-20 lg:py-0`}
    >
      {routes.map((route) => (
        <Link
          key={route?.strapi_id}
          activeClassName={`border-b-[3px] lg:border-b-0 border-b-secondary border-t-0 lg:border-t-[3px] lg:border-t-secondary`}
          className="nav-item px-6 py-8 inline-block uppercase tracking-[0.2em] text-sm text-primary font-medium border-t-[3px] border-transparent"
          to={route?.slug === "home" ? `/` : `/${route?.slug}`}
        >
          {route?.title}
        </Link>
      ))}
      <Link
        to="/blogs"
        partiallyActive={true}
        activeClassName={`border-b-[3px] lg:border-b-0 border-b-secondary border-t-0 lg:border-t-[3px] lg:border-t-secondary`}
        className="nav-item px-6 py-8 inline-block uppercase tracking-[0.2em] text-sm text-primary font-medium border-t-[3px] border-transparent"
      >
        Blogs
      </Link>
    </nav>
  );
};

export default Navigation;
