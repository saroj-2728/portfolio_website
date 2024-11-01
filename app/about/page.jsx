"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import profile from "../../images/image.jpg";
import AnimatedText from "@/utilities/AnimatedText";
import { langIcons, devToolsIcons } from "@/components/SvgIcons";

// Lazy load heavy components for performance
const FeaturedBoxes = dynamic(() => import("@/components/FeaturedBoxes"), { ssr: false });
const SkillsComponent = dynamic(() => import("@/components/SkillsComponent"), { ssr: false });

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-16 w-full">

      {/* Header Section */}
      <header className="text-center mb-16 px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl mt-4 text-[var(--text-secondary)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Learn a bit about my journey, skills, and passions.
        </motion.p>
      </header>

      {/* Introduction Section */}
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16 px-4">
        <motion.div
          className="flex-shrink-0 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={profile}
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-lg"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="max-w-lg text-center md:text-left w-full md:w-1/2"
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText pre="I'm a" texts={["Computer Engineering Student", "Web Developer"]} />
        </motion.div>
      </section>

      {/* Get to know me Section */}
      <section className="flex flex-col items-center text-center py-12 px-4 bg-[var(--bg-section)]">
        <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8">
          Get To Know Me
        </p>
        <FeaturedBoxes />
      </section>

      {/* Skills Section */}
      <section className="flex flex-col items-center py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-col items-center mb-8 w-full">
          <p className="text-lg sm:text-xl mb-8 text-[var(--accent-primary)]">Languages And Libraries</p>
          <SkillsComponent boxes={langIcons} />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-xl mb-8 text-[var(--accent-primary)]">Dev Tools</p>
          <SkillsComponent boxes={devToolsIcons} animateFrom="left" />
        </div>
      </section>
    </main>
  );
}
