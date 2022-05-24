import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import loadable from "@loadable/component";
import Services2 from "../components/Services2";
const ContactPageForm = loadable(() => import("../components/ContactPageForm"));

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
