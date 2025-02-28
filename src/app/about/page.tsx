'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"
import { IoCopyOutline } from "react-icons/io5";
import { techStack, thoughts } from "@/constants/home";
import LinkTiles from "@/components/ui/LinkTiles";
import NewsLetterSubscription from "@/components/NewsLetterSub";
import Link from "next/link";

const AboutMe = () => {

    const router = useRouter();

    const [copied, setCopied] = useState(false)

    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                <div className="max-w-[760px] w-full mx-auto">
                    {/* Header section */}
                    <header className="me p-12 pb-0 space-y-6">
                        <h1 className="text-5xl font-bold text-primary">
                            About Me
                        </h1>
                        <p className="mt-3 text-lg">
                            From Seattle&apos;s heart, Jackson Carter is a seasoned web designer blending storytelling and digital artistry. With over a decade in the field, he masterfully combines compelling visuals with design.
                        </p>
                    </header>

                    {/* Image Section */}
                    <div className="flex justify-start items-center p-12 pb-0">
                        <div className="image h-full w-full">
                            <Image
                                src="/images/download.jpg"
                                alt="About Me"
                                width={500}
                                height={500}
                                className="object-cover rounded-lg h-full w-full"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="description p-12 pb-6 space-y-6">
                        <p>
                            Jackson began his journey in the digital space as a self-taught enthusiast, diving deep into the intricacies of design and the limitless potential of the web. After attaining his degree in Web Development from the University of Washington, he decided to embark on a mission to transform the web, one site at a time.
                        </p>
                        <p>
                            His work is a fusion of modern aesthetics and time-honored design principles, resulting in websites that are not just platforms but experiences. With a firm belief that a website is the digital face of a brand, Jackson takes great pride in ensuring every site reflects the unique story and essence of its owner.
                        </p>
                        <p>
                            Clients praise Jackson for his unwavering commitment to quality, his attention to detail, and his ability to translate complex ideas into stunning web realities. When he&apos;s not decoding the latest design trends or mastering new programming languages, you can find Jackson hiking the Pacific Northwest trails or capturing the beauty of the Emerald City through his photography.
                        </p>
                        <p>
                            Choosing Jackson Carter means choosing a vision, a passion, and a commitment to digital excellence. Let&apos;s build something beautiful together.
                        </p>

                        <div className="flex items-center space-x-4 text-sm">
                            <button
                                onClick={() => router.push("/services")}
                                className="px-6 py-2.5 font-semibold bg-btn-primary text-background rounded-md hover:opacity-60 transition duration-[400ms] cursor-pointer"
                            >
                                What I do
                            </button>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText("sp0710412@gmail.com")
                                    setCopied(true)
                                    setTimeout(() => setCopied(false), 2000)
                                }}
                                className="px-6 py-2.5 font-semibold text-primary border border-brd rounded-lg text-center align-middle hover:bg-btn-secondary hover:opacity-60 transition duration-[400ms] cursor-pointer"
                            >
                                <IoCopyOutline className={`size-4 text-secondary inline-block`} /> <span className={`${copied ? "text-secondary" : ""} `}>{copied ? "Copied" : "E-mail"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Thoughts */}
                    <div className="thoughts p-12 pb-0 space-y-6">
                        <div className="border border-brd rounded-md">
                            <div className="p-3 flex flex-col gap-6">
                                <div className="title p-4 pb-0">
                                    <h2 className="font-bold text-primary">Thoughts</h2>
                                    <p>Sharing experiences, knowledge and videos on design & tech.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {
                                        thoughts.map((thought, index) => (
                                            <LinkTiles
                                                key={index}
                                                href={thought.href}
                                                mainText={thought.mainText}
                                                secondaryText={thought.secondaryText}
                                                icon={thought.icon}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            {/* NewsLetter Subscription */}
                            <NewsLetterSubscription
                                mainText="Want more?"
                                secondaryText="Subscribe to my newsletter to get updates on new content."
                                className="rounded-b-md"
                            />
                        </div>
                    </div>

                    {/* Stack */}
                    <div className="thoughts p-12 pb-20 space-y-6">
                        <div className="border border-brd rounded-md">
                            <div className="p-3 flex flex-col gap-6">
                                <div className="title p-4 pb-0">
                                    <h2 className="font-bold text-primary">Stack</h2>
                                    <p>Software and resources I use on a regular basis.</p>
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
                                <div className="p-3 pt-0 flex items-center justify-center w-full rounded-md">
                                    <Link
                                        href="/stack"
                                        className="text-primary w-full text-center border border-brd rounded-md hover:bg-btn-secondary hover:opacity-60 transition duration-[400ms]"
                                    >
                                        <div
                                            className="py-2 w-full"
                                        >
                                            View all
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe
