import { motion } from "motion/react";
import { FAQ } from "./constants/faq";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const FaqPage = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleArrowClickBtn = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="bg-(--secondary-bg) py-20 px-7 mt-20">
      <motion.h1
        className="text-(--secondary-text-color) font-bold text-4xl pt-10 max-w-50 lg:max-w-[50%] lg:text-5xl tracking-wider leading-12"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h1>

      <ul className="flex flex-col gap-14 mt-10">
        {FAQ.map((elem, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <li
              key={elem.question}
              className={`text-(--main-text-color) border-b-[.12rem] pb-4 border-(--main-text) hover:border-(--secondary-text-color) transition-all duration-300`}
            >
              <div
                onClick={() => handleArrowClickBtn(index)}
                className="flex justify-between cursor-pointer"
              >
                <h4 className="font-bold text-lg text-(--main-text)">
                  {elem.question}
                </h4>

                <div className="relative">
                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      opacity: isOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`absolute`}
                  >
                    <ChevronDown size={30} />
                  </motion.span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      opacity: isOpen ? 0.5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronUp size={30} />
                  </motion.span>
                </div>
              </div>

              <motion.p
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 0.7 : 0,
                }}
                className="mt-3"
              >
                {elem.answer}
              </motion.p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
