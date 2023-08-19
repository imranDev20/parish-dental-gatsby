import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

const Logo = ({ isFooter }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      allContentfulGlobal {
        nodes {
          logoWhite {
            url
            title
          }
          logo {
            url
            title
          }
        }
      }
    }
  `);

  const logoData = data?.allContentfulGlobal?.nodes[0];

  return (
    <div className="w-48 lg:w-56">
      <Link to="/">
        <img
          className="w-full h-full object-contain"
          src={isFooter ? logoData?.logoWhite?.url : logoData?.logo?.url}
          alt={isFooter ? logoData?.logoWhite?.title : logoData.logo.title}
        />
      </Link>
    </div>
  );
};

export default Logo;
