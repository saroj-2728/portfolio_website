import PageContainer from '@/components/layout/PageContainer'

const Feed = () => {
    return (
        <PageContainer>
            {/* Header section */}
            <header className="me space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                    Feed
                </h1>
                <p className="mt-3 text-lg max-w-xl">
                    Discover, and stay updated through small content bites.
                </p>
            </header>

            <div className="flex-1 min-h-[30vh] flex justify-center items-center">
                <p>The feed is warming up. New drops coming soon.</p>
            </div>
        </PageContainer>
    )
}

export default Feed