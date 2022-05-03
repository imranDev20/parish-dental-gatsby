import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={50}
        loop
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="!max-h-[85vh]"
      >
        <SwiperSlide className="!max-h-[85vh]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1643224297379-54023dacf558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="!max-h-[85vh]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="!max-h-[85vh]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="!max-h-[85vh]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
