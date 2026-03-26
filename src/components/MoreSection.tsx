import { motion } from "motion/react";
import moreImg from "../assets/moresection_img.jpg";

export const MoreSection = () => {
  const letterAnimation = (index: number) => ({
    initial: { opacity: 0, filter: "blur(2px)" },
    whileInView: { opacity: 1, scale: [0, 1], filter: "blur(0px)" },
    viewport: { once: true },
    transition: { delay: 0.05 * index },
  });
  return (
    <section className="mt-10 p-4 flex flex-col gap-6">
      <div className="flex flex-col text-5xl font-semibold gap-2 text-">
        <div className="flex">
          {"CRAFTING".split("").map((elem, index) => {
            return (
              <motion.h4
                className="text-(--main-text-color)"
                key={elem + index}
                {...letterAnimation(index)}
              >
                {elem}
              </motion.h4>
            );
          })}
        </div>

        <div className="flex">
          {"EXPERIENCE".split("").map((elem, index) => {
            return (
              <motion.h4
                className="text-(--secondary-text-color)"
                key={elem + index}
                {...letterAnimation(index)}
              >
                {elem}
              </motion.h4>
            );
          })}
        </div>

        <div className="flex">
          {"THAT TRULY".split("").map((elem, index) => {
            return (
              <motion.h4
                className="text-(--main-text-color)"
                key={elem + index}
                {...letterAnimation(index)}
              >
                {elem === " " ? "\u00A0" : elem}
              </motion.h4>
            );
          })}
        </div>
        <div className="flex">
          {"STAND APART".split("").map((elem, index) => {
            return (
              <motion.h4
                className="text-(--main-text-color)"
                key={elem + index}
                {...letterAnimation(index)}
              >
                {elem === " " ? "\u00A0" : elem}
              </motion.h4>
            );
          })}
        </div>
      </div>
      {/* imgage */}

      <img
        src={moreImg}
        alt=""
        loading="lazy"
        className="rounded-lg lg:h-140 object-cover"
      />
    </section>
  );
};
