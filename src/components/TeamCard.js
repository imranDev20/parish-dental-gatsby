import React from "react";

const TeamCard = ({ image, name, position, degree }) => {
  return (
    <div>
      <div className="rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
          alt=""
        />
      </div>
      <div className="my-5 text-center ">
        <h4 className="text-primary font-medium text-2xl mb-3">{name}</h4>
        <p className="text-secondary tracking-[0.2em] uppercase text-xs font-medium mb-1">
          {position}
        </p>
        <p className="text-sm text-neutral-500">{degree}</p>
      </div>
    </div>
  );
};

export default TeamCard;
