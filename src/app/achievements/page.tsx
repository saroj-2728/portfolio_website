import TimelineCard from "@/components/ui/TimelineCard";
import { educationData, experienceData } from "@/constants/achievements";

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


                {/* Education Timeline Section */}
                <section className="md:p-12 pb-12">
                    <div className="title mb-6">
                        <h2 className="font-bold text-primary">Education Journey</h2>
                    </div>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-secondary rounded-full" />

                        {/* Timeline Items */}
                        <div className="space-y-6">
                            {educationData.map((item, index) => (
                                <TimelineCard key={index} timelineItem={item} />
                            ))}

                        </div>
                    </div>
                </section>
                

                {/* Experiences */}
                <section className="md:p-12 pt-0 pb-20">
                    <div className="title mb-6">
                        <h2 className="font-bold text-primary">Professional Experiences</h2>
                    </div>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-secondary rounded-full" />

                        {/* Timeline Items */}
                        <div className="space-y-4">
                            {experienceData.map((item, index) => (
                                <TimelineCard key={index} timelineItem={item} />
                            ))}

                        </div>
                    </div>
                </section>


                {/* Awards */}
                {/* <section className="p-12 pt-0 pb-20">
                    <div className="title mb-6">
                        <h2 className="font-bold text-primary">Achievements & Awards</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-secondary rounded-full" />

                        <div className="space-y-4">
                            {experienceData.map((item, index) => (
                                <TimelineCard key={index} timelineItem={item} />
                            ))}

                        </div>
                    </div>
                </section> */}


            </div>
        </main>
    )
}

export default Achievements