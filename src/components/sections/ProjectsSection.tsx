'use client'
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/sanityImage";
import { ProjectCard } from "@/components/cards";
import { useProjects } from "@/contexts/ProjectsContext";
import { useScrollAnimation, fadeUpVariants, slideLeftVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

export default function ProjectsSection() {
    const { projects, isLoading } = useProjects();
    const projectsAnimation = useScrollAnimation({ threshold: 0.1, bidirectional: true });

    return (
        <motion.section
            ref={projectsAnimation.ref}
            className="newDrops md:p-12 md:pb-0 pb-12 space-y-6"
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={fadeUpVariants}
        >
            <motion.div
                className="title"
                variants={slideLeftVariants}
                transition={{ delay: 0.1 }}
            >
                <h2 className="font-bold text-primary">New Projects</h2>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 gap-8 sm:grid-cols-2"
                variants={staggerContainer}
            >
                {
                    isLoading ? (
                        Array.from({ length: 2 }).map((_, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                            >
                                <ProjectCard
                                    loading={true}
                                />
                            </motion.div>
                        ))
                    ) : (
                        projects.slice(0, 2).map((drop, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                            >
                                <ProjectCard
                                    href={`/projects/${drop.slug}`}
                                    imageSrc={urlFor(drop.images[0])}
                                    title={drop.title}
                                    description={drop.summary}
                                    loading={false}
                                />
                            </motion.div>
                        ))
                    )
                }
            </motion.div>
        </motion.section>
    );
}
