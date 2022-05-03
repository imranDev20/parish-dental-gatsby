import * as React from "react";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Specialist from "../components/Specialist";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Services />
      <About />
      <Testimonials />
      <Specialist />
      <Team />
      <Contact />
      <Blog />
    </Layout>
  );
};

export default IndexPage;
