import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      strapiPage {
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
          }
        }
      }
    }
  `);

  const testimonialData = data?.strapiPage?.blocks[4]?.testimonialBlock;

  console.log(testimonialData);

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="mb-20">
          <SectionHeader
            subTitle="Our dear clients"
            mainTitle="What People Say"
            description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
          />
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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

// <Swiper
//     modules={[]}
//     effect="fade"
//     spaceBetween={75}
//     loop
//     slidesPerView={1}
//     breakpoints={{
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     }}
//     // onSlideChange={() => console.log("slide change")}
//     // onSwiper={(swiper) => console.log(swiper)}
//     className="mt-10"
//   >
//     {testimonialData.map((testimonial) => (
//       <SwiperSlide
//         key={testimonial.strapi_id}
//         // Brought Card wrapper div styles here to avoid large dom
//         className="!max-h-[85vh] flex flex-col items-center"
//       >
//         <TestimonialCard testimonial={testimonial} />
//       </SwiperSlide>
//     ))}
//   </Swiper>
