import * as React from "react";
import Layout from "../components/global/Layout";
import Hero from "../components/home/Hero";
import Cta from "../components//home/Cta";
import HomeBanner from "../components/home/HomeBanner";
import Achievements from "../components/home/Achievements";
import Features from "../components/home/Features";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components//home/Contact";
import Blog from "../components/home/Blog";
import DynamicSeo from "../components/global/DynamicSeo";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Cta />
      <HomeBanner />
      <Features />
      <Services />
      <About />
      <Achievements />
      <Testimonials />
      <Contact />
      <Blog />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <DynamicSeo
    title="24 Hours Emergency Dentist in Leeds | Private Affordable Dentistry"
    description="Looking for 24 Hours Emergency Dentist in Leeds? Visit Parish
    Dental Today! We have more than 25 Years of Experience and offer same day
    treatment."
  />
);
