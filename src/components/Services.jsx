import { div } from "motion/react-client";
import React from "react";
import image from "../assets/about.jpeg";
function Services() {
  const style = { backgroundImage: `url(${image})` };
  return (
    <div className="heroAbout" style={style}>
      <div className="flex flex-col justify-center text-center lg:text-left items-start h-full w-full p-20  ">
        <h1 className="text-white text-4xl italic">
          Transforming Ideas into Stunning Visuals
        </h1>
        <h1 className=" w-full lg:w-1/2 text-white/80 lg:text-white/75 text-2xl mt-10 lg:text-left text-center">
          At NAME Design, we bring your vision to life with creative solutions
          tailored to your brand. Let us help you stand out in a crowded
          marketplace with captivating designs that resonate.
        </h1>
      </div>
    </div>
  );
}

export default Services;
