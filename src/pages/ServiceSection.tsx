import { Link } from "react-router-dom";
import serviceImg from "../assets/service.jpg";
import { motion } from "motion/react";
import { ServiceList } from "../components/ServiceList";
export const ServiceSection = () => {
  return (
    <div className="max-w-dvw overflow-x-hidden">
      <div
        className="h-100 w-dvw bg-cover bg-center bg-no-repeat p-2 flex flex-col items-start justify-end"
        style={{ backgroundImage: `url(${serviceImg})` }}
      >
        <Link to="/">
          <h6 className="text-(--base-color) mb-2 text-lg opacity-60">HOME</h6>
        </Link>

        <h1 className="text-(--base-color) mb-8 font-semibold text-5xl tracking-widest lg:text-6xl flex">
          {"OUR SERVICES".split("").map((text, inx) => {
            return (
              <motion.div
                key={text + inx}
                className="flex"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{
                  opacity: 1,
                  scale: [2, 1],
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * inx }}
              >
                {text === " " ? "\u00A0" : text}
              </motion.div>
            );
          })}
        </h1>
      </div>

      <ServiceList />
    </div>
  );
};
