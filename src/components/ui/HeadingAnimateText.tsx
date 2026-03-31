import { motion } from "motion/react";
export const HeadingAnimateText = ({
  children,
  delay,
  className,
}: {
  className: string;
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.h1>
  );
};
