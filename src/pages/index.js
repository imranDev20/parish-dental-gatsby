import * as React from "react";
import loadable from "@loadable/component";
import Layout from "../components/global/Layout";
import Seo from "../components/global/Seo";
import Hero from "../components/home/Hero";
import HomeBanner from "../components/home/HomeBanner";

// import Achievements from "../components/home/Achievements";
// import Features from "../components/home/Features";
// import About from "../components/home/About";
// import Services from "../components/home/Services";
// import Testimonials from "../components/home/Testimonials";
// import Contact from "../components//home/Contact";
// import Cta from "../components//home/Cta";
// import Blog from "../components/home/Blog";

const Achievements = loadable(() => import("../components/home/Achievements"), {
  fallback: <div>Loading...</div>,
});
const Features = loadable(() => import("../components/home/Features"), {
  fallback: <div>Loading...</div>,
});
const About = loadable(() => import("../components/home/About"), {
  fallback: <div>Loading...</div>,
});
const Services = loadable(() => import("../components/home/Services"), {
  fallback: <div>Loading...</div>,
});
const Testimonials = loadable(() => import("../components/home/Testimonials"), {
  fallback: <div>Loading...</div>,
});
const Contact = loadable(() => import("../components//home/Contact"), {
  fallback: <div>Loading...</div>,
});
const Cta = loadable(() => import("../components//home/Cta"), {
  fallback: <div>Loading...</div>,
});
const Blog = loadable(() => import("../components/home/Blog"), {
  fallback: <div>Loading...</div>,
});

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="24 Hours Emergency Dentist in Leeds | Private Affordable Dentistry"
        description="Looking for 24 Hours Emergency Dentist in Leeds? Visit Parish Dental Today! We have more than 25 Years of Experience and offer same day treatment."
      />
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
      {/* <Message /> */}
    </Layout>
  );
};

export default IndexPage;
