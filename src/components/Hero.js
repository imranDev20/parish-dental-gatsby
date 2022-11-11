import React, { Fragment, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import { GatsbyImage } from "gatsby-plugin-image";
import { AnimatePresence, motion } from "framer-motion";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "./Modal";
import Form from "./Form";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  const data = useStaticQuery(graphql`
    query HeroQuery {
      contentfulPages(title: { eq: "Home" }) {
        id
        blocks {
          ... on ContentfulHero {
            id
            slideTitle
            slideSubtitle
            contentful_id
            slideImage {
              title
              gatsbyImageData(
                placeholder: BLURRED
                layout: FULL_WIDTH
                width: 1500
              )
            }
          }
        }
      }
    }
  `);

  const heroContents = data?.contentfulPages?.blocks.slice(0, 2);

  console.log(heroContents);

  return (
    <>
      <section className="w-full">
        {data ? (
          <Swiper
            modules={[EffectFade, Navigation, Pagination]}
            effect="fade"
            spaceBetween={50}
            touchRatio={0}
            autoplay
            initialSlide={0}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            className="hero-carousel min-h-[500px]"
          >
            {heroContents?.map((heroContent, index) => {
              const image = heroContent?.slideImage?.gatsbyImageData;
              const titleTextArray = heroContent?.slideTitle?.split(" ");
              const half = Math.ceil(titleTextArray?.length / 2);
              const firstHalf = titleTextArray?.splice(0, half);
              const secondHalf = titleTextArray?.splice(-half);

              console.log(image);

              return (
                <SwiperSlide
                  key={heroContent?.contentful_id}
                  className="relative"
                >
                  {({ isActive }) => (
                    // Additonal styles in global.css
                    <>
                      <GatsbyImage
                        image={image}
                        loading="eager"
                        className="h-[90vh] min-h-[500px] w-full"
                        imgClassName="w-full h-full object-cover"
                        alt={heroContent?.slideImage?.title}
                      />
                      <div className="max-w-sm sm:max-w-lg md:max-w-2xl absolute top-1/2 -translate-y-1/2 left-0 lg:left-[10%] -translate-x-[-10%] ">
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
                          className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded"
                        >
                          {heroContent?.slideSubtitle}
                        </motion.h3>

                        <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
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
                            className="inline-block bg-white my-1 px-3 py-2 rounded"
                          >
                            {firstHalf?.map((word, i) => (
                              <Fragment key={i}>{word} </Fragment>
                            ))}
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
                            {secondHalf?.map((word, i) => (
                              <Fragment key={i}>{word} </Fragment>
                            ))}
                          </motion.span>
                        </h2>

                        {index === 1 ? (
                          <Link to="/pricing">
                            <motion.div
                              onClick={() => (modalOpen ? close() : open())}
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
                                delay: 0.12,
                              }}
                              className="tracking-[0.2em] uppercase text-xs font-medium rounded inline-block bg-primary hover:bg-secondary px-4 py-4 text-white  mt-4 transition-colors"
                            >
                              See Prices
                            </motion.div>
                          </Link>
                        ) : null}

                        {index === 0 ? (
                          <motion.button
                            onClick={() => (modalOpen ? close() : open())}
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
                              delay: 0.12,
                            }}
                            className="tracking-[0.2em] uppercase text-xs font-medium rounded inline-block bg-primary hover:bg-secondary px-4 py-4 text-white  mt-4 transition-colors"
                          >
                            Appointment
                          </motion.button>
                        ) : null}
                      </div>
                    </>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
      </section>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            title="Request an appointment!!!"
          >
            <Form />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
