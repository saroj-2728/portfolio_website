'use client'
import { motion } from "motion/react"
import { useScrollAnimation, fadeUpVariants, slideLeftVariants } from "@/hooks/useScrollAnimation"

const ProjectHeader = () => {
    const heroAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: false, bidirectional: true });

    return (
        <motion.header
            ref={heroAnimation.ref}
            className="space-y-6"
            initial="hidden"
            animate={heroAnimation.controls}
            variants={fadeUpVariants}
        >
            <motion.h1
                className="md:text-5xl text-4xl font-bold text-primary"
                variants={slideLeftVariants}
                transition={{ delay: 0.1 }}
            >
                Projects
            </motion.h1>
            <motion.p
                className="mt-3 text-xl max-w-3xl"
                variants={fadeUpVariants}
                transition={{ delay: 0.2 }}
            >
                A collection of projects built with passion, precision, and innovation.
            </motion.p>
        </motion.header>
    )
}

export default ProjectHeader