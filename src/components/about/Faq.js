import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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

  const faqs = data?.allContentfulFaq?.nodes;

  const section = data?.contentfulPages.blocks[2];

  return (
    <section className="container mx-auto px-10 flex flex-col lg:flex-row mb-20">
      <div className="w-full lg:w-1/2 bg-white mb-5">
        <h2 className="text-4xl text-primary font-semibold mb-5 mt-2">
          {section.mainTitle}
        </h2>
        {/* <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
          {section.description.description}
        </p> */}
        {faqs.map((faq, index) => (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${index === 0 ? "rounded-t" : "rounded-none"} ${
                    index === faqs.length - 1 && !open
                      ? "rounded-b"
                      : "rounded-none"
                  } flex w-full justify-between  bg-secondary px-4  text-left text-sm font-medium text-white hover:bg-secondary focus:outline-none focus-visible:ring focus-visible:bg-secondary focus-visible:ring-opacity-75 py-4 border-b border-b-[#ff80c0]`}
                >
                  <span>{faq.title}</span>
                  <FiChevronDown
                    className={`text-white ${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500 transition-all`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-sm text-gray-500 bg-background">
                  <ReactMarkdown className="text-neutral-500 mx-auto py-3  text-base leading-8">
                    {faq.description.description}
                  </ReactMarkdown>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
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
