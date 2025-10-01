import PageContainer from '@/components/layout/PageContainer'
import { Header } from '@/components/sections'

const Feed = () => {
    return (
        <PageContainer>
            {/* Header section */}
            <Header
                title="Feed"
                description="Discover, and stay updated through small content bites."
            />

            <div className="flex-1 min-h-[30vh] flex justify-center items-center">
                <p>The feed is warming up. New drops coming soon.</p>
            </div>
        </PageContainer>
    )
}

export default Feed