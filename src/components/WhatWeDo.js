import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { LinkButton } from "./Button";

const WhatWeDo = () => {
  return (
    <section className="w-full my-24">
      <div className="flex flex-col lg:flex-row container mx-auto px-10">
        <div className="w-full lg:w-1/2 lg:px-10">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            What We Do
          </h3>
          <h2 className="text-4xl text-primary font-semibold mb-5 mt-2">
            Our Works
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
          <LinkButton to="/services" variant="blue" className="px-4 py-5">
            Our services
          </LinkButton>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <ReactCompareSlider
            className="rounded"
            // handle={
            //   <ReactCompareSliderHandle
            //     buttonStyle={{
            //       backdropFilter: undefined,
            //       background: "white",
            //       border: 0,
            //       color: "#333",
            //     }}
            //   />
            // }
            itemOne={
              <ReactCompareSliderImage
                src="https://static.toiimg.com/thumb/msid-82068492,width-800,height-600,resizemode-75,imgsize-523455,pt-32,y_pad-40/82068492.jpg"
                className="w-full h-full object-cover"
                // style={{ filter: "grayscale(1)" }}
                alt="one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                className="w-full h-full object-cover"
                src="https://blog-images.pharmeasy.in/2018/04/10112205/PE_Blog23.png"
                alt="two"
              />
            }
            // onPositionChange={handlePositionChange}
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
