'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image"
import { IoCopyOutline } from "react-icons/io5";
import { techStack } from "@/constants/home";
import LinkTiles from "@/components/cards/LinkTiles";
import Link from "next/link";
import { useScrollAnimation, fadeUpVariants, slideLeftVariants, scaleVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import PageContainer from '@/components/layout/PageContainer'

const AboutMe = () => {
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const heroAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: false, bidirectional: true });
    const imageAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });
    const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });
    const stackAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

    return (
        <PageContainer
            maxWidth="md"
            spacing="sm"
        >
            {/* Header section */}
            <motion.header
                ref={heroAnimation.ref}
                className="space-y-6"
                initial="hidden"
                animate={heroAnimation.controls}
                variants={fadeUpVariants}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-primary"
                    variants={slideLeftVariants}
                    transition={{ delay: 0.1 }}
                >
                    About Me
                </motion.h1>
                <motion.p
                    className="mt-3 text-lg"
                    variants={fadeUpVariants}
                    transition={{ delay: 0.2 }}
                >
                    Passionate web developer and problem-solver, turning ideas into seamless digital experiences.
                </motion.p>
            </motion.header>

            {/* Image Section */}
            <motion.div
                ref={imageAnimation.ref}
                className="flex justify-start items-center"
                initial="hidden"
                animate={imageAnimation.controls}
                variants={scaleVariants}
            >
                <div className="image h-full w-full">
                    <Image
                        src="https://res.cloudinary.com/djfns59te/image/upload/v1745613321/IMG_6813_1_1_i1kmwm.jpg"
                        alt="About Me"
                        width={500}
                        height={500}
                        priority={true}
                        className="object-cover rounded-lg h-full w-full"
                    />
                </div>
            </motion.div>

            {/* Description */}
            <motion.div
                ref={descriptionAnimation.ref}
                className="space-y-6"
                initial="hidden"
                animate={descriptionAnimation.controls}
                variants={staggerContainer}
            >
                <motion.p variants={staggerItem}>
                    I&apos;m a web developer with a deep interest in creating efficient and scalable digital solutions. My journey in tech began with a passion for problem-solving, and I&apos;ve developed expertise in both frontend and backend technologies to build functional, user-centered web applications.
                </motion.p>
                <motion.p variants={staggerItem}>
                    I strive to bring clarity to complex challenges and create seamless experiences for users. Whether it&apos;s a simple feature or a full-stack project, I focus on delivering high-quality solutions that meet both user and business needs.
                </motion.p>
                <motion.p variants={staggerItem}>
                    Outside of coding, I enjoy exploring new tech trends and experimenting with different programming languages. Let&apos;s collaborate and bring your ideas to life through technology.
                </motion.p>

                <motion.div
                    className="flex items-center space-x-4 text-sm"
                    variants={staggerItem}
                >
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
                </motion.div>
            </motion.div>

            {/* Stack */}
            <motion.div
                ref={stackAnimation.ref}
                className="space-y-6"
                initial="hidden"
                animate={stackAnimation.controls}
                variants={fadeUpVariants}
            >
                <motion.div
                    className="border border-brd rounded-md"
                    variants={scaleVariants}
                >
                    <div className="p-3 flex flex-col gap-6">
                        <motion.div
                            className="title p-4 pb-0"
                            variants={slideLeftVariants}
                        >
                            <h2 className="font-bold text-primary">Stack</h2>
                            <p>Software and resources I use on a regular basis.</p>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2"
                            variants={staggerContainer}
                        >
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
                        </motion.div>
                        <motion.div
                            className="p-3 pt-0 flex items-center justify-center w-full rounded-md"
                            variants={fadeUpVariants}
                        >
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
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </PageContainer>
    )
}

export default AboutMe
