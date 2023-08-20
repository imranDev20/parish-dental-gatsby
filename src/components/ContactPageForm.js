import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { StaticImage } from "gatsby-plugin-image";
import QueriesForm from "./global/QueriesForm";

const ContactPageForm = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageContactQuery {
      contentfulPages(title: { eq: "Services" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
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

  const contactData = data?.contentfulPages.blocks[3];
  return (
    <section className="container mx-auto px-10 flex flex-col lg:flex-row items-center my-24">
      <div className="w-full lg:w-1/2 lg:p-10">
        <StaticImage
          src="../images/contact-page-image.jpg"
          alt="Contact Image"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:p-10 mt-16 lg:mt-0">
        <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
          Contact Us
        </h3>
        <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
          {contactData?.subtitle}
        </h2>
        <ReactMarkdown className="text-gray-600 mx-auto my-5 text-base leading-8">
          {contactData?.description?.description}
        </ReactMarkdown>
        <QueriesForm inputBg="bg-white" />
      </div>
    </section>
  );
};

export default ContactPageForm;
