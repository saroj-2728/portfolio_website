'use client'

import { devTools, productivityTools } from "@/constants/stack"
import PageContainer from '@/components/layout/PageContainer'
import { StackHeader, StackSection, SkillGraph } from "@/components/sections/stack"

const TechStack = () => {
    return (
        <PageContainer
            maxWidth="md"
            spacing="md"
        >

            {/* Header section */}
            <StackHeader />

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
