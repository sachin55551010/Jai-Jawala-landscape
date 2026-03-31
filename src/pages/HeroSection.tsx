import heroimg from "../assets/heroimg.jpg";
import { FaUsers } from "react-icons/fa";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { MoreSection } from "../components/MoreSection";
import { Values } from "../components/Values";
import { WorkingStep } from "../components/WorkingStep";
import { Link } from "react-router-dom";
export const HeroSection = () => {
  return (
    <div className="overflow-x-hidden">
      {/* hero section */}
      <div
        className="min-h-dvh w-dvw bg-cover bg-center bg-no-repeat p-2"
        style={{
          backgroundImage: `url(${heroimg})`,
        }}
      >
        {/* hero section content */}
        <div className="h-full flex flex-col items-center justify-center p-2 gap-2 mt-15">
          {/* heading */}
          <div className="relative flex flex-col gap-3 lg:gap-6 w-full lg:w-[80%]">
            <motion.h1
              className="text-white text-5xl lg:text-6xl tracking-wider drop-shadow-[0px_0px_5px_rgba(0,0,0,1)]"
              initial={{ scale: 2, filter: "blur(5px)" }}
              animate={{
                scale: 1,
                filter: "blur(0px) drop-shadow(5px 5px 5px rgba(0,0,0,1))",
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              CREATE YOUR
            </motion.h1>

            <div className="flex flex-col gap-3 lg:flex lg:flex-row">
              <motion.h1
                className="text-white/60 font-bold text-5xl leading-14 lg:text-6xl tracking-wider italic"
                initial={{ scale: 2, filter: "blur(5px)" }}
                animate={{
                  scale: 1,
                  filter: "blur(0px) drop-shadow(5px 5px 5px rgba(0,0,0,1))",
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                DREAM
              </motion.h1>
              <motion.h1
                className="text-white/60 font-bold text-5xl leading-14 lg:text-6xl tracking-wider italic"
                initial={{ scale: 2, filter: "blur(5px)" }}
                animate={{
                  scale: 1,
                  filter: "blur(0px) drop-shadow(5px 5px 5px rgba(0,0,0,1))",
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                GARDEN
              </motion.h1>
            </div>

            <motion.button
              className="bg-(--base-color) py-2 px-6 rounded-sm flex items-center gap-2 origin-left w-fit"
              whileTap={{ scale: 0.8 }}
            >
              <Link to="/services">Get Start</Link>
            </motion.button>
          </div>

          <p className="text-gray-200 py-4 px-2 rounded-2xl backdrop-blur-[.2rem] border border-white/20 text-sm lg:w-[80%] mt-4">
            Crafting dream gardens with passion, creativity, and sustainability
            for over a decade with our experienced landscape artists and
            gardener teams.
          </p>

          {/* address and clients */}

          <div className="flex flex-col lg:flex-row w-full lg:w-[80%] lg:gap-10 justify-center gap-4 ">
            {/* clients */}
            <motion.div
              className="flex-1 border border-white/20 p-6 rounded-2xl text-white backdrop-blur-[.2rem] bg-white/5 shadow-lg flex flex-col justify-center"
              initial={{ opacity: 0, x: -500, filter: "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="text-lg font-bold text-shadow-[5px_5px_5px_rgba(0,0,0,.7)]">
                100+
              </div>
              <div className="text-lg font-extrabold text-shadow-[5px_5px_5px_rgba(0,0,0,.7)]">
                Satisfied Clients
              </div>
              <div className="font-extrabold text-shadow-[5px_5px_5px_rgba(0,0,0,.7)]">
                18+ years of experience
              </div>
              <div>
                <FaUsers
                  size={50}
                  className="drop-shadow-[5px_5px_5px_rgba(0,0,0,.7)]"
                />
              </div>
            </motion.div>

            {/* price */}
            <motion.div
              className="flex-1 border border-white/20 p-6 rounded-2xl text-white backdrop-blur-[.2rem] bg-white/5 shadow-lg text-sm"
              initial={{ opacity: 0, x: 1000, filter: "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h4 className="text-lg font-semibold mb-4 tracking-wide text-shadow-[5px_5px_5px_rgba(0,0,0,.7)]">
                Why Choose Us
              </h4>

              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  <span className="text-shadow-[5px_5px_5px_rgba(0,0,0,.7)]">
                    Competitive & Transparent Pricing
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  <span className="text-shadow-[5px_5px_5px_rgba(0,0,0,.7)]">
                    Timely Project Delivery
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  <span className="text-shadow-[5px_5px_5px_rgba(0,0,0,.7)]">
                    Premium Quality Plants & Materials
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  <span className="text-shadow-[5px_5px_5px_rgba(0,0,0,.7)]">
                    Expert Landscape Design & Planning
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* more info section */}
      <MoreSection />

      {/* value section */}
      <Values />

      {/* working steps */}
      <WorkingStep />
    </div>
  );
};
