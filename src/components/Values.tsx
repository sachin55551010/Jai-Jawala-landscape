import { Heart, Leaf, Link, Sparkles } from "lucide-react";
import { motion } from "motion/react";
export const Values = () => {
  const fadeInUp = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2, delay: 0.5 },
    viewport: { once: true },
  };
  return (
    <section className="p-4 ">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* first */}
        <motion.div className="flex flex-col gap-3" {...fadeInUp}>
          <div className="bg-(--secondary-text-color) w-fit p-3 rounded-md text-(--base-color)">
            <Heart />
          </div>
          <h6 className="font-bold text-2xl text-(--main-text-color)">
            Passion in every work
          </h6>
          <p className="text-(--secondary-text-color) text-lg">
            We are deeply passionate about creating beautiful, sustainable green
            landscapes for our clients.
          </p>
        </motion.div>

        {/* second */}
        <motion.div className="flex flex-col gap-3" {...fadeInUp}>
          <div className="bg-(--secondary-text-color) w-fit p-3 rounded-md text-(--base-color)">
            <Link />
          </div>
          <h6 className="font-bold text-2xl text-(--main-text-color)">
            Collaboration on top
          </h6>
          <p className="text-(--secondary-text-color) text-lg">
            We make your dream design come true by combining your ideas with our
            10+ years of garden design expertise.
          </p>
        </motion.div>

        {/* third */}
        <motion.div className="flex flex-col gap-3" {...fadeInUp}>
          <div className="bg-(--secondary-text-color) w-fit p-3 rounded-md text-(--base-color)">
            <Leaf />
          </div>
          <h6 className="font-bold text-2xl text-(--main-text-color)">
            Sustainability in check
          </h6>
          <p className="text-(--secondary-text-color) text-lg">
            We love nurturing nature, one garden at a time, so that you can
            enjoy the beautiful landscape of our garden even longer.
          </p>
        </motion.div>

        {/* fourth */}
        <motion.div className="flex flex-col gap-3" {...fadeInUp}>
          <div className="bg-(--secondary-text-color) w-fit p-3 rounded-md text-(--base-color)">
            <Sparkles />
          </div>
          <h6 className="font-bold text-2xl text-(--main-text-color)">
            Creativity unleashed
          </h6>
          <p className="text-(--secondary-text-color) text-lg">
            We make sure to only give you our innovative designs that stand out
            to make sure that your garden is not like the others.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
