import * as React from "react";
import Layout from "../components/Layout";
import loadable from "@loadable/component";
import Hero from "../components/Hero";
import SpecialistsTabs from "../components/SpecialistsTabs";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import CallToAction from "../components/CallToAction";
import Seo from "../components/Seo";
const About = loadable(() => import("../components/About"));
const Features = loadable(() => import("../components/Features"));
const Services = loadable(() => import("../components/Services"));

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
