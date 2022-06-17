import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Logo = ({ isFooter }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      strapiGlobal {
        logo {
          alternativeText
          ext
          localFile {
            url
            publicURL
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <div className="w-16 h-16">
      <img
        className="w-full h-full object-contain"
        src={data?.strapiGlobal?.logo?.localFile?.publicURL}
        alt=""
      />
    </div>
  );
};

export default Logo;
