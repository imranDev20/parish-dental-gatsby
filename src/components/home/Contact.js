import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import QueriesForm from "../global/QueriesForm";
import { GatsbyImage } from "gatsby-plugin-image";

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
              gatsbyImage(
                placeholder: BLURRED
                width: 720
                breakpoints: [320, 480, 540, 720]
              )
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

  return (
    <section className="w-full bg-background relative min-h-[600px] mb-[600px] sm:mb-[800px] lg:mb-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row  px-10 justify-between ">
        <div className="w-full lg:w-1/2 ">
          <div className="absolute block left-0  w-full lg:w-1/2 h-full">
            <GatsbyImage
              image={contactData.image.gatsbyImage}
              className="h-2/4 sm:h-2/3 lg:h-full w-full"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2  pl-0 lg:pl-10 py-20 lg:py-36 relative">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            Contact Us
          </h3>
          <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
            Get In Touch
          </h2>
          <p className="text-gray-600 mx-auto my-5 text-base leading-8">
            Have a question or need more information? Feel free to reach out to
            us using the enquiries form below. Our team is here to assist you
            and provide prompt responses to your queries. We value your interest
            and look forward to hearing from you.
          </p>
          <QueriesForm />
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
