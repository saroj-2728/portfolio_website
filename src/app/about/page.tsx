import PageContainer from '@/components/layout/PageContainer'
import { Header } from '@/components/sections';
import { AboutImage, AboutDescription } from "@/components/sections/about"
import { StackSection } from "@/components/sections/stack";
import { techStack } from '@/constants/stack';

const AboutMe = () => {
    return (
        <PageContainer
            maxWidth="md"
            spacing="md"
        >
            {/* Header section */}
            <Header
                title="About Me"
                description="Passionate web developer and problem-solver, turning ideas into seamless digital experiences."
            />

            {/* Image Section */}
            <AboutImage />

            {/* Description */}
            <AboutDescription />

            {/* Stack */}
            <StackSection
                title="Stack"
                description="Software and resources I use on a regular basis."
                tools={techStack}
                showViewAll={true}
            />
        </PageContainer>
    )
}

export default AboutMe
