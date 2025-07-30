'use client'
import { motion } from "framer-motion";
import TreeSection from "@/components/ui/TreeSection";
import { educationData, experienceData, awardsData } from "@/constants/achievements";
import { useScrollAnimation, fadeUpVariants } from "@/hooks/useScrollAnimation";

const AchievementsTimeline = () => {
    const educationAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });
    const experienceAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });
    const awardsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

    return (
        <section>
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
    )
}

export default AchievementsTimeline;