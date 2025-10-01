'use client'
import PageContainer from '@/components/layout/PageContainer'
import { Header } from '@/components/sections'
import { ProjectsSection } from "@/components/sections/projects"

const ProjectsPage = () => {
    return (
        <PageContainer
            spacing='sm'
        >
            {/* Header section */}
            <Header
                title="Projects"
                description="A collection of projects built with passion, precision, and innovation."
            />

            {/* Projects section */}
            <ProjectsSection />
        </PageContainer>
    )
}

export default ProjectsPage