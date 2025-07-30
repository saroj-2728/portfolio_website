'use client'
import { motion } from "motion/react";
import { fadeUpVariants, staggerItem } from "@/hooks/useScrollAnimation";

export default function HeroContent() {

  return (
    <motion.div className="space-y-10 md:space-y-12" variants={staggerItem}>
      <motion.p
        className="
          text-xl md:text-2xl lg:text-3xl
          font-wenkai font-light text-secondary
          max-w-3xl
          leading-relaxed
        "
        variants={fadeUpVariants}
      >
        I transform <span className="text-primary font-medium">caffeine</span> into
        <span className="text-primary font-medium"> code</span>,{" "}
        <span className="text-primary font-medium">ideas</span> into{" "}
        <span className="text-primary font-medium">digital reality</span>, and{" "}
        <span className="text-primary font-medium">bugs</span> into{" "}
        <span className="text-primary font-medium">features</span> ...
      </motion.p>
    </motion.div>
  );
}
