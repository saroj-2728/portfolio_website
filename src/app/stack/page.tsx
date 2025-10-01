'use client'

import { devTools, productivityTools } from "@/constants/stack"
import PageContainer from '@/components/layout/PageContainer'
import { Header } from "@/components/sections"
import { StackSection, SkillGraph } from "@/components/sections/stack"

const TechStack = () => {
    return (
        <PageContainer
            maxWidth="md"
            spacing="md"
        >

            {/* Header section */}
            <Header
                title="Stack"
                description="A selection of technologies and tools that I work with."
            />

            {/* Tool sections */}
            <StackSection
                title="Development"
                tools={devTools}
            />

            <StackSection
                title="Productivity"
                tools={productivityTools}
            />

            {/* Skill Graph */}
            <SkillGraph />

        </PageContainer>
    )
}

export default TechStack
