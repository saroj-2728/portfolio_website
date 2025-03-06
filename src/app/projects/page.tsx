'use client'
import LinkCard from "@/components/ui/LinkCard";
import LinkCardSkeleton from "@/components/skeletons/LinkCardSkeleton";
import { useProjects } from "@/contexts/ProjectsContext";


const ProjectsPage = () => {

    const { projects, isLoading } = useProjects();

    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
                <header className="me p-12 pb-0 space-y-6">
                    <h1 className="text-5xl font-bold text-primary">
                        Projects
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                        A collection of projects built with passion, precision, and innovation.
                    </p>
                </header>


                {/* New drops */}
                <div className="newDrops p-12 pb-20 space-y-6">
                    {/* <div className="title">
                        <h2 className="font-bold text-primary">New Drops</h2>
                    </div> */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {
                            isLoading ? (
                                Array.from({ length: 4 }).map((_, index) => (
                                    <LinkCardSkeleton key={index} />
                                ))
                            )
                                :
                                projects.map((drop, index) => (
                                    <LinkCard
                                        key={index}
                                        href={`/projecs/${drop.id}`}
                                        imageSrc={drop.image_urls[0]}
                                        title={drop.title}
                                        description={drop.summary}
                                    // tag={drop.tags[0]}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage