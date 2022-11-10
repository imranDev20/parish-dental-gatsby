import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const SectionHeader = ({ subTitle, mainTitle, description }) => {
  return (
    <>
      <h3 className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
        {subTitle}
      </h3>
      <h2 className="text-center text-5xl my-2 capitalize font-semibold text-primary">
        {mainTitle}
      </h2>
      <ReactMarkdown className="text-neutral-500 max-w-4xl text-center mx-auto my-5 text-lg">
        {description ? description : null}
      </ReactMarkdown>
    </>
  );
};

export default SectionHeader;
