import React from "react";
import image from "../assets/hero2.png";
import { motion } from "framer-motion";
import image2 from "../assets/SC.png";
import logo from "../assets/kafizas.png";
function Hero() {
  const style = { backgroundImage: `url(${image})` };

  return (
    <div
      className="hero w-full  bg-no-repeat bg-center bg-contain flex items-center justify-center"
      style={style}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="lg:w-full md:w-2/3 w-2/3 m-auto "
          />
        </div>

        {/* <h1 className="text-9xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-gray-900 via-gray-600 to-white">
          MOVE
        </h1>
        <h2 className="text-3xl bg-gradient-to-r bg-clip-text text-transparent from-gray-900 via-gray-600 to-white ">
          digital printing ltd
        </h2> */}
      </motion.div>
    </div>
  );
}
export default Hero;
