import React from "react";
import Layout from "../../components/global/Layout";
import PageHeader from "../../components/global/PageHeader";
import Services2 from "../../components/services/Services2";
import ContactPageForm from "../../components/ContactPageForm";

const ServicesPage = () => {
  return (
    <Layout>
      {/* <Seo title="Services" /> */}
      <PageHeader pageTitle="Services" />
      <Services2 />
      <ContactPageForm />
    </Layout>
  );
};

export default ServicesPage;
