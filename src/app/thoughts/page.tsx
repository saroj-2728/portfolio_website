
const Thoughts = () => {
    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
                <header className="me md:p-12 md:pb-0 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        Thoughts
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                        A selection of ideas and thoughts to inspire, learn, and create.
                    </p>
                </header>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
                <p>Working on something awesome here --- check back soon!</p>
            </div>
        </main>
    )
}

export default Thoughts
