import * as React from "react";
import Layout from "../components/Layout";
import loadable from "@loadable/component";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
const About = loadable(() => import("../components/About"));
const Features = loadable(() => import("../components/Features"));
const Services = loadable(() => import("../components/Services"));
const SpecialistsTabs = loadable(() => import("../components/SpecialistsTabs"));
const Testimonials = loadable(() => import("../components/Testimonials"));
const Team = loadable(() => import("../components/Team"));
const Contact = loadable(() => import("../components/Contact"));
const Blog = loadable(() => import("../components/Blog"));
const CallToAction = loadable(() => import("../components/CallToAction"));

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
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
