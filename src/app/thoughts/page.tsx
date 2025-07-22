import PageContainer from '@/components/layout/PageContainer'

const Thoughts = () => {
    return (
        <PageContainer>
            {/* Header section */}
            <header className="me space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                    Thoughts
                </h1>
                <p className="mt-3 text-lg max-w-xl">
                    A selection of ideas and thoughts to inspire, learn, and create.
                </p>
            </header>

            <div className="flex-1 min-h-[30vh] flex justify-center items-center">
                <p>Working on something awesome here --- check back soon!</p>
            </div>
        </PageContainer>
    )
}

export default Thoughts