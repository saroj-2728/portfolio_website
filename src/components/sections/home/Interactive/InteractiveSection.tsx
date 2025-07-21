'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, slideLeftVariants, staggerContainer } from '@/hooks/useScrollAnimation';
import AnimatedCodeSnippet from './AnimatedCodeSnippet';
import DeveloperLogs from './DeveloperLogs';

const LOG_SETS = 5; // number of logSets in DeveloperLogs

export default function InteractiveSection() {
    const [logIndex, setLogIndex] = useState(0);
    const sectionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

    const handleBuildClick = () => {
        // pick a new random index different from current
        setLogIndex(prev => {
            const next = Math.floor(Math.random() * LOG_SETS);
            return next === prev ? (next + 1) % LOG_SETS : next;
        });
    };

    return (
        <motion.section
            ref={sectionAnimation.ref}
            className="interactive-section md:p-12 pb-20 grid grid-cols-1 md:grid-cols-2 items-start gap-8"
            initial="hidden"
            animate={sectionAnimation.controls}
            variants={slideLeftVariants}
        >
            {/* Left: Code Snippet */}
            <motion.div
                variants={staggerContainer}
                className="w-full"
            >
                <AnimatedCodeSnippet onBuild={handleBuildClick} />
            </motion.div>

            {/* Right: Logs */}
            <div className="w-full">
                <DeveloperLogs logIndex={logIndex} />
            </div>
        </motion.section>
    );
}