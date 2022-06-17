import React from "react";
import Form from "./Form";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      strapiPage(title: { eq: "Home" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_HOME_HOME_CONTACT_FORM {
            id
            homeFormButton
            homeFormTitle
            homeFormText
            homeFormImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const image = getImage(data?.strapiPage?.blocks[6]?.homeFormImage?.localFile);
  const contactHeader = data?.strapiPage?.blocks[6];

  console.log(contactHeader);

  return (
    <section className="w-full bg-background relative min-h-[600px] mb-[1000px] sm:mb-[800px] lg:mb-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row  px-10 justify-between ">
        <div className="w-full lg:w-1/2 ">
          <div className="absolute block left-0 bg-red-50 w-full lg:w-1/2 h-full">
            <BgImage className="h-full" image={image}>
              <div className="h-full"></div>
            </BgImage>
          </div>
        </div>

        <div className="w-full lg:w-1/2  pl-0 lg:pl-10 py-20 lg:py-36 relative">
          <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
            {contactHeader?.homeFormTitle}
          </h2>
          <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
            {contactHeader?.homeFormText}
          </p>
          <Form
            submitButtonText={contactHeader?.homeFormButton}
            inputBg="bg-background"
          />
          <svg
            className="absolute hidden lg:block top-0 -left-28 w-28 h-full z-10"
            width="100%"
            viewBox="0 0 100 700"
            preserveAspectRatio="none"
          >
            <polygon
              fill="#EEF7FF"
              points="0 700 100 700 100 0 100 0 0 700"
            ></polygon>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Contact;
