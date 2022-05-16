import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactPageForm from "../components/ContactPageForm";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <PageHeader pageTitle="Contact" />

      <ContactInfo />
      <ContactPageForm />
    </Layout>
  );
};

export default ContactPage;
