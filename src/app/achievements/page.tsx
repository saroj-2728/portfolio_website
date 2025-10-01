import PageContainer from '@/components/layout/PageContainer'
import { Header } from '@/components/sections';
import { AchievementsTimeline } from "@/components/sections/achievements";

const Achievements = () => {
    return (
        <PageContainer>
            {/* Header section */}
            <Header
                title="Milestones and Achievements"
                description="A showcase of my journey, from educational milestones to professional achievements, awards, and impactful experiences."
            />

            {/* Interactive Tree Timeline */}
            <AchievementsTimeline />

        </PageContainer>
    )
}

export default Achievements