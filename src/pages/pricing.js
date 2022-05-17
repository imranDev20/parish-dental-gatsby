import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import NhsCharges from "../components/NhsCharges";
import PersonalFees from "../components/PersonalFees";

const PricingPage = () => {
  return (
    <Layout>
      <Seo title="Pricing" />
      <PageHeader pageTitle="Pricing" />
      <NhsCharges />
      <PersonalFees />
    </Layout>
  );
};

export default PricingPage;
