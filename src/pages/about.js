import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import Seo from "../components/global/Seo";
import loadable from "@loadable/component";

const Faq = loadable(() => import("../components/about/Faq"), {
  fallback: <div>Loading...</div>,
});
const WhoWeAre = loadable(() => import("../components/about/WhoWeAre"), {
  fallback: <div>Loading...</div>,
});
// import Faq from "../components/about/Faq";
// import WhoWeAre from "../components/about/WhoWeAre";

const AboutPage = () => {
  return (
    <Layout>
      <Seo
        title="Get to Know More About Parish Dental | Who We Are"
        description="Get to know more about Parish Dental in the Leeds. Our team of dentists is committed to delivering high-quality dental services at affordable prices. Discover more about us!"
      />
      <PageHeader pageTitle="About" />
      <WhoWeAre />
      <Faq />
    </Layout>
  );
};

export default AboutPage;
