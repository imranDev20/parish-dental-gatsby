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
      <div className="p-1 border rounded-full">
        <GatsbyImage
          objectFit="cover"
          imgClassName="h-full"
          className="h-28 w-28 rounded-full overflow-hidden"
          image={getImage(testimonialAvatar?.localFile)}
          alt={testimonialAvatar?.alternativeText}
        />
      </div>

      <h3 className="text-[27px] mt-5 text-primary font-semibold text-center">
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
