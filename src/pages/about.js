import React from "react";
import loadable from "@loadable/component";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import Seo from "../components/global/Seo";

const Faq = loadable(() => import("../components/about/Faq"));
const WhoWeAre = loadable(() => import("../components/about/WhoWeAre"));

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <PageHeader pageTitle="About" />
      <WhoWeAre />
      <Faq />
    </Layout>
  );
};

export default AboutPage;
