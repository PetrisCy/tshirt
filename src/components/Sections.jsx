import React from "react";
import image from "../assets/image1.jpg";
import { motion } from "framer-motion";
function Sections() {
  return (
    <div className="">
      <div className=" grid-cols-1 grid lg:grid-cols-2 gap-7  m-auto lg:p-20 p-10 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className=" text-center lg:text-left m-auto flex flex-col justify-center gap-4 custom-color p-10 rounded-2xl h-full">
            <h1 className="text-3xl lg:text-5xl">Design Services</h1>
            <h1 className="text-xl lg:text-2xl">
              Our in house design team delivers throughtful, sutomized solutions
              to bring your brand to life. From concept development to
              production we tailer test testgfdgd fiomfionfmdos fdfmpdfmofkm
              ofdmfkosm dfkodsm foidngdfgdfgdfg
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center justify-center custom-color border-7 ">
            <img
              src={image}
              alt="design"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      <div className=" grid-cols-1 grid lg:grid-cols-2 gap-7  m-auto px-10 lg:px-20 ">
        <motion.div
          className=" order-2 lg:order-0"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center custom-color border-7">
            <img src={image} alt="design" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className=" text-center lg:text-left m-auto justify-center  flex flex-col gap-4 custom-color p-10 rounded-2xl order-1 lg:order-2 h-full">
            <h1 className="text-3xl lg:text-5xl">Clothing</h1>
            <h1 className="text-xl lg:text-2xl">
              Our in house design team delivers throughtful, sutomized solutions
              to bring your brand to life. From concept development to
              production we tailer test testgfdgd fiomfionfmdos fdfmpdfmofkm
              ofdmfkosm dfkodsm foidngdfgdfgdfg
            </h1>
          </div>
        </motion.div>
      </div>

      <div className=" grid-cols-1 grid lg:grid-cols-2 gap-7  m-auto lg:p-20 p-10 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className=" text-center lg:text-left m-auto flex flex-col justify-center gap-4 custom-color p-10 rounded-2xl h-full">
            <h1 className="text-3xl lg:text-5xl">Promotional Gifts</h1>
            <h1 className="text-xl lg:text-3xl">
              Our in house design team delivers throughtful, sutomized solutions
              to bring your brand to life. From concept development to
              production we tailer test testgfdgd fiomfionfmdos fdfmpdfmofkm
              ofdmfkosm dfkodsm foidngdfgdfgdfg
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center justify-center custom-color border-7 ">
            <img
              src={image}
              alt="design"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sections;
