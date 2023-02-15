import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../global/SectionHeader";
import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      contentfulPages(title: { eq: "Home" }) {
        id
        contentful_id
        blocks {
          ... on ContentfulReviews {
            id
            description {
              description
            }
            title
            rating
            contentful_id
          }
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);

  const headerData = data?.contentfulPages?.blocks[4];
  const testimonialData = data?.contentfulPages.blocks.slice(5, 9);

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="mb-20">
          <SectionHeader
            subTitle={headerData?.subtitle}
            mainTitle={headerData.mainTitle}
          />
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          modules={[Pagination, Autoplay]}
          className="reviews-carousel"
          pagination={{ clickable: true }}
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide
              key={testimonial?.contentful_id}
              className="flex flex-col items-center"
            >
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
