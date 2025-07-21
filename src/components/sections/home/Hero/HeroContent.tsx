'use client'
import { motion } from "motion/react";
import { fadeUpVariants, staggerItem } from "@/hooks/useScrollAnimation";

export default function HeroContent() {

  return (
    <motion.div className="space-y-8 md:space-y-12" variants={staggerItem}>
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl font-wenkai font-light text-secondary max-w-3xl leading-relaxed"
        variants={fadeUpVariants}
      >
        I transform <span className="text-primary font-medium">caffeine</span> into
        <span className="text-primary font-medium"> code</span>,{" "}
        <span className="text-primary font-medium">ideas</span> into{" "}
        <span className="text-primary font-medium">digital reality</span>, and{" "}
        <span className="text-primary font-medium">bugs</span> into{" "}
        <span className="text-primary font-medium">features</span> ✨
      </motion.p>

      <motion.div
        className="bg-gradient-to-r from-surface/50 to-transparent border border-brd rounded-2xl p-8 md:p-10"
        variants={fadeUpVariants}
      >
        <p className="text-center text-lg md:text-xl font-wenkai font-light text-secondary italic leading-relaxed">
          &quot;Building the web, one commit at a time. Breaking things in development so they work perfectly in production.&quot;
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-3 text-sm font-fira-code text-terminal-green">
            <span>git commit -m &quot;Added more awesome&quot;</span>
            <motion.div
              className="w-0.5 h-4 bg-terminal-green rounded-sm"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
