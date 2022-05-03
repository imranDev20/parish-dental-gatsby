import React from "react";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-2 border border-primary/10 rounded-full">
        <div className="rounded-full overflow-hidden w-28 h-28">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            alt=""
          />
        </div>
      </div>
      <h3 className="text-2xl mt-5 text-primary font-medium">
        Quick, easy & reliable
      </h3>
      <p className="text-center my-5 text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
        molestiae blanditiis dolore, adipisci sapiente in maxime omnis.
      </p>
      <h5 className="uppercase tracking-[0.2em] text-sm text-secondary font-medium">
        Lena Johnson
      </h5>
    </div>
  );
};

export default TestimonialCard;
