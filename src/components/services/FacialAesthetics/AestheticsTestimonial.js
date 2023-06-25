import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUserCircle } from "react-icons/fa";
import { Autoplay } from "swiper";

import { Rating } from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";

import "swiper/css";
import "swiper/css/autoplay";

const AestheticsTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      title: "Boosted Confidence",
      description:
        "Choosing Parish Dental for my Aesthetics treatment was undeniably the best decision I've made for myself. The moment I entered their clinic, I was greeted by a warm and welcoming atmosphere that instantly put me at ease. The team's professionalism, personalised approach, and commitment to excellence were evident throughout my entire journey. Parish Dental truly exceeded my expectations, leaving me with a refreshed and youthful appearance that has positively impacted my life.",

      name: "Charlotte Davis",
    },
    {
      id: 2,
      title: "Artistry and Expertise",
      description:
        "I am forever grateful to Parish Dental for their incredible artistry and expertise in Aesthetics. Their talented team possesses an eye for detail and an exceptional understanding of Aesthetics. Through their skilled hands, I witnessed the transformation of my features into a harmonious and natural-looking appearance. I highly recommend Parish Dental for their unparalleled craftsmanship and dedication to delivering outstanding results.",
      name: "Lily Clarke",
    },
    {
      id: 3,
      title: "Best Decision Ever",
      description:
        "Parish Dental has given me a new lease on life with their exceptional Aesthetics services. From the moment I stepped into their clinic, I felt welcomed and supported. The team's professionalism and attention to detail in understanding my unique needs truly boosted my confidence.I can now confidently face the world with a renewed sense of self- assurance, thanks to Parish Dental",
      name: "Ella Mitchell",
    },
  ];

  return (
    <section className="mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pr-5">
          <StaticImage
            layout="fullWidth"
            src="../../../images/testimonial-aesthetics.jpeg"
          />
        </div>
        <div className="mt-10 lg:mt-0  lg:max-w-[660px] md:max-w pr-10 pl-5 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-12">What Our Clients Say</h2>

          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {testimonials.map((item) => (
                <SwiperSlide>
                  <Rating value={5} readonly className="mb-3" />
                  <p className="leading-8 text-gray-400 text-lg">
                    {item.description}
                  </p>

                  <div className="flex items-center mt-6 ">
                    <FaUserCircle className="text-3xl mr-3" />
                    <p className=" text-secondary text-xl font-medium">
                      {item.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AestheticsTestimonial;
