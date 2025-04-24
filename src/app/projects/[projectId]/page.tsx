'use client'
import { use } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'

import { FaGithub } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5';

import { useProjects } from '@/contexts/ProjectsContext'


const ProjectPage = ({
    params
}: {
    params: Promise<{ projectId: string }>
}) => {

    const { projectId } = use(params)
    const { projects } = useProjects()

    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    const project = projects.find(pjt => pjt.id == projectId)

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

    const currentIndex = projects.findIndex(pjt => pjt.id == projectId);
    const [firstIndex, secondIndex] = getTwoRandomIndexes(projects.length, currentIndex);


    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
                <header className="me md:p-12 md:pb-0 pb-12">
                    <h1 className="md:text-5xl text-4xl font-bold text-primary">
                        {project?.title}
                    </h1>
                    <p className="mt-2 text-lg max-w-xl">
                        {project?.summary}
                    </p>
                </header>


                <div className="w-full mx-auto">
                    {/* Images Section */}
                    <div className="p-12 pb-0 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {
                            project?.image_urls.map((url, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(url)}
                                    className="overflow-hidden md:h-60 h-48 border border-brd rounded-md">
                                    <Image
                                        src={url}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover object-center rounded-md cursor-pointer"
                                        alt="Image of the project"
                                    />
                                </div>
                            ))
                        }
                    </div>

                    {selectedImage && (
                        <ImageViewer
                            imageUrl={selectedImage}
                            onClose={() => setSelectedImage(null)}
                        />
                    )}


                    {/* Description */}
                    <div className='p-12 pb-0'>
                        <h3 className='text-3xl text-primary font-semibold'>
                            Overview
                        </h3>

                        <p className='mt-4 text-sm text-secondary'>
                            {project?.description}
                        </p>
                        <ul className='mt-4 text-sm text-secondary list-disc list-inside'>
                            {
                                project?.features.map((feature, index) => (
                                    <li key={index} className='mt-2 text-sm text-secondary'>
                                        {feature}
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="btns mt-8 flex gap-4">
                            <Link
                                href={project?.github_url || ""}
                                className="flex items-center justify-center gap-2 px-3 py-2 font-medium text-black bg-primary rounded-md hover:opacity-60 transition duration-[400ms]"
                            >
                                <FaGithub className='size-6' />
                                <span>View on GitHub</span>
                            </Link>

                            {project?.live_url &&
                                project?.live_url !== "" &&
                                <Link
                                    href={project?.live_url || ""}
                                    className="flex items-center justify-center gap-2 border border-brd px-3 py-2 font-medium rounded-md hover:bg-btn-secondary hover:opacity-60 transition duration-[400ms]"
                                >
                                    🌐 View Live
                                </Link>
                            }
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div className='suggestions p-12 pb-20'>
                        {(firstIndex !== -1 || secondIndex !== -1) && (
                            <>
                                <h5 className='text-primary text-xl font-semibold'>
                                    Other Projects
                                </h5>

                                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                    {[firstIndex, secondIndex].map((index) => {
                                        if (index === -1) return null;

                                        const project = projects[index];

                                        return (
                                            <Link
                                                key={project.id}
                                                href={`/projects/${project.id}`}
                                                className="w-full rounded-md bg-accent border border-brd group overflow-hidden"
                                            >
                                                <div>
                                                    <div className="overflow-hidden md:h-58 h-48">
                                                        <Image
                                                            src={project.image_urls[0]}
                                                            width={500}
                                                            height={500}
                                                            className="w-full h-full object-cover object-center rounded-t-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                                            alt={`Image of ${project.title}`}
                                                        />
                                                    </div>
                                                    <div className="p-4 flex flex-nowrap justify-between items-end">
                                                        <div>
                                                            <h3 className="text-sm font-bold text-primary">{project.title}</h3>
                                                            <p className="text-sm text-secondary">{project.summary}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </>
                        )}
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
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 transition-opacity duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white text-3xl hover:opacity-70 cursor-pointer"
                aria-label="Close"
            >
                <IoClose />
            </button>

            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-4xl h-[80vh] rounded-md overflow-hidden transform transition-transform duration-300 ${
                    visible ? 'scale-100' : 'scale-95'
                }`}
            >
                <Image
                    src={imageUrl}
                    alt="Enlarged project image"
                    layout="fill"
                    className="object-contain border border-brd"
                />
            </div>
        </div>
    )
}