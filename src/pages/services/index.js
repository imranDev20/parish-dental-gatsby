import React from "react";
import Layout from "../../components/global/Layout";
import PageHeader from "../../components/global/PageHeader";
import Seo from "../../components/global/Seo";
import loadable from "@loadable/component";
import Services2 from "../../components/services/Services2";
const ContactPageForm = loadable(() =>
  import("../../components/ContactPageForm")
);

const ServicesPage = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <PageHeader pageTitle="Services" />
      <Services2 />
      <ContactPageForm />
    </Layout>
  );
};

export default ServicesPage;
