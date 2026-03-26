import { motion } from "motion/react";

export const WorkingStepAnimation = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [30, 0] }}
      transition={{ duration: 1, delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
