import React from "react";

const TeamCard = ({ image, name, position }) => {
  return (
    <div>
      <div className="rounded overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="my-5 text-center ">
        <h4 className="text-primary font-medium text-2xl">{name}</h4>
        <p className="text-secondary tracking-[0.2em] uppercase text-xs font-medium">
          {position}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
