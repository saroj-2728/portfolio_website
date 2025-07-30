'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/Button"

const AboutDescription = () => {
    const [copied, setCopied] = useState(false);

    const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

    return (
        <motion.div
            ref={descriptionAnimation.ref}
            className="space-y-6"
            initial="hidden"
            animate={descriptionAnimation.controls}
            variants={staggerContainer}
        >
            <motion.p
                variants={staggerItem}
                className="text-lg text-secondary"
            >
                I&apos;m a web developer with a deep interest in creating efficient and scalable digital solutions. My journey in tech began with a passion for problem-solving, and I&apos;ve developed expertise in both frontend and backend technologies to build functional, user-centered web applications.
            </motion.p>
            <motion.p
                variants={staggerItem}
                className="text-lg text-secondary"
            >
                I strive to bring clarity to complex challenges and create seamless experiences for users. Whether it&apos;s a simple feature or a full-stack project, I focus on delivering high-quality solutions that meet both user and business needs.
            </motion.p>
            <motion.p
                variants={staggerItem}
                className="text-lg text-secondary"
            >
                Outside of coding, I enjoy exploring new tech trends and experimenting with different programming languages. Let&apos;s collaborate and bring your ideas to life through technology.
            </motion.p>

            <motion.div
                className="flex items-center space-x-4 text-sm"
                variants={staggerItem}
            >
                <Button
                    variant="primary"
                    size="lg"
                    href="/projects"
                    className="group font-wenkai font-medium"
                >
                    What I do
                </Button>
                <Button
                    variant="secondary"
                    size="lg"
                    icon={IoCopyOutline}
                    onClick={() => {
                        navigator.clipboard.writeText("saroj.p.2728@gmail.com");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    }}
                    className="group font-wenkai font-medium"
                >
                    {copied ? "Email Copied!" : "Connect via Email"}
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default AboutDescription