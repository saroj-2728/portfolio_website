'use client'
import { motion } from "framer-motion";
import ProjectCard from "@/components/cards/ProjectCard";
import { useProjects } from "@/contexts/ProjectsContext";
import { urlFor } from "@/sanity/sanityImage";
import { useScrollAnimation, fadeUpVariants, slideLeftVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";


const ProjectsPage = () => {

    const { projects, isLoading } = useProjects();
    const heroAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: false, bidirectional: true });
    const projectsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

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
                        className="md:text-5xl text-4xl font-bold text-primary"
                        variants={slideLeftVariants}
                        transition={{ delay: 0.1 }}
                    >
                        Projects
                    </motion.h1>
                    <motion.p
                        className="mt-3 text-lg max-w-xl"
                        variants={fadeUpVariants}
                        transition={{ delay: 0.2 }}
                    >
                        A collection of projects built with passion, precision, and innovation.
                    </motion.p>
                </motion.header>


                {/* New drops */}
                <motion.div
                    ref={projectsAnimation.ref}
                    className="newDrops md:p-12 pb-20 space-y-6"
                    initial="hidden"
                    animate={projectsAnimation.controls}
                    variants={fadeUpVariants}
                >
                    {/* <div className="title">
                        <h2 className="font-bold text-primary">New Drops</h2>
                    </div> */}
                    <motion.div
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2"
                        variants={staggerContainer}
                    >
                        {
                            isLoading ? (
                                Array.from({ length: 4 }).map((_, index) => (
                                    <motion.div
                                        key={index}
                                        variants={staggerItem}
                                    >
                                        <ProjectCard
                                            loading={true}
                                        />
                                    </motion.div>
                                ))
                            )
                                :
                                projects.map((drop, index) => (
                                    <motion.div
                                        key={index}
                                        variants={staggerItem}
                                    >
                                        <ProjectCard
                                            href={`/projects/${drop.slug}`}
                                            imageSrc={urlFor(drop.images[0])}
                                            title={drop.title}
                                            description={drop.summary}
                                        // tag={drop.tags[0]}
                                        />
                                    </motion.div>
                                ))
                        }
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}

export default ProjectsPage