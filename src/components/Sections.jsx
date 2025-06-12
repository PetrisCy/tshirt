import React from "react";
import image from "../assets/image1.jpg";
import imageDesign from "../assets/design.png";
import imageClothing from "../assets/clothing.png";
import imagePromotional from "../assets/promotional.png";
import imageDigital from "../assets/digitalP.png";
import imagePaperwork from "../assets/paperworks.png";
import { motion } from "framer-motion";

function Sections() {
  return (
    <div className="space-y-8 lg:space-y-20 px-6 lg:px-20 py-20 ">
      {/* Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:h-full"
        >
          <div className="flex flex-col justify-center custom-color p-4 lg:p-10 rounded-2xl lg:h-full">
            <h1 className="text-3xl lg:text-5xl">Design Services</h1>
            <p className="text-sm lg:text-xl mt-4">
              Our in-house design team delivers thoughtful, customized solutions
              to bring your brand to life. From concept development to final
              production, we tailor each project to your goals and aesthetic.
              Whether it’s logos, marketing material, or a full rebrand, we’re
              here to support your creative vision with style and strategy.
            </p>
          </div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:h-full"
        >
          <div className="custom-color rounded-2xl overflow-hidden h-[300px] lg:h-full border-4 ">
            <img
              src={imageDesign}
              alt="design"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="order-2 lg:order-1 lg:h-full"
        >
          <div className="custom-color rounded-2xl overflow-hidden lg:h-full border-4">
            <img
              src={imageClothing}
              alt="clothing"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="order-1 lg:order-2 lg:h-full"
        >
          <div className="flex flex-col justify-center custom-color p-4 lg:p-10 rounded-2xl lg:h-full">
            <h1 className="text-3xl lg:text-5xl">Clothing</h1>
            <p className="text-sm lg:text-xl mt-4">
              Branded Apparel & Textile Printing Enhance your brand visibility
              with custom-printed clothing. We produce high-quality t-shirts,
              polos, uniforms, and more, ideal for corporate wear, team events,
              or promotions. Our textile printing ensures long-lasting, vibrant
              designs that reflect your brand identity while giving your team a
              polished, professional look that leaves a memorable impression.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch ">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:h-full"
        >
          <div className="flex flex-col justify-center custom-color p-4 lg:p-10 rounded-2xl lg:h-full">
            <h1 className="text-3xl lg:text-5xl">Promotional Gifts</h1>
            <p className="text-sm lg:text-xl mt-4">
              Make a lasting impression with our extensive range of over 10,000
              promotional items, all available for custom branding. From elegant
              pens to tech gadgets and eco-friendly giveaways, our promotional
              printing helps you connect with clients and stand out at events,
              trade shows, or internal corporate celebrations with meaningful,
              branded gifts.
            </p>
          </div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:h-full"
        >
          <div className="custom-color rounded-2xl overflow-hidden lg:h-full border-4">
            <img
              src={imagePromotional}
              alt="gifts"
              className="w-full h-full object-cover "
            />
          </div>
        </motion.div>
      </div>
      {/* Section 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="order-2 lg:order-1 lg:h-full"
        >
          <div className="custom-color rounded-2xl overflow-hidden lg:h-full border-4">
            <img
              src={imageDigital}
              alt="clothing"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="order-1 lg:order-2 lg:h-full"
        >
          <div className="flex flex-col justify-center custom-color p-4 lg:p-10 rounded-2xl lg:h-full">
            <h1 className="text-3xl lg:text-5xl">Digital Printing</h1>
            <p className="text-sm lg:text-xl mt-4">
              We specialize in sharp, eye-catching prints for both indoor and
              outdoor use. From vehicle wraps and window graphics to banners,
              roll-ups, and X-banners, our large-format solutions are built for
              impact. With fast turnaround times and top-tier quality, we help
              your message shine wherever it’s displayed.
            </p>
          </div>
        </motion.div>
      </div>
      {/* Section 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:h-full"
        >
          <div className="flex flex-col justify-center custom-color p-4 lg:p-10 rounded-2xl lg:h-full">
            <h1 className="text-3xl lg:text-5xl">Corporate paperworks</h1>
            <p className="text-sm lg:text-xl mt-4">
              Make every interaction count with professionally printed paper
              products. We design and print business cards, brochures, flyers,
              booklets, posters, invoices, and more. Whether you're preparing
              for a trade show, launching a new campaign, or refreshing your
              brand, we ensure your materials reflect your company’s identity
              and professionalism.
            </p>
          </div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:h-full"
        >
          <div className="custom-color rounded-2xl overflow-hidden lg:h-full border-4 ">
            <img
              src={imagePaperwork}
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
