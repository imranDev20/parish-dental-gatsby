import React from "react";
import ReactMarkdown from "react-markdown";
import { BsStarFill } from "react-icons/bs";

const TestimonialCard = ({ testimonial, white }) => {
  const { title, description, rating } = testimonial;

  return (
    <>
      <div className="flex my-3">
        {new Array(rating).fill(1)?.map((r, i) => (
          <BsStarFill
            key={i}
            className={`${white ? "text-yellow-300" : "text-orange-400"} mx-1`}
          />
        ))}
      </div>
      <h3
        className={`text-[27px] my-5 ${
          white ? "text-white" : "text-primary"
        } font-semibold text-center`}
      >
        {title}
      </h3>
      <ReactMarkdown
        className={`text-center my-5 text-gray-600 leading-8 max-w-4xl ${
          white ? "text-white" : "text-gray-600"
        }`}
      >
        {description.description ? description.description : description}
      </ReactMarkdown>
    </>
  );
};

export default TestimonialCard;
