'use client'
import LinkTiles from "@/components/ui/LinkTiles"
import LinkTilesSkeleton from "@/components/skeletons/LinkTilesSkeleton"
// import Link from "next/link"
import { techStack } from "@/constants/home"
import NewsLetterSubscription from "@/components/NewsLetterSub"

const TechStack = () => {
    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">

                {/* Header section */}
                <header className="me p-12 pb-0 space-y-6">
                    <h1 className="text-5xl font-bold text-primary">Stack
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                        Tools, Resources, and software I use daily.
                    </p>
                </header>

                {/* Stack */}
                <div className="thoughts p-12 pb-0 space-y-6">
                    <div className="border border-brd rounded-md">
                        <div className="p-3 flex flex-col gap-6">
                            <div className="title p-4 pb-0">
                                <h2 className="font-bold text-primary">Design</h2>
                                {/* <p>Software and resources I use on a regular basis.</p> */}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {
                                    techStack.slice(4).map((item, index) => (
                                        <LinkTiles
                                            key={index}
                                            href={item.href}
                                            mainText={item.mainText}
                                            secondaryText={item.secondaryText}
                                            imageSrc={item.imageSrc}
                                        />
                                    ))
                                }
                                <LinkTilesSkeleton />
                                <LinkTilesSkeleton />
                            </div>
                            {/* <div className="p-3 pt-0 flex items-center justify-center w-full">
                                <Link
                                    href="/stack"
                                    className="text-primary w-full text-center border border-brd rounded-md hover:opacity-70 transition duration-[400ms]"
                                >
                                    <div
                                        className="py-2 w-full bg-accent"
                                    >
                                        View all
                                    </div>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="thoughts p-12 pb-0 space-y-6">
                    <div className="border border-brd rounded-md">
                        <div className="p-3 flex flex-col gap-6">
                            <div className="title p-4 pb-0">
                                <h2 className="font-bold text-primary">Productivity</h2>
                                {/* <p>Software and resources I use on a regular basis.</p> */}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {
                                    techStack.map((item, index) => (
                                        <LinkTiles
                                            key={index}
                                            href={item.href}
                                            mainText={item.mainText}
                                            secondaryText={item.secondaryText}
                                            imageSrc={item.imageSrc}
                                        />
                                    ))
                                }
                            </div>
                            {/* <div className="p-3 pt-0 flex items-center justify-center w-full">
                                <Link
                                    href="/stack"
                                    className="text-primary w-full text-center border border-brd rounded-md hover:opacity-70 transition duration-[400ms]"
                                >
                                    <div
                                        className="py-2 w-full bg-accent"
                                    >
                                        View all
                                    </div>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="thoughts p-12 pb-0 space-y-6">
                    <div className="border border-brd rounded-md">
                        <div className="p-3 flex flex-col gap-6">
                            <div className="title p-4 pb-0">
                                <h2 className="font-bold text-primary">Deployment</h2>
                                {/* <p>Software and resources I use on a regular basis.</p> */}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {
                                    techStack.slice(2).map((item, index) => (
                                        <LinkTiles
                                            key={index}
                                            href={item.href}
                                            mainText={item.mainText}
                                            secondaryText={item.secondaryText}
                                            imageSrc={item.imageSrc}
                                        />
                                    ))
                                }
                            </div>
                            {/* <div className="p-3 pt-0 flex items-center justify-center w-full">
                                <Link
                                    href="/stack"
                                    className="text-primary w-full text-center border border-brd rounded-md hover:opacity-70 transition duration-[400ms]"
                                >
                                    <div
                                        className="py-2 w-full bg-accent"
                                    >
                                        View all
                                    </div>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="thoughts p-12 pb-0 space-y-6">
                    <div className="border border-brd rounded-md">
                        <div className="p-3 flex flex-col gap-6">
                            <div className="title p-4 pb-0">
                                <h2 className="font-bold text-primary">Artificial Intelligence</h2>
                                {/* <p>Software and resources I use on a regular basis.</p> */}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {
                                    techStack.slice(4).map((item, index) => (
                                        <LinkTiles
                                            key={index}
                                            href={item.href}
                                            mainText={item.mainText}
                                            secondaryText={item.secondaryText}
                                            imageSrc={item.imageSrc}
                                        />
                                    ))
                                }
                            </div>
                            {/* <div className="p-3 pt-0 flex items-center justify-center w-full">
                                <Link
                                    href="/stack"
                                    className="text-primary w-full text-center border border-brd rounded-md hover:opacity-70 transition duration-[400ms]"
                                >
                                    <div
                                        className="py-2 w-full bg-accent"
                                    >
                                        View all
                                    </div>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>

                <NewsLetterSubscription
                    mainText="Never miss a new tool"
                    secondaryText="Get notified as soon as I add new tools to my stack."
                    className="m-12 rounded-md border border-brd"
                />

            </div >
        </main >
    )
}

export default TechStack
