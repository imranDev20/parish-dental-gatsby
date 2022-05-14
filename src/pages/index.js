import * as React from "react";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";
import SpecialistsTabs from "../components/SpecialistsTabs";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import CallToAction from "../components/CallToAction";
import Seo from "../components/Seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <Features />
      <Services />
      <About />
      <Testimonials />
      <CallToAction />
      <SpecialistsTabs />
      <Team />
      <Contact />
      <Blog />
    </Layout>
  );
};

export default IndexPage;
