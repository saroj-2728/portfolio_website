'use client'
import { motion } from "motion/react"
import { useScrollAnimation, fadeUpVariants, slideLeftVariants } from "@/hooks/useScrollAnimation";

interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({
    title,
    description
}: HeaderProps) => {
    const headerAnimation = useScrollAnimation({
        threshold: 0.3,
        triggerOnce: false,
        bidirectional: true
    });

    return (
        <motion.header
            ref={headerAnimation.ref}
            className="space-y-6"
            initial="hidden"
            animate={headerAnimation.controls}
            variants={fadeUpVariants}
        >
            <motion.h1
                className="md:text-5xl text-4xl font-bold text-primary"
                variants={slideLeftVariants}
                transition={{ delay: 0.1 }}
            >
                {title}
            </motion.h1>
            <motion.p
                className="mt-3 text-xl max-w-3xl"
                variants={fadeUpVariants}
                transition={{ delay: 0.2 }}
            >
                {description}
            </motion.p>
        </motion.header>
    )
}

export default Header;