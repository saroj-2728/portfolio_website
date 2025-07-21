'use client'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FooterBlock, FooterLink } from "@/constants/footer";
import { FaArrowRight } from "react-icons/fa6";
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const Footer = () => {
    const [time, setTime] = useState<string>("--:--");
    const footerAnimation = useScrollAnimation({ threshold: 0.2, bidirectional: true });

    useEffect(() => {
        const updateTime = () =>
            setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        updateTime();
        const interval = setInterval(updateTime, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            ref={footerAnimation.ref}
            className="flex flex-col items-center bg-accent w-full border-t border-brd pb-8 select-none"
            initial="hidden"
            animate={footerAnimation.controls}
            variants={staggerContainer}
        >
            <footer className="w-full max-w-[960px] mx-auto px-6 md:px-0">
                <motion.div
                    className="p-6 md:p-12 flex flex-col-reverse md:flex-col gap-6 md:gap-10"
                    variants={staggerContainer}
                >
                    {/* Footer Links */}
                    <motion.div
                        className="links grid grid-cols-2 sm:grid-cols-4 gap-16"
                        variants={staggerItem}
                    >
                        {FooterBlock.map((block, index) => (
                            <FooterLinkBlocks
                                key={index}
                                title={block.title}
                                links={block.links}
                            />
                        ))}
                    </motion.div>

                    {/* Current Status */}
                    <motion.div
                        className="current grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-t border-brd items-center"
                        variants={fadeUpVariants}
                    >
                        <motion.div className="status flex flex-col gap-2" variants={staggerItem}>
                            <p className="text-terminal-green font-mono text-sm">
                                <span className="text-gradient">❯</span> status:{" "}
                                <span className="text-primary">coding...</span>
                            </p>

                            <Link
                                href="/contact"
                                className="group inline-flex min-w-max items-center gap-1 font-semibold text-terminal-green hover:text-gradient-to-r hover:from-gradient-accent hover:to-gradient-accent-alt transition-all"
                            >
                                <span className="relative group-hover:underline underline-offset-4">
                                    Reach out
                                </span>
                                <motion.span
                                    initial={{ x: 0 }}
                                    animate={{ x: 5 }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        duration: 0.6,
                                        ease: "easeInOut",
                                    }}
                                    className="inline-block"
                                >
                                    <FaArrowRight />
                                </motion.span>
                            </Link>
                        </motion.div>

                        {/* Hacker Clock */}
                        <motion.div className="time flex justify-start" variants={staggerItem}>
                            <motion.p
                                className="text-[5rem] md:text-7xl font-mono font-bold text-terminal-green leading-none"
                                animate={{ opacity: [0.9, 1, 0.9] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                {time}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </footer>
        </motion.div>
    );
};

export default Footer;

const FooterLinkBlocks = ({ title, links }: { title: string; links: FooterLink[] }) => {
    return (
        <motion.div className="connect" variants={staggerItem}>
            <h4 className="font-semibold mb-4 font-mono text-terminal-muted">
                ❯ {title}
            </h4>
            <nav className="flex flex-col space-y-2 text-sm font-mono">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="relative max-w-max text-secondary hover:text-terminal-green transition-all duration-300
                            before:absolute before:-bottom-[2px] before:left-0 before:w-0 before:h-[2px] 
                            before:bg-gradient-to-r before:from-gradient-accent before:to-gradient-accent-alt
                            before:transition-all before:duration-300 hover:before:w-full"
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
        </motion.div>
    );
};
