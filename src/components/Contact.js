import React from "react";
import Form from "./Form";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import BackgroundImage from "gatsby-background-image";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      contentfulPages(title: { eq: "Home" }) {
        id
        contentful_id
        blocks {
          ... on ContentfulSections {
            id
            image {
              gatsbyImage(placeholder: BLURRED, width: 700)
            }
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);

  const contactData = data.contentfulPages.blocks[9];
  const image = convertToBgImage(contactData.image.gatsbyImage);

  return (
    <section className="w-full bg-background relative min-h-[600px] mb-[1000px] sm:mb-[800px] lg:mb-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row  px-10 justify-between ">
        <div className="w-full lg:w-1/2 ">
          <div className="absolute block left-0 bg-red-50 w-full lg:w-1/2 h-full">
            <BackgroundImage className="h-full" {...image} fadeIn="soft">
              <div className="h-full"></div>
            </BackgroundImage>
          </div>
        </div>

        <div className="w-full lg:w-1/2  pl-0 lg:pl-10 py-20 lg:py-36 relative">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            {contactData?.subtitle}
          </h3>
          <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
            {contactData?.mainTitle}
          </h2>
          <ReactMarkdown className="text-neutral-500 mx-auto my-5 text-base leading-8">
            {contactData?.description.description}
          </ReactMarkdown>
          <Form submitButtonText="Send" inputBg="bg-background" />
          <svg
            className="absolute hidden lg:block top-0 -left-28 w-28 h-full z-10"
            width="100%"
            viewBox="0 0 100 700"
            preserveAspectRatio="none"
          >
            <polygon
              fill="#EBFCFA"
              points="0 700 100 700 100 0 100 0 0 700"
            ></polygon>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Contact;
