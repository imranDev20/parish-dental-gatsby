import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import TestimonialCard from "../home/TestimonialCard";

const AestheticsPageTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      title: "Radiant Transformation",
      description:
        "I can't express enough how delighted I am with the incredible transformation Parish Dental has brought to my appearance. Their facial aesthetics treatment has truly rejuvenated my skin and brought out a radiant glow I never thought possible. The expertise and care provided by their skilled team have surpassed all my expectations.",
      rating: 5,
    },
    {
      id: 2,
      title: "Boosted Confidence",
      description:
        "Parish Dental has given me a new lease on life with their exceptional facial aesthetics services. From the moment I stepped into their clinic, I felt welcomed and supported. The team's professionalism and attention to detail in understanding my unique needs truly boosted my confidence. I can now confidently face the world with a renewed sense of self-assurance, thanks to Parish Dental.",
      rating: 5,
    },
    {
      id: 3,
      title: "Artistry and Expertise",
      description:
        "I am forever grateful to Parish Dental for their incredible artistry and expertise in facial aesthetics. Their talented team possesses an eye for detail and an exceptional understanding of facial aesthetics. Through their skilled hands, I witnessed the transformation of my features into a harmonious and natural-looking appearance. I highly recommend Parish Dental for their unparalleled craftsmanship and dedication to delivering outstanding results.",
      rating: 5,
    },
    {
      id: 4,
      title: "Best Decision Ever",
      description:
        "Choosing Parish Dental for my facial aesthetics treatment was undeniably the best decision I've made for myself. The moment I entered their clinic, I was greeted by a warm and welcoming atmosphere that instantly put me at ease. The team's professionalism, personalized approach, and commitment to excellence were evident throughout my entire journey. Parish Dental truly exceeded my expectations, leaving me with a refreshed and youthful appearance that has positively impacted my life.",
      rating: 5,
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      modules={[Pagination, Autoplay]}
      className="reviews-carousel"
      pagination={{ clickable: true }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide
          key={testimonial?.id}
          className="flex flex-col items-center"
        >
          <TestimonialCard testimonial={testimonial} white />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AestheticsPageTestimonial;
