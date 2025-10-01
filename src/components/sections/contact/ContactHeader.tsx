'use client'
import { motion } from "motion/react"
import { useScrollAnimation, fadeUpVariants, slideLeftVariants } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/Button";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

const ContactHeader = () => {
    const [copied, setCopied] = useState(false)
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
                className="text-4xl md:text-5xl font-bold text-primary"
                variants={slideLeftVariants}
                transition={{ delay: 0.1 }}
            >
                Contact
            </motion.h1>
            <motion.p
                className="mt-3 text-xl max-w-3xl"
                variants={fadeUpVariants}
                transition={{ delay: 0.2 }}
            >
                Get in touch with me for collaborations, inquiries, or just a friendly chat.
            </motion.p>

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
        </motion.header>
    )
}

export default ContactHeader;