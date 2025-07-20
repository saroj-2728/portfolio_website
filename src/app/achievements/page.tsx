'use client'
import { motion } from "framer-motion";
import TreeSection from "@/components/ui/TreeSection";
import { educationData, experienceData, awardsData } from "@/constants/achievements";
import { useScrollAnimation, fadeUpVariants, slideLeftVariants } from "@/hooks/useScrollAnimation";

const Achievements = () => {
    const heroAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: false, bidirectional: true });
    const educationAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });
    const experienceAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });
    const awardsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });
    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
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
                        Milestones and Achievements
                    </motion.h1>
                    <motion.p
                        className="mt-3 text-lg max-w-xl"
                        variants={fadeUpVariants}
                        transition={{ delay: 0.2 }}
                    >
                        A showcase of my journey, from educational milestones to professional achievements, awards, and impactful experiences.
                    </motion.p>
                </motion.header>

                {/* Interactive Tree Timeline */}
                <section className="md:p-12 pb-20">
                    <div className="w-full max-w-6xl mx-auto px-4">
                        <div className="space-y-16 md:space-y-30">

                            {/* Education Section */}
                            <motion.div
                                ref={educationAnimation.ref}
                                initial="hidden"
                                animate={educationAnimation.controls}
                                variants={fadeUpVariants}
                            >
                                <TreeSection
                                    title="Education Journey"
                                    items={educationData}
                                    category="education"
                                    defaultExpanded={true}
                                />
                            </motion.div>

                            {/* Experience Section */}
                            <motion.div
                                ref={experienceAnimation.ref}
                                initial="hidden"
                                animate={experienceAnimation.controls}
                                variants={fadeUpVariants}
                            >
                                <TreeSection
                                    title="Professional Experience"
                                    items={experienceData}
                                    category="experience"
                                    defaultExpanded={true}
                                />
                            </motion.div>

                            {/* Awards Section */}
                            <motion.div
                                ref={awardsAnimation.ref}
                                initial="hidden"
                                animate={awardsAnimation.controls}
                                variants={fadeUpVariants}
                            >
                                <TreeSection
                                    title="Achievements & Awards"
                                    items={awardsData}
                                    category="awards"
                                    defaultExpanded={true}
                                />
                            </motion.div>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Achievements