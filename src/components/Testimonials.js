import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      strapiPage(strapi_id: { eq: 1 }) {
        blocks {
          ... on STRAPI__COMPONENT_HOME_TESTIMONIAL {
            id
            testimonialBlock {
              testimonialAvatar {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              testimonialName
              testimonialText
              testimonialTitle
              strapi_id
            }
            testimonialHeader {
              headerSubtitle
              headerText
              headerTitle
            }
          }
        }
      }
    }
  `);

  const testimonialData = data?.strapiPage?.blocks[4]?.testimonialBlock;
  const testimonialHeader = data?.strapiPage?.blocks[4]?.testimonialHeader;

  console.log(testimonialHeader);

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="mb-20">
          <SectionHeader
            subTitle={testimonialHeader?.headerSubtitle}
            mainTitle={testimonialHeader?.headerTitle}
            description={testimonialHeader?.headerText}
          />
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide
              key={testimonial?.strapi_id}
              className="!max-h-[85vh] flex flex-col items-center"
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
