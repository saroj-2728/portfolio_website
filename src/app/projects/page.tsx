'use client'
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, slideLeftVariants } from "@/hooks/useScrollAnimation";
import { ProjectsSection } from "@/components/sections";
import PageContainer from '@/components/layout/PageContainer'

const ProjectsPage = () => {

    const heroAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: false, bidirectional: true });

    return (
        <PageContainer>
            {/* Header section */}
            <motion.header
                ref={heroAnimation.ref}
                className="space-y-6"
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
            <div>
                <ProjectsSection />
            </div>
        </PageContainer>
    )
}

export default ProjectsPage