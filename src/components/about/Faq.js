import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Faq() {
  const data = useStaticQuery(graphql`
    query FaqQuery {
      allContentfulFaq(sort: { order: ASC, fields: faqId }) {
        nodes {
          title
          faqId
          description {
            description
          }
        }
      }

      contentfulPages(title: { eq: "About" }) {
        blocks {
          ... on ContentfulSections {
            id
            subtitle
            mainTitle
            description {
              description
            }
            image {
              gatsbyImage(
                placeholder: BLURRED
                width: 600
                cropFocus: CENTER
                aspectRatio: 1.2
              )
            }
          }
        }
      }
    }
  `);

  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = data?.allContentfulFaq?.nodes;

  const section = data?.contentfulPages.blocks[2];

  return (
    <section className="container mx-auto px-10 flex flex-col lg:flex-row mb-20">
      <div className="w-full lg:w-1/2 bg-white mb-5">
        <h2 className="text-4xl text-primary font-semibold mb-5 mt-2">
          {section.mainTitle}
        </h2>
        {/* <p className="text-gray-600 mx-auto my-5 text-base leading-8">
          {section.description.description}
        </p> */}
        {faqs.map((faq, index) => (
          <Accordion
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(index + 1)}>
              {faq.title}
            </AccordionHeader>
            <AccordionBody>
              <ReactMarkdown className="text-gray-600 font-normal mx-auto py-3  text-base leading-8">
                {faq.description.description}
              </ReactMarkdown>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
      <div className="w-full lg:w-1/2 px-0 lg:px-5 ">
        <GatsbyImage
          imgClassName="rounded"
          image={data?.contentfulPages.blocks[2].image.gatsbyImage}
          alt="Faq Image"
        />
      </div>
    </section>
  );
}
