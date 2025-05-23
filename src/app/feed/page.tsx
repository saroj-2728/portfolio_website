
const Feed = () => {
    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto flex flex-col">
                {/* Header section */}
                <header className="me md:p-12 md:pb-0 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        Feed
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                        Discover, and stay updated through small content bites.
                    </p>
                </header>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
                <p>The feed is warming up. New drops coming soon.</p>
            </div>
        </main>
    )
}

export default Feed
