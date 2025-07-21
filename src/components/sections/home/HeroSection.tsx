'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import { Code, Coffee, Zap, Terminal } from "lucide-react";
import Button from "@/components/ui/Button";
import { useScrollAnimation, fadeUpVariants, slideLeftVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
    const [copied, setCopied] = useState(false);
    const [currentRole, setCurrentRole] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const heroAnimation = useScrollAnimation({ threshold: 0.2, bidirectional: true });

    const roles = [
        "Full Stack Developer",
        "Problem Solver",
        "Code Architect"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTyping(false);
            setTimeout(() => {
                setCurrentRole((prev) => (prev + 1) % roles.length);
                setIsTyping(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <motion.header
            ref={heroAnimation.ref}
            className="me md:p-12 md:pb-0 pb-16 space-y-12 md:space-y-16"
            initial="hidden"
            animate={heroAnimation.controls}
            variants={staggerContainer}
        >
            {/* Main Heading with Dynamic Role */}
            <motion.div
                className="space-y-6"
                variants={staggerItem}
            >
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
                    <motion.span
                        className="text-3xl md:text-4xl lg:text-5xl text-terminal-green font-fira-code font-medium tracking-wide"
                        key={currentRole}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isTyping ? 1 : 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {roles[currentRole]}
                    </motion.span>
                </motion.h1>
            </motion.div>

            {/* Creative Description */}
            <motion.div
                className="space-y-8 md:space-y-12"
                variants={staggerItem}
            >
                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl font-wenkai font-light text-secondary max-w-3xl leading-relaxed"
                    variants={fadeUpVariants}
                >
                    I transform{' '}
                    <span className="text-primary font-medium">caffeine</span>{' '}
                    into{' '}
                    <span className="text-primary font-medium">code</span>,{' '}
                    <span className="text-primary font-medium">ideas</span>{' '}
                    into{' '}
                    <span className="text-primary font-medium">digital reality</span>, and{' '}
                    <span className="text-primary font-medium">bugs</span>{' '}
                    into{' '}
                    <span className="text-primary font-medium">features</span> ✨
                </motion.p>

                {/* Fun Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8"
                    variants={staggerContainer}
                >
                    {[
                        { icon: Code, label: "Lines of Code", value: "∞", color: "text-blue-400" },
                        { icon: Coffee, label: "Coffee Consumed", value: "∞", color: "text-amber-400" },
                        { icon: Zap, label: "Problems Solved", value: "Many", color: "text-green-400" },
                        { icon: Terminal, label: "Terminal Sessions", value: "Daily", color: "text-purple-400" }
                    ].map((stat) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-5 space-y-1 bg-surface border border-brd rounded-xl hover:border-brd-hover transition-colors group cursor-pointer"
                            variants={staggerItem}
                            whileHover={{ y: -4, scale: 1.03 }}
                        >
                            <stat.icon className={`w-7 h-7 mx-auto ${stat.color}`} />
                            <div className="text-2xl md:text-3xl font-space-grotesk font-bold text-primary group-hover:text-primary transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-sm font-wenkai text-secondary">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Creative Tagline */}
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

            {/* Action Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row items-center gap-6 pt-4"
                variants={staggerItem}
            >
                <Button
                    variant="primary"
                    size="lg"
                    href="/about"
                    className="group font-wenkai font-medium"
                >
                    <div
                        className="flex items-center gap-3"
                    >
                        <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span>Explore My Code</span>
                    </div>
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
        </motion.header>
    );
}