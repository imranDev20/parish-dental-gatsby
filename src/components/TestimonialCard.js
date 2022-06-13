import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const {
    testimonialAvatar,
    testimonialTitle,
    testimonialText,
    testimonialName,
  } = testimonial;

  return (
    <>
      <div className="p-2 border border-primary/10 rounded-full">
        <div className="rounded-full overflow-hidden w-28 h-28">
          <GatsbyImage
            imgClassName="w-full h-full object-cover"
            image={getImage(testimonialAvatar?.localFile)}
            alt={testimonialAvatar?.alternativeText}
          />
        </div>
      </div>
      <h3 className="text-[27px] mt-5 text-primary font-semibold">
        {testimonialTitle}
      </h3>
      <p className="text-center my-5 text-neutral-500 leading-8">
        {testimonialText}
      </p>
      <h5 className="uppercase tracking-[0.2em] text-sm text-secondary font-medium">
        {testimonialName}
      </h5>
    </>
  );
};

export default TestimonialCard;
