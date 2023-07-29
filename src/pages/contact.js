import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactPageForm from "../components/ContactPageForm";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import Seo from "../components/global/Seo";

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact Parish Dental | Get in Touch 0113 263 8509"
        description="Have questions or want to book an appointment? Contact Parish Dental today. Our friendly staff is ready to assist you with any inquiries regarding dental care services."
      />
      <PageHeader pageTitle="Contact" />
      <ContactInfo />
      <ContactPageForm />
    </Layout>
  );
};

export default ContactPage;
