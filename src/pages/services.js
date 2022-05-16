import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import Services2 from "../components/Services2";

const ServicesPage = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <PageHeader pageTitle="Services" />
      <Services2 />
    </Layout>
  );
};

export default ServicesPage;
