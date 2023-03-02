import React from "react";
import Faq from "../components/about/Faq";
import WhatWeDo from "../components/about/WhatWeDo";
import WhoWeAre from "../components/about/WhoWeAre";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import Seo from "../components/global/Seo";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <PageHeader pageTitle="About" />
      <WhoWeAre />
      <Faq />
      {/* <WhatWeDo /> */}
    </Layout>
  );
};

export default AboutPage;
