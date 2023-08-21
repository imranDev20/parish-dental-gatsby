import React, { Fragment, useContext, useEffect, useState } from "react";
import { CarouselContext, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import {
  BsFillCalendar2CheckFill,
  BsFillCalendarDateFill,
  BsExclamationCircleFill,
} from "react-icons/bs";
import MyModal from "./MyDialog";
import { Button } from "@material-tailwind/react";

function HeroSlide({ heroContent, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const image = heroContent?.slideImage?.gatsbyImageData;

  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  const isActive = currentSlide === index;

  const titleTextArray = heroContent?.slideTitle?.split(" ");
  const half = Math.ceil(titleTextArray?.length / 2);
  const firstHalf = titleTextArray?.splice(0, half);

  const secondHalf = titleTextArray?.splice(-half);

  return (
    <>
      <Slide
        index={index}
        className="h-[calc(100vh-150px)] min-h-[600px]"
        classNameHidden="hide"
        classNameVisible="show"
      >
        <GatsbyImage
          className="h-[calc(100vh-100px)] min-h-[600px]"
          image={image}
          alt={heroContent.slideTitle}
        />

        <div className="max-w-sm sm:max-w-lg md:max-w-2xl absolute top-1/2 -translate-y-1/2 left-0 lg:left-[10%] -translate-x-[-10%] ">
          <motion.h3
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : -100,
            }}
            transition={{
              type: "tween",
              stiffness: 100,
              duration: 0.7,
            }}
            className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded"
          >
            {heroContent?.slideSubtitle}
          </motion.h3>

          <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
            <motion.span
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -100,
              }}
              transition={{
                type: "tween",
                stiffness: 100,
                duration: 0.7,
                delay: 0.05,
              }}
              className="inline-block bg-white my-1 px-3 py-2 rounded"
            >
              {firstHalf?.map((word, i) => (
                <Fragment key={i}>{word} </Fragment>
              ))}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -100,
              }}
              transition={{
                type: "tween",
                stiffness: 100,
                duration: 0.7,
                delay: 0.1,
              }}
              className="bg-white inline-block my-1 px-3 py-2 rounded "
            >
              {secondHalf?.map((word, i) => (
                <Fragment key={i}>{word} </Fragment>
              ))}
            </motion.span>
          </h2>

          {index === 2 ? (
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -100,
              }}
              transition={{
                type: "tween",
                stiffness: 100,
                duration: 0.7,
                delay: 0.12,
              }}
            >
              <Link to="/services/aesthetics">
                <Button
                  className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                  variant="filled"
                  size="lg"
                >
                  <BsExclamationCircleFill className="mr-3 text-lg" />
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ) : null}

          {index === 1 ? (
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -100,
              }}
              transition={{
                type: "tween",
                stiffness: 100,
                duration: 0.7,
                delay: 0.12,
              }}
            >
              <a
                href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
                target="_blank"
              >
                <Button
                  className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                  variant="filled"
                  size="lg"
                >
                  <BsFillCalendar2CheckFill className="mr-3 text-lg" />
                  Book - £35
                </Button>
              </a>
            </motion.div>
          ) : null}

          {index === 0 ? (
            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -100,
              }}
              transition={{
                type: "tween",
                stiffness: 100,
                duration: 0.7,
                delay: 0.12,
              }}
            >
              <Button
                className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                variant="filled"
                size="lg"
              >
                <BsFillCalendarDateFill className="mr-3 text-lg" />
                Appointment
              </Button>
            </motion.div>
          ) : null}
        </div>
      </Slide>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
export default HeroSlide;
