import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionHeader from "../global/SectionHeader";
import TestimonialCard from "./TestimonialCard";
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
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../../styles/emergency-reviews.css";

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

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      contentfulPages(title: { eq: "Home" }) {
        id
        contentful_id
        blocks {
          ... on ContentfulReviews {
            id
            description {
              description
            }
            title
            rating
            contentful_id
          }
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);

  const headerData = data?.contentfulPages?.blocks[4];
  const testimonialData = data?.contentfulPages.blocks.slice(5, 9);

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="mb-16">
          <SectionHeader
            subTitle={headerData?.subtitle}
            mainTitle={headerData.mainTitle}
          />
        </div>

        <CarouselProvider
          // isPlaying={true}
          // interval={5000}
          className="emergency-reviews relative"
          visibleSlides={1}
          naturalSlideWidth={100}
          totalSlides={testimonialData.length}
        >
          <Slider className="mx-0 lg:mx-10">
            {testimonialData.map((review, index) => (
              <Slide className="min-h-[370px]" index={index}>
                <Card
                  shadow={false}
                  color="transparent"
                  className="p-8 h-full w-full max-w-[600px] mx-auto "
                >
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0"
                  >
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="text-center mb-3">
                        <Typography variant="h5" color="blue-gray ">
                          {review.title}
                        </Typography>
                      </div>
                      <div className="5 flex items-center gap-0 justify-center">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="p-0 mt-3 text-center">
                    <Typography className="text-gray-600 mx-auto mt-5 text-base leading-8 font-normal">
                      "{review.description.description}"
                    </Typography>
                  </CardBody>
                </Card>
              </Slide>
            ))}
          </Slider>

          <div className="w-full absolute top-1/2 -translate-y-1/2 hidden lg:flex justify-between">
            <ButtonBack>
              <IconButton>
                <HiChevronLeft className="text-lg" strokeWidth={1} />
              </IconButton>
            </ButtonBack>
            <ButtonNext>
              <IconButton>
                <HiChevronRight className="text-lg" strokeWidth={1} />
              </IconButton>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </section>
  );
};

export default Testimonials;
