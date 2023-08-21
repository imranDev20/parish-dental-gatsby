import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../../../styles/emergency-reviews.css";
import { useMediaQuery } from "react-responsive";

const reviews = [
  {
    id: 1,
    name: "John Bakken",
    desc: "Called for an emergency appointment, was seen within 2hrs and had my tooth out. Very efficient service.",
  },
  {
    id: 2,
    name: "Andrea Velle",
    desc: "Dentist was great, explained the treatment and carried out the treatment pain free.",
  },
  {
    id: 3,
    name: "Elle Aasen",
    desc: "I rang at 10pm, was seen at 11pm had a broken tooth. My tooth was fixed within 30 minutes and now I am pain free!",
  },
  {
    id: 4,
    name: "Isa Holmgren",
    desc: "Had an appointment on Sunday evening. I had a very bad toothache. The dentist was very gently and reassuring",
  },
  {
    id: 5,
    name: "Sarah Davis",
    desc: "Lovely practice. Was clean and receptionist was very welcoming.",
  },
];

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

function EmergencyReviews() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1208px)",
  });
  const isTablet = useMediaQuery({ query: "(min-device-width: 768px)" });

  const slideCount = isDesktop ? 3 : isTablet ? 2 : 1;

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-10">
        <Typography variant="h2" className="text-center font-bold mb-16">
          What Patients Say About Us
        </Typography>

        <CarouselProvider
          // isPlaying={true}
          // interval={5000}
          className="emergency-reviews relative"
          visibleSlides={slideCount}
          naturalSlideWidth={100}
          totalSlides={reviews.length}
        >
          <Slider className="mx-0 lg:mx-10">
            {reviews.map((review, index) => (
              <Slide className="min-h-[370px]" index={index}>
                <Card className="p-8 h-full w-full">
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0"
                  >
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                          {review.name}
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
                    <Typography className="text-gray-600 mx-auto mt-5 text-base leading-8 font-normal">
                      "{review.desc}"
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

          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <DotGroup className="flex flex-row items-center" />
          </div> */}
        </CarouselProvider>
      </div>
    </section>
  );
}
export default EmergencyReviews;
