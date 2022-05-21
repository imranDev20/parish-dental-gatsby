import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
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
          modules={[]}
          effect="fade"
          spaceBetween={75}
          loop
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          className="mt-10"
        >
          {[0, 1, 2, 3, 4].map((n) => (
            <SwiperSlide
              key={n}
              // Brought Card wrapper div styles here to avoid large dom
              className="!max-h-[85vh] flex flex-col items-center"
            >
              <TestimonialCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
