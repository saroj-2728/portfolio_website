'use client'
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useTerminal } from '@/contexts/TerminalContext';
import { useScrollAnimation, fadeUpVariants, slideLeftVariants, staggerContainer } from '@/hooks/useScrollAnimation';

const InteractiveSection = () => {
    const { openTerminal } = useTerminal();
    const sectionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

    return (
        <>
            <motion.section
                ref={sectionAnimation.ref}
                className="interactive-section md:p-12 pb-20 space-y-8 md:space-y-12 mb-10"
                initial="hidden"
                animate={sectionAnimation.controls}
                variants={fadeUpVariants}
            >
                <motion.div
                    className="space-y-8"
                    variants={staggerContainer}
                >
                    {/* Header */}
                    <motion.div
                        className="text-left space-y-6"
                        variants={slideLeftVariants}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-space-grotesk font-bold text-primary leading-tight">
                            Think CLI &gt; GUI? You&apos;re My People 🤓
                        </h2>
                        <p className="text-lg md:text-xl font-wenkai font-light text-secondary max-w-3xl leading-relaxed">
                            Skip the boring navigation. Type commands like <code className="text-terminal-green font-fira-code px-2 py-1 bg-surface rounded">skills</code>, <code className="text-terminal-green font-fira-code px-2 py-1 bg-surface rounded">whoami</code>, or <code className="text-terminal-green font-fira-code px-2 py-1 bg-surface rounded">projects</code> to explore my portfolio the hacker way. Because real developers use terminals 😎
                        </p>
                    </motion.div>

                    {/* Launch Button */}
                    <motion.div
                        variants={fadeUpVariants}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={openTerminal}
                            className="group font-wenkai font-medium"
                        >
                            <div className='flex items-center gap-3 group-hover:gap-4 transition-all duration-300'>
                                <Terminal className="w-5 h-5" />
                                <span>Launch Terminal</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
};

export default InteractiveSection;
