"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] px-6">
      <motion.h1
        className="text-9xl font-extrabold text-[var(--accent-secondary)] mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-2xl text-center text-[var(--text-secondary)] mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/" className="px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg shadow-md hover:bg-opacity-90 transition duration-300">
            Go back to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
