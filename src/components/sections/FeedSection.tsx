'use client'
import { motion } from "framer-motion";
import { FeedCard } from "@/components/cards";
import { cards } from "@/constants/home";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

export default function FeedSection() {
    const feedAnimation = useScrollAnimation({ threshold: 0.1, bidirectional: true });

    return (
        <motion.section
            ref={feedAnimation.ref}
            className="feed md:px-12 md:pt-12 md:pb-0 pb-12 grid grid-cols-1 gap-8 sm:grid-cols-2"
            initial="hidden"
            animate={feedAnimation.controls}
            variants={staggerContainer}
        >
            {
                cards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={staggerItem}
                    >
                        <FeedCard
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            href={card.href}
                        />
                    </motion.div>
                ))
            }
        </motion.section>
    );
}
