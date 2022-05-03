import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="my-20">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <h3 className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm">
            Our dear clients
          </h3>
          <h2 className="text-center text-5xl my-2 capitalize font-semibold text-primary">
            What people say
          </h2>
          <p className="text-gray-500 font-light max-w-4xl text-center mx-auto my-5 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            dolor fuga, facere esse sint ullam assumenda. Minima tempora dolorum
            iure!
          </p>
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
