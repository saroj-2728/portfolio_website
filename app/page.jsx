"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      <section className="flex flex-col items-center justify-center text-center px-5 py-16 md:py-24">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I&#39;m SaR0J
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Web Developer & Software Enthusiast
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-4 mt-6 w-full md:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            href="/projects"
            className="w-full md:w-auto py-3 md:px-6 md:py-3 rounded-lg bg-[var(--accent-primary)] text-white font-bold transition hover:bg-opacity-50"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="w-full md:w-auto py-3 md:px-6 md:py-3 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold border border-[var(--accent-primary)] transition-all duration-[400ms] hover:text-white hover:bg-[var(--accent-primary)]"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
