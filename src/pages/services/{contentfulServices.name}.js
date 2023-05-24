import React from "react";
import Layout from "../../components/global/Layout";
import { graphql } from "gatsby";
import { customSlugify } from "../../common/utils";
import FacialAesthetics from "../../components/services/FacialAesthetics";
import NotFoundPage from "../404";
import DomiciliaryCare from "../../components/services/DomiciliaryCare";

const ServicesSinglePage = ({ data }) => {
  const { name } = data.contentfulServices;
  const slug = customSlugify(name);

  return (
    <Layout>
      {slug === "facial-aesthetics" ? <FacialAesthetics /> : <NotFoundPage />}
      {slug === "domiciliary-care" ? <DomiciliaryCare /> : <NotFoundPage />}
    </Layout>
  );
};

export default ServicesSinglePage;

export const query = graphql`
  query ServicesSingleQuery($name: String!) {
    contentfulServices(name: { eq: $name }) {
      name
    }
  }
`;
