import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactPageForm from "../components/ContactPageForm";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import Seo from "../components/global/Seo";

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
