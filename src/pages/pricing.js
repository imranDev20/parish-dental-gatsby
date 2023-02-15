import React from "react";
import Layout from "../components/global/Layout";
import Seo from "../components/global/Seo";
import PageHeader from "../components/global/PageHeader";
import NhsCharges from "../components/pricing/NhsCharges";
import PrivateFees from "../components/pricing/PrivateFees";

const PricingPage = () => {
  return (
    <Layout>
      <Seo title="Pricing" />
      <PageHeader pageTitle="Pricing" />
      <NhsCharges />
      <PrivateFees />
    </Layout>
  );
};

export default PricingPage;
