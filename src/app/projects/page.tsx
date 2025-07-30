'use client'
import PageContainer from '@/components/layout/PageContainer'
import { ProjectHeader, ProjectsSection } from "@/components/sections/projects"

const ProjectsPage = () => {
    return (
        <PageContainer
            spacing='sm'
        >
            {/* Header section */}
            <ProjectHeader />

            {/* Projects section */}
            <ProjectsSection />
        </PageContainer>
    )
}

export default ProjectsPage