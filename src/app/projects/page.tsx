'use client'
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, slideLeftVariants } from "@/hooks/useScrollAnimation";
import { ProjectsSection } from "@/components/sections/home";


const ProjectsPage = () => {

    const heroAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: false, bidirectional: true });

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


                {/* Projects section */}
                <div className="mb-20">
                    <ProjectsSection />
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage