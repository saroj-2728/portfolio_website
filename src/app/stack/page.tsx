'use client'

import LinkTiles from "@/components/cards/LinkTiles"
import { designTools, devTools, productivityTools } from "@/constants/home"
import PageContainer from '@/components/layout/PageContainer'

const TechStack = () => {
    return (
        <PageContainer>

            {/* Header section */}
            <header className="me space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Stack
                </h1>
                <p className="mt-3 text-lg max-w-xl">
                    Tools, resources, and software I use daily.
                </p>
            </header>

            {/* Stack */}
            <div className="design space-y-6">
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

            <div className="devevlopment space-y-6">
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

            <div className="productivity space-y-6">
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
        </PageContainer>
    )
}

export default TechStack
