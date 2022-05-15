import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <PageHeader pageTitle="About" />
      <WhoWeAre />
      <WhyChooseUs />
      <WhatWeDo />
    </Layout>
  );
};

export default AboutPage;
