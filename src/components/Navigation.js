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

  console.log(data);

  const routes = data?.allStrapiPage?.nodes;
  console.log(routes);

  return (
    <nav className="hidden lg:block">
      <div className="">
        {routes.map((route) => (
          <div key={route?.strapi_id} className="inline-block">
            <Link
              activeClassName={`border-t-[3px]  !border-secondary`}
              className="nav-item px-6 py-8 inline-block uppercase tracking-[0.2em] text-sm text-primary font-medium border-t-[3px] border-transparent"
              to={route?.slug === "home" ? `/` : `/${route?.slug}/`}
            >
              {route?.title}
            </Link>
          </div>
        ))}
      </div>
      {/* <div
        style={{ width: indicatorWidth, left: indicatorLeft }}
        className="indicator"
      ></div> */}
    </nav>
  );
};

export default Navigation;
