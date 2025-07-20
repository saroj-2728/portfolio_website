'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import Button from "@/components/ui/Button";
import { useScrollAnimation, fadeUpVariants, slideLeftVariants } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
    const [copied, setCopied] = useState(false);
    const heroAnimation = useScrollAnimation({ threshold: 0.2, bidirectional: true });

    return (
        <motion.header
            ref={heroAnimation.ref}
            className="me md:p-12 md:pb-0 pb-12 space-y-6"
            initial="hidden"
            animate={heroAnimation.controls}
            variants={fadeUpVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-primary"
                variants={slideLeftVariants}
                transition={{ delay: 0.1 }}
            >
                Hey, I&apos;m Saroj. <br /> I design software.
            </motion.h1>
            <motion.p
                className="mt-3 text-lg max-w-xl"
                variants={fadeUpVariants}
                transition={{ delay: 0.2 }}
            >
                Turning ideas into stunning, seamless experiences with a touch of creativity and precision.
            </motion.p>
            <motion.div
                className="flex items-center space-x-4 text-sm"
                variants={fadeUpVariants}
                transition={{ delay: 0.3 }}
            >
                <Button
                    variant="primary"
                    size="md"
                    href="/about"
                >
                    About
                </Button>
                <Button
                    variant="secondary"
                    size="md"
                    icon={IoCopyOutline}
                    onClick={() => {
                        navigator.clipboard.writeText("sp0710412@gmail.com");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    }}
                >
                    {copied ? "Copied" : "E-mail"}
                </Button>
            </motion.div>
        </motion.header>
    );
}
