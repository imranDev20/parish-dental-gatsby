import React from "react";
import Layout from "../../components/global/Layout";
import PageHeader from "../../components/global/PageHeader";
import Services2 from "../../components/services/Services2";
import ContactPageForm from "../../components/ContactPageForm";
import DynamicSeo from "../../components/global/DynamicSeo";

const ServicesPage = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Services" />
      <Services2 />
      <ContactPageForm />
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <DynamicSeo
    title="Comprehensive Services for Your Dental Needs at Parish Dental Practice"
    description="Explore a range of dental services at Parish Dental Practice. From general dentistry to cosmetic treatments, our skilled team is dedicated to providing excellent care. Discover how we can meet your oral health needs today."
  />
);
