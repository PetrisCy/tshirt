import React from "react";
import image from "../assets/hero2.jpg";
import { motion } from "framer-motion";

function Hero() {
  const style = { backgroundImage: `url(${image})` };
  return (
    <>
      <div
        className="hero flex flex-col justify-center items-center"
        style={style}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-9xl font-bold text-white flex justify-center text-center items-center flex-col">
            NOVE
          </h1>
          <h2 className="text-3xl text-white flex justify-center text-center items-center flex-col">
            digital printing ltd
          </h2>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
