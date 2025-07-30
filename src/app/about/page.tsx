import PageContainer from '@/components/layout/PageContainer'
import { AboutHeader, AboutImage, AboutDescription } from "@/components/sections/about"
import { StackSection } from "@/components/sections/stack";

const AboutMe = () => {
    return (
        <PageContainer
            maxWidth="md"
            spacing="sm"
        >
            {/* Header section */}
            <AboutHeader />

            {/* Image Section */}
            <AboutImage />

            {/* Description */}
            <AboutDescription />

            {/* Stack */}
            <StackSection />
        </PageContainer>
    )
}

export default AboutMe
