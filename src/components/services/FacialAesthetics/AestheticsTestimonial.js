import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Rating } from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
          <h2 className="text-4xl font-semibold mb-8">What Our Clients Say</h2>

          <div className="w-full">
            <CarouselProvider
              // isPlaying={true}
              // interval={5000}
              className="emergency-reviews relative"
              visibleSlides={1}
              naturalSlideWidth={100}
              totalSlides={testimonials.length}
            >
              <Slider className="mx-0">
                {testimonials.map((review, index) => (
                  <Slide className="min-h-[400px]" index={index}>
                    <Card
                      shadow={false}
                      color="transparent"
                      className="h-full w-full "
                    >
                      <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0"
                      >
                        <div className="flex w-full flex-col gap-0.5">
                          <div className="mb-3">
                            <Typography variant="h5" color="white">
                              {review.title}
                            </Typography>
                          </div>
                          <div className="5 flex items-center gap-0">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody className="p-0 mt-3">
                        <Typography className="text-gray-400 mx-auto mt-5 text-base leading-8 font-normal">
                          "{review.description}"
                        </Typography>

                        <Typography className="text-secondary text-xl font-medium mt-3">
                          {review.name}
                        </Typography>
                      </CardBody>
                    </Card>
                  </Slide>
                ))}
              </Slider>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AestheticsTestimonial;
