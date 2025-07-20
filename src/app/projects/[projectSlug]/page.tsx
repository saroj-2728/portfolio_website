'use client'
import { use } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'

import { FaGithub } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5';

import { useProjects } from '@/contexts/ProjectsContext'
import ProjectCard from '@/components/cards/ProjectCard'

import ImageSkeleton from '@/components/skeletons/ImageSkeleton'
import LinkCardSkeleton from '@/components/skeletons/LinkCardSkeleton'

import { urlFor } from '@/sanity/sanityImage'


const ProjectPage = ({
    params
}: {
    params: Promise<{ projectSlug: string }>
}) => {

    const { projectSlug } = use(params)
    const { projects, isLoading } = useProjects()

    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    const project = projects.find(pjt => pjt.slug == projectSlug)

    function getTwoRandomIndexes(length: number, excludeIndex?: number): [number, number] {
        if (length === 0 || length === 1) return [-1, -1];

        if (length === 2) {
            const first = excludeIndex === 0 ? 1 : 0;
            return [first, -1];
        }

        let first = Math.floor(Math.random() * length);
        while (first === excludeIndex) {
            first = Math.floor(Math.random() * length);
        }

        let second = Math.floor(Math.random() * length);
        while (second === first || second === excludeIndex) {
            second = Math.floor(Math.random() * length);
        }

        return [first, second];
    }

    const currentIndex = projects.findIndex(pjt => pjt.slug == projectSlug);
    const [firstIndex, secondIndex] = getTwoRandomIndexes(projects.length, currentIndex);


    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
                {isLoading ?
                    <div className="md:p-12 md:pb-0 pb-12 animate-pulse">
                        <h1 className="md:text-5xl text-4xl h-10 md:h-12 md:w-xs w-1/2 font-bold bg-gray-700/50 rounded-md" />
                        <p className="mt-2 text-lg h-7 md:w-lg w-2/3 bg-gray-700/50 rounded-md" />
                    </div>
                    :
                    <header className="md:p-12 md:pb-0 pb-12">
                        <h1 className="md:text-5xl text-4xl font-bold text-primary">
                            {project?.title}
                        </h1>
                        <p className="mt-2 text-lg max-w-xl">
                            {project?.summary}
                        </p>
                    </header>
                }


                {/* Images Section */}
                <div className="md:p-12 md:pb-0 pb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {
                        isLoading ? (
                            Array.from({ length: 3 }).map((_, index) => (
                                <ImageSkeleton key={index} />
                            ))
                        )
                            :
                            project?.images.map((image, index) => {
                                const imageUrl = urlFor(image);

                                return <div
                                    key={index}
                                    onClick={() => setSelectedImage(imageUrl)}
                                    className="overflow-hidden md:h-60 h-48 border border-brd rounded-md">
                                    <Image
                                        src={imageUrl}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover object-center rounded-md cursor-pointer"
                                        alt="Image of the project"
                                    />
                                </div>
                            })
                    }
                </div>

                {selectedImage && (
                    <ImageViewer
                        imageUrl={selectedImage}
                        onClose={() => setSelectedImage(null)}
                    />
                )}


                {/* Description */}
                <div className='md:p-12 md:pb-0 pb-12'>
                    <h3 className='text-2xl md:text-3xl text-primary font-semibold'>
                        Overview
                    </h3>

                    <div className={`mt-4 text-sm text-secondary ${isLoading ? "space-y-2" : ""}`}>
                        {
                            isLoading ?
                                (
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <p
                                            key={index}
                                            className='w-full rounded text-sm h-4 bg-gray-700/50 animate-pulse'
                                        />
                                    ))
                                )
                                :
                                <p>{project?.description}</p>
                        }
                    </div>
                    <ul className={`mt-4 text-sm text-secondary list-disc list-inside ${isLoading ? "space-y-3" : ""}`}>
                        {
                            isLoading ?
                                (
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <p
                                            key={index}
                                            className='w-3/4 md:w-1/2 rounded text-sm h-4 bg-gray-700/50 animate-pulse'
                                        />
                                    ))
                                )
                                :
                                project?.features.map((feature, index) => (
                                    <li key={index} className='mt-2 text-sm text-secondary'>
                                        {feature}
                                    </li>
                                ))
                        }
                    </ul>

                    <div className="btns text-sm mt-8 flex gap-4">
                        <Link
                            href={project?.githubUrl || ""}
                            target='_blank'
                            className="flex items-center justify-center gap-2 px-3 py-2 font-medium text-black bg-primary rounded-md hover:opacity-60 transition duration-[400ms]"
                        >
                            <FaGithub className='size-6' />
                            <span>View on GitHub</span>
                        </Link>

                        {project?.liveUrl &&
                            project?.liveUrl !== "" &&
                            <Link
                                href={project?.liveUrl || "#"}
                                target={`${isLoading ? "" : "_blank"}`}
                                className="flex items-center justify-center gap-2 border border-brd px-3 py-2 font-medium rounded-md hover:bg-btn-secondary hover:opacity-60 transition duration-[400ms]"
                            >
                                🌐 View Live
                            </Link>
                        }
                    </div>
                </div>

                {/* Suggestions */}
                <div className='suggestions md:p-12 pb-20'>
                    <h5 className='text-primary text-base font-semibold'>
                        Other Projects
                    </h5>
                    <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {
                            isLoading ?
                                (
                                    Array.from({ length: 2 }).map((_, index) => (
                                        <LinkCardSkeleton key={index} />
                                    ))
                                )
                                :
                                (firstIndex !== -1 || secondIndex !== -1) && (
                                    [firstIndex, secondIndex].map((index) => {
                                        if (index === -1) return null;

                                        const project = projects[index];

                                        return (
                                            <ProjectCard
                                                key={index}
                                                href={`/projects/${project.slug}`}
                                                imageSrc={urlFor(project.images[0])}
                                                title={project.title}
                                                description={project.summary}
                                            />
                                        );
                                    })
                                )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectPage



const ImageViewer = ({
    imageUrl,
    onClose
}: {
    imageUrl: string;
    onClose: () => void;
}) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10)
        return () => clearTimeout(timeout)
    }, [])

    const handleClose = () => {
        setVisible(false)
        setTimeout(onClose, 400) // the transition duration
    }

    return (
        <div
            onClick={handleClose}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white text-3xl hover:opacity-60 cursor-pointer"
                aria-label="Close"
            >
                <IoClose />
            </button>

            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative px-4 max-w-4xl max-h-[80vh] transform transition-transform duration-300 ${visible ? 'scale-100' : 'scale-95'}`}
            >
                <div className="inline-block border border-brd rounded-md overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt="Enlarged project image"
                        className="object-contain max-h-[75vh] max-w-full"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 90vw, 800px"
                    />
                </div>
            </div>
        </div>
    )
}