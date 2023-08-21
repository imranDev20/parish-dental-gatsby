import React from "react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useStaticQuery, graphql } from "gatsby";
import HeroSlide from "./HeroSlide";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Hero = () => {
  const { heroes } = useStaticQuery(graphql`
    query HeroQuery {
      heroes: allContentfulHero(sort: { fields: createdAt, order: ASC }) {
        nodes {
          id
          slideTitle
          slideSubtitle
          contentful_id
          slideImage {
            title
            gatsbyImageData(
              placeholder: BLURRED
              width: 1920
              breakpoints: [540, 720, 1366, 1920]
            )
          }
        }
      }
    }
  `);

  const heroContents = heroes.nodes;

  return (
    <>
      <section className="w-full">
        <CarouselProvider
          // isPlaying={true}
          // interval={5000}
          dragEnabled={false}
          naturalSlideWidth={100}
          totalSlides={3}
          className="relative hero-carousel"
        >
          <Slider classNameAnimation="fade-animation">
            {heroContents.map((heroContent, index) => {
              return (
                <HeroSlide
                  key={heroContent.id}
                  heroContent={heroContent}
                  index={index}
                />
              );
            })}
          </Slider>

          <div className="absolute top-1/2 -translate-y-1/2 justify-between w-full hidden lg:flex mx-auto ">
            <ButtonBack className="ml-10 bg-white text-primary p-3 rounded disabled:opacity-50 hover:bg-secondary hover:text-white transition-colors">
              <HiChevronLeft className="text-lg" strokeWidth={1} />
            </ButtonBack>
            <ButtonNext className="mr-10 bg-white text-primary p-3 rounded disabled:opacity-50 hover:bg-secondary hover:text-white transition-colors">
              <HiChevronRight className="text-lg" strokeWidth={1} />
            </ButtonNext>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <DotGroup className="flex flex-row items-center" />
          </div>
        </CarouselProvider>
      </section>
    </>
  );
};

export default Hero;
