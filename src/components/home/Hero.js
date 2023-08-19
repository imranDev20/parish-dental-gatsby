import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { GatsbyImage } from "gatsby-plugin-image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MyModal from "./MyDialog";
import { BsFillCalendar2DateFill } from "react-icons/bs";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const heroContents = heroes.nodes;

  return (
    <>
      <section className="w-full">
        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          effect="fade"
          spaceBetween={50}
          // touchRatio={0}
          // autoplay
          autoplay={{
            // disableOnInteraction: false,
            delay: 10000,
            // pauseOnMouseEnter: true,
          }}
          // loop={true}
          initialSlide={0}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="hero-carousel sm:min-h-[500px]"
        >
          {heroContents?.map((heroContent, index) => {
            const image = heroContent?.slideImage?.gatsbyImageData;

            const titleTextArray = heroContent?.slideTitle?.split(" ");
            const half = Math.ceil(titleTextArray?.length / 2);
            const firstHalf = titleTextArray?.splice(0, half);

            const secondHalf = titleTextArray?.splice(-half);

            return (
              <SwiperSlide
                key={heroContent?.contentful_id}
                className="relative"
              >
                {({ isActive }) => (
                  // Additonal styles in global.css
                  <>
                    <GatsbyImage
                      image={image}
                      loading="eager"
                      className="max-h-[350px] sm:max-h-screen h-[90vh] sm:min-h-[500px] w-full"
                      imgClassName="w-full h-full object-cover"
                      alt={heroContent?.slideImage?.title}
                    />
                    <div class="swiper-lazy-preloader"></div>
                    <div className="max-w-sm sm:max-w-lg md:max-w-2xl absolute top-1/2 -translate-y-1/2 left-0 lg:left-[10%] -translate-x-[-10%] ">
                      <h3 className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded">
                        {heroContent?.slideSubtitle}
                      </h3>

                      <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
                        {heroContent.slideTitle}
                      </h2>

                      {index === 2 ? (
                        <button className="tracking-[0.2em] uppercase text-xs font-medium rounded inline-block bg-primary hover:bg-secondary px-4 py-4 text-white  mt-4 transition-colors">
                          <Link to="/services/aesthetics">Learn More</Link>
                        </button>
                      ) : null}

                      {index === 1 ? (
                        <a
                          href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
                          target="_blank"
                        >
                          <div className="tracking-[0.2em] uppercase text-xs font-medium rounded  bg-primary hover:bg-secondary px-4 py-4 text-white  mt-4 transition-colors  inline-flex items-center">
                            <BsFillCalendar2DateFill className="mr-2" />
                            Book - £35
                          </div>
                        </a>
                      ) : null}

                      {index === 0 ? (
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="tracking-[0.2em] uppercase text-xs font-medium rounded inline-block bg-primary hover:bg-secondary px-4 py-4 text-white  mt-4 transition-colors"
                        >
                          Appointment
                        </button>
                      ) : null}
                    </div>
                  </>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>{" "}
      </section>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Hero;
