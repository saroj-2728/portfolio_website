'use client'
import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import { fadeUpVariants, slideLeftVariants, staggerItem } from "@/hooks/useScrollAnimation";

export default function HeroIntro({ displayText }: { displayText: string }) {
  return (
    <motion.div className="space-y-6" variants={staggerItem}>
      <motion.div
        className="flex items-center gap-3 text-terminal-green font-fira-code text-sm tracking-wide mb-6"
        variants={slideLeftVariants}
      >
        <Terminal className="w-4 h-4" />
        <span>~/portfolio/saroj-pandey $</span>
        <motion.div
          className="w-0.5 h-4 bg-terminal-green rounded-sm"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[0.9] tracking-tight"
        variants={fadeUpVariants}
      >
        Hey, I&apos;m{' '}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Saroj
        </span>
        <br />
        <span className="text-3xl md:text-4xl lg:text-5xl text-terminal-green font-fira-code font-medium tracking-wide">
          {displayText}
          <motion.span
            className="inline-block w-[2px] h-[1em] bg-terminal-green ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
          />
        </span>
      </motion.h1>
    </motion.div>
  );
}