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
        I turn <span className="text-primary font-medium">concepts</span> into
        <span className="text-primary font-medium"> code</span>,{" "}
        <span className="text-primary font-medium">designs</span> into{" "}
        <span className="text-primary font-medium">experiences</span>, and{" "}
        <span className="text-primary font-medium">problems</span> into{" "}
        <span className="text-primary font-medium">possibilities</span> ...
      </motion.p>
    </motion.div>
  );
}
