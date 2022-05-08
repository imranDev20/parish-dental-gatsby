import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="my-36">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            subTitle="Our dear clients"
            mainTitle="What People Say"
            description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
          />
        </div>
        <Swiper
          modules={[]}
          effect="fade"
          spaceBetween={75}
          loop
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mt-10"
        >
          {[0, 1, 2, 3, 4].map((n) => (
            <SwiperSlide key={n} className="!max-h-[85vh]">
              <TestimonialCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
