import TreeSection from "@/components/ui/TreeSection";
import { educationData, experienceData, awardsData } from "@/constants/achievements";

const Achievements = () => {
    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
                <header className="me md:p-12 md:pb-0 pb-12 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        Milestones and Achievements
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                        A showcase of my journey, from educational milestones to professional achievements, awards, and impactful experiences.
                    </p>
                </header>

                {/* Interactive Tree Timeline */}
                <section className="md:p-12 pb-20">
                    <div className="w-full max-w-6xl mx-auto px-4">
                        <div className="space-y-16 md:space-y-30">

                            {/* Education Section */}
                            <TreeSection
                                title="Education Journey"
                                items={educationData}
                                category="education"
                                defaultExpanded={true}
                            />

                            {/* Experience Section */}
                            <TreeSection
                                title="Professional Experience"
                                items={experienceData}
                                category="experience"
                                defaultExpanded={true}
                            />

                            {/* Awards Section */}
                            <TreeSection
                                title="Achievements & Awards"
                                items={awardsData}
                                category="awards"
                                defaultExpanded={true}
                            />

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Achievements