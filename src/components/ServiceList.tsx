import { serviceList } from "./constants/serviceList";
import { motion } from "motion/react";
export const ServiceList = () => {
  return (
    <div className="p-3">
      <div className="grid gap-4 mt-20 lg:grid-cols-2 overflow-x-hidden overflow-hidden">
        {serviceList.map((elem, index) => {
          const Icon = elem.icon;
          return (
            <motion.div
              key={index}
              style={{ backgroundImage: `url(${elem.image})` }}
              className="relative gap-8 h-100 rounded-xl bg-cover flex items-end p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3">
                <h6 className="text-(--base-color) text-3xl font-semibold tracking-wider">
                  {elem.title}
                </h6>
                <p className="text-(--base-color) tracking-wider opacity-75 text-sm">
                  {elem.description}
                </p>
                <div className="bg-(--base-color) w-fit p-3 rounded-full absolute top-5 right-5 hover:bg-(--main-text-color) transition-all duration-300">
                  <Icon strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
