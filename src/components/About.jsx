import React from "react";
import image from "../assets/about1.png";
import image2 from "../assets/lgg.webp";
function About() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] ">
      <div className="grid grid-cols-2  w-full">
        <div className="bg-pink-300 h-96 flex items-center justify-center">
          <h1 className="text-2xl lg:text-4xl text-center text-gray-800/80">
            BRAND NAME or ARTIST NAME
          </h1>
        </div>
        <div className="bg-rose-400 h-96 flex items-center justify-center">
          <img
            src={image}
            alt="imagetshirt"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 w-full">
        <div className="bg-pink-200 h-96  flex items-center justify-center w-full">
          <span className="-rotate-90 text-3xl lg:text-5xl italic text-center text-gray-800/80">
            About Us
          </span>
        </div>
        <div className="bg-white text-black p-6 h-96 overflow-auto col-span-3 flex flex-col justify-center text-center items-center">
          <h1 className="w-full lg:w-1/2 text-sm lg:text-xl text-gray-800/80">
            I'm a graphic designer with a focus on clean, effective visual
            communication. Over the past few years, I’ve worked on a range of
            projects including brand identity, digital design, and print media.
            My approach is detail-oriented and guided by a strong understanding
            of composition, color, and typography. I believe good design is both
            functional and visually compelling.
          </h1>
        </div>
        <div className="bg-red-400 h-96 flex items-center justify-center"></div>
      </div>

      <div className="grid grid-cols-2  w-full">
        <div className="bg-neutral-300 h-60 flex items-center justify-center">
          <img src={image2} alt="logos" className="w-full h-full object-fill" />
        </div>
        <div className="bg-indigo-400 text-white p-6 h-60 flex flex-col justify-center text-center items-center">
          <h1 className="w-full lg:w-1/2 text-sm lg:text-xl text-gray-800/80">
            My goal is always to create work that not only looks good, but
            serves a clear purpose.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
