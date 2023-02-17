import * as React from "react";
import Layout from "../components/global/Layout";
import loadable from "@loadable/component";
import Seo from "../components/global/Seo";
import Hero from "../components/home/Hero";
import Message from "../components/Message";
import Achievements from "../components/home/Achievements";
import MyModal from "../components/home/MyDialog";
const Features = loadable(() => import("../components/home/Features"));
const About = loadable(() => import("../components/home/About"));
const Services = loadable(() => import("../components/home/Services"));
const Testimonials = loadable(() => import("../components/home/Testimonials"));
const Contact = loadable(() => import("../components//home/Contact"));
const Blog = loadable(() => import("../components/home/Blog"));

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
      <Achievements />
      <Testimonials />
      <Contact />

      <Blog />
      {/* <Message /> */}
    </Layout>
  );
};

export default IndexPage;
