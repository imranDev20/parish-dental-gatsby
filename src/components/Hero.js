import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      strapiPage(title: { eq: "Home" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_HERO {
            slides {
              slideImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                alternativeText
              }
              subtitle
              titleFirstLine
              titleSecondLine
              strapi_id
            }
          }
        }
      }
    }
  `);

  const heroContents = data?.strapiPage?.blocks[0]?.slides;

  // const heroContents = [
  //   {
  //     id: 1,
  //     image:
  //       "https://images.unsplash.com/photo-1643224297379-54023dacf558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     text: {
  //       subtitle: "Dental Practice",
  //       title: {
  //         firstLine: "Stomatology experts ",
  //         secondLine: "available 24/7",
  //       },
  //     },
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     text: {
  //       subtitle: "Best in class",
  //       title: {
  //         firstLine: "Leading cosmetic",
  //         secondLine: "dentistry clinic",
  //       },
  //     },
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://images.unsplash.com/photo-1643224297379-54023dacf558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     text: {
  //       subtitle: "Quality matters",
  //       title: {
  //         firstLine: "Premium dental care for",
  //         secondLine: "every patients",
  //       },
  //     },
  //   },
  // ];

  return (
    <section>
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        spaceBetween={50}
        loop
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        // onSlideChange={() => setAnimate(true)}
        // onSwiper={(swiper) => console.log(swiper)}
        className="!max-h-[85vh]"
      >
        {heroContents.map((heroContent) => {
          const image = getImage(heroContent?.slideImage?.localFile);
          return (
            <SwiperSlide
              key={heroContent.strapi_id}
              className="!max-h-[85vh] relative "
            >
              {({ isActive }) => (
                <>
                  <GatsbyImage
                    imgClassName="w-full h-full object-cover"
                    className="w-full h-screen max-h-[700px]"
                    image={image}
                    alt={heroContent?.slideImage?.alternativeText}
                  />

                  <div className="max-w-2xl absolute top-1/2 -translate-y-1/2 left-[10%] -translate-x-[-10%] ">
                    <motion.h3
                      initial={{
                        opacity: 0,
                        x: -100,
                      }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -100,
                      }}
                      transition={{
                        type: "tween",
                        stiffness: 100,
                        duration: 0.7,
                      }}
                      className="tracking-[0.2em] uppercase bg-secondary text-white text-sm px-3 py-2 inline-block rounded"
                    >
                      {heroContent?.subtitle}
                    </motion.h3>
                    <div className="my-2">
                      <h2 className="text-6xl text-primary font-semibold capitalize">
                        <motion.span
                          initial={{
                            opacity: 0,
                            x: -100,
                          }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : -100,
                          }}
                          transition={{
                            type: "tween",
                            stiffness: 100,
                            duration: 0.7,
                            delay: 0.05,
                          }}
                          className="inline-block bg-white my-1 px-3 py-2 rounded "
                        >
                          {heroContent?.titleFirstLine}
                        </motion.span>
                        <motion.span
                          initial={{
                            opacity: 0,
                            x: -100,
                          }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : -100,
                          }}
                          transition={{
                            type: "tween",
                            stiffness: 100,
                            duration: 0.7,
                            delay: 0.1,
                          }}
                          className="bg-white inline-block my-1 px-3 py-2 rounded "
                        >
                          {heroContent?.titleSecondLine}
                        </motion.span>
                      </h2>
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;

// transition={{
//   type: "tween",
//   stiffness: 100,
//   duration: 0.5,
// }}
// animate={{
//   opacity: isActive ? 1 : 0,
//   position: "absolute",
// }}
