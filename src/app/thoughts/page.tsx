import LinkCard from "@/components/ui/LinkCard";
import { newDrops } from "@/constants/home";

const Thoughts = () => {
    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
                <header className="me p-12 pb-0 space-y-6">
                    <h1 className="text-5xl font-bold text-primary">
                        Thoughts
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                       A selection of ideas and thoughts to inspire, learn, and create.
                    </p>
                </header>


                {/* New drops */}
                <div className="newDrops p-12 pb-20 space-y-6">
                    {/* <div className="title">
                        <h2 className="font-bold text-primary">New Drops</h2>
                    </div> */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {
                            newDrops.map((drop, index) => (
                                <LinkCard
                                    key={index}
                                    href={drop.href}
                                    imageSrc={drop.imageSrc}
                                    title={drop.title}
                                    description={drop.description}
                                    tag={drop.tag}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Thoughts
