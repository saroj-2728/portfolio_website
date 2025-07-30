import PageContainer from '@/components/layout/PageContainer'
import { AchievementsHeader, AchievementsTimeline } from "@/components/sections/achievements";

const Achievements = () => {
    return (
        <PageContainer>
            {/* Header section */}
            <AchievementsHeader />

            {/* Interactive Tree Timeline */}
            <AchievementsTimeline />

        </PageContainer>
    )
}

export default Achievements