import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      allStrapiPage {
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
    <nav className="hidden lg:block">
      {routes.map((route) => (
        <Link
          key={route?.strapi_id}
          activeClassName={`border-t-[3px]  !border-secondary`}
          className="nav-item px-6 py-8 inline-block uppercase tracking-[0.2em] text-sm text-primary font-medium border-t-[3px] border-transparent"
          to={route?.slug === "home" ? `/` : `/${route?.slug}/`}
        >
          {route?.title}
        </Link>
      ))}
      <Link
        to="/blog/"
        activeClassName={`border-t-[3px]  !border-secondary`}
        className="nav-item px-6 py-8 inline-block uppercase tracking-[0.2em] text-sm text-primary font-medium border-t-[3px] border-transparent"
      >
        Blog
      </Link>
    </nav>
  );
};

export default Navigation;
