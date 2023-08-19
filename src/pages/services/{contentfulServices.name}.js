import React from "react";
import Layout from "../../components/global/Layout";
import { graphql } from "gatsby";
import { customSlugify } from "../../common/utils";
import FacialAesthetics from "../../components/services/FacialAesthetics";
import NotFoundPage from "../404";
import DomiciliaryCare from "../../components/services/DomiciliaryCare";
import Whitening from "../../components/services/Whitening/Whitening";
import Seo from "../../components/global/Seo";
import { GatsbyImage } from "gatsby-plugin-image";

const ServicesSinglePage = ({ data }) => {
  const { name, image, description } = data.contentfulServices;
  const slug = customSlugify(name);

  if (
    slug === "cosmetic" ||
    slug === "general-dentistry" ||
    slug === "clear-aligners"
  ) {
    return (
      <Layout>
        <Seo
          title={`${name} | Parish Dental`}
          description="Looking for Teeth Whitening Treatment in Leeds? Buy our latest teeth whitening strips and gels and secure a brilliantly radiant smile."
        />
        <section className="relative after:content[''] after:h-full after:w-full after:absolute after:left-0 after:top-0 after:bg-black/40">
          <GatsbyImage className="h-[60vh] " image={image.gatsbyImageData} />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl z-10 text-center">
            {name}
          </h1>
        </section>

        <section className="container mx-auto px-5 my-20 text-center text-gray-500 text-xl h-[30vh]">
          <p>{description.description}</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {slug === "aesthetics" ? <FacialAesthetics /> : <NotFoundPage />}
      {slug === "domiciliary-care" ? <DomiciliaryCare /> : <NotFoundPage />}
      {slug === "whitening" ? <Whitening /> : <NotFoundPage />}
      {slug === "emergency-dentistry" ? <Whitening /> : <NotFoundPage />}
    </Layout>
  );
};

export default ServicesSinglePage;

export const query = graphql`
  query ServicesSingleQuery($name: String!) {
    contentfulServices(name: { eq: $name }) {
      name
      image {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, height: 600)
      }
      description {
        description
      }
    }
  }
`;
