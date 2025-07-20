'use client'
// import Link from "next/link"

import LinkTiles from "@/components/cards/LinkTiles"
// import LinkTilesSkeleton from "@/components/skeletons/LinkTilesSkeleton"
// import NewsLetterSubscription from "@/components/NewsLetterSub"

import { designTools, devTools, productivityTools } from "@/constants/home"


const TechStack = () => {
    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">

                {/* Header section */}
                <header className="me md:p-12 md:pb-0 pb-12 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">Stack
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                        Tools, resources, and software I use daily.
                    </p>
                </header>

                {/* Stack */}
                <div className="design md:p-12 md:pb-0 pb-12 space-y-6">
                    <div className="border border-brd rounded-md">
                        <div className="p-3 flex flex-col gap-6">
                            <div className="title p-4 pb-0">
                                <h2 className="font-bold text-primary">Design</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {
                                    designTools.map((item, index) => (
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
                        </div>
                    </div>
                </div>

                <div className="devevlopment md:p-12 md:pb-0 pb-12 space-y-6">
                    <div className="border border-brd rounded-md">
                        <div className="p-3 flex flex-col gap-6">
                            <div className="title p-4 pb-0">
                                <h2 className="font-bold text-primary">Development</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {
                                    devTools.map((item, index) => (
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
                        </div>
                    </div>
                </div>

                <div className="productivity md:p-12 pb-20 space-y-6">
                    <div className="border border-brd rounded-md">
                        <div className="p-3 flex flex-col gap-6">
                            <div className="title p-4 pb-0">
                                <h2 className="font-bold text-primary">Productivity</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {
                                    productivityTools.map((item, index) => (
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
                        </div>
                    </div>
                </div>


                {/* <NewsLetterSubscription
                    mainText="Never miss a new tool"
                    secondaryText="Get notified as soon as I add new tools to my stack."
                    className="m-12 rounded-md border border-brd"
                /> */}

            </div >
        </main >
    )
}

export default TechStack
