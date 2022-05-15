import React from "react";

const WhoWeAre = () => {
  return (
    <section className="my-36">
      <div className="container mx-auto px-10 flex justify-between">
        <div className="w-1/2 ">
          <img
            className="rounded"
            src="https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80"
            alt=""
          />
        </div>
        <div className="w-1/2 px-10">
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
          <a
            className="px-4 py-4 bg-primary rounded text-white my-3 inline-block"
            href=""
          >
            Make an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
