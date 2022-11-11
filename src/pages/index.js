import * as React from "react";
import Layout from "../components/Layout";
import loadable from "@loadable/component";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
// const Hero = loadable(() => import("../components/Hero"));
const Features = loadable(() => import("../components/Features"));
const About = loadable(() => import("../components/About"));
const Services = loadable(() => import("../components/Services"));
const Testimonials = loadable(() => import("../components/Testimonials"));
const Contact = loadable(() => import("../components/Contact"));
const Blog = loadable(() => import("../components/Blog"));
const CallToAction = loadable(() => import("../components/CallToAction"));

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <Hero />
      <Features />
      <Services />
      <About />
      <Testimonials />
      <CallToAction bgColor="bg-primary" />
      {/* <SpecialistsTabs /> */}
      {/* <Team /> */}
      <Contact />
      <Blog />
    </Layout>
  );
};

export default IndexPage;
