import React from "react";
import { NormalButton } from "./Button";

const WhoWeAre = () => {
  return (
    <section className="my-24">
      <div className="container mx-auto px-10 flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 ">
          <img
            className="rounded"
            src="https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80"
            alt=""
          />
        </div>
        <div className="w-full mt-10 lg:mt-0 lg:w-1/2 lg:px-10">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            Who We Are
          </h3>
          <h2 className="text-4xl text-primary font-semibold mb-5 mt-2">
            About Us
          </h2>
          <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            cupiditate officia inventore aliquam fuga magni in odit error
            tenetur eveniet! Corporis consectetur pariatur saepe repellat ipsam,
            harum vitae quis fugiat.
          </p>
          <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            cupiditate accusantium totam quaerat sed, fuga explicabo doloremque
            cum temporibus
          </p>
          <NormalButton variant="blue" className="px-4 py-4">
            Make an appointment
          </NormalButton>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
