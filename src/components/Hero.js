import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  const swiper = useSwiper();

  useEffect(() => {}, []);

  const heroContents = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1643224297379-54023dacf558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      text: {
        subtitle: "Dental Practice",
        title: {
          firstLine: "Stomatology experts ",
          secondLine: "available 24/7",
        },
      },
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      text: {
        subtitle: "Best in class",
        title: {
          firstLine: "Leading cosmetic",
          secondLine: "dentistry clinic",
        },
      },
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1643224297379-54023dacf558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      text: {
        subtitle: "Quality matters",
        title: {
          firstLine: "Premium dental care for",
          secondLine: "every patients",
        },
      },
    },
  ];
  return (
    <section>
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={50}
        loop
        slidesPerView={1}
        onSlideChange={() => console.log("changed")}
        onSwiper={(swiper) => console.log("swiper initiated")}
        className="!max-h-[85vh]"
      >
        {heroContents.map((heroContent) => (
          <SwiperSlide className="!max-h-[85vh] relative">
            <img
              src={heroContent.image}
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute top-1/2 left-[15%] transform -translate-x-[15%] -translate-y-1/2 max-w-2xl">
              <h3 className="tracking-widest uppercase bg-secondary text-white text-sm px-3 py-2 inline-block rounded">
                {heroContent.text.subtitle}
              </h3>
              <div className="my-2">
                <h2 className="text-6xl text-primary font-semibold capitalize">
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded ">
                    {heroContent.text.title.firstLine}
                  </span>
                  <span className="bg-white inline-block my-1 px-3 py-2 rounded ">
                    {heroContent.text.title.secondLine}
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
