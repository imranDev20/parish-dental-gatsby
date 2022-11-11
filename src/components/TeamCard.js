import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const TeamCard = ({ image, name, position, gdc }) => {
  return (
    <div>
      <div className="rounded overflow-hidden">
        <GatsbyImage image={image} />
      </div>
      <div className="my-5 text-center ">
        <h4 className="text-primary font-medium text-2xl mb-3">{name}</h4>
        <p className="text-secondary tracking-[0.2em] uppercase text-xs font-medium mb-1">
          {position}
        </p>
        <p className="text-sm text-neutral-500">GDC: {gdc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
