'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"
import { IoCopyOutline } from "react-icons/io5";
import { techStack } from "@/constants/home";
import LinkTiles from "@/components/ui/LinkTiles";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                    <header className="me md:p-12 md:pb-0 pb-12 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">
                            About Me
                        </h1>
                        <p className="mt-3 text-lg">
                            Passionate web developer and problem-solver, turning ideas into seamless digital experiences..
                        </p>
                    </header>

                    {/* Image Section */}
                    <div className="flex justify-start items-center md:p-12 md:pb-0 pb-12">
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
                    <div className="description md:p-12 md:pb-6 pb-12 space-y-6">
                        <p>
                            I&apos;m a web developer with a deep interest in creating efficient and scalable digital solutions. My journey in tech began with a passion for problem-solving, and I&apos;ve developed expertise in both frontend and backend technologies to build functional, user-centered web applications.
                        </p>
                        <p>
                            I strive to bring clarity to complex challenges and create seamless experiences for users. Whether it&apos;s a simple feature or a full-stack project, I focus on delivering high-quality solutions that meet both user and business needs.
                        </p>
                        <p>
                            Outside of coding, I enjoy exploring new tech trends and experimenting with different programming languages. Let&apos;s collaborate and bring your ideas to life through technology.
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
                    {/* <div className="thoughts p-12 pb-0 space-y-6">
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

                            <NewsLetterSubscription
                                mainText="Want more?"
                                secondaryText="Subscribe to my newsletter to get updates on new content."
                                className="rounded-b-md"
                            />
                        </div>
                    </div> */}

                    {/* Stack */}
                    <div className="thoughts md:p-12 pb-20 space-y-6">
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
