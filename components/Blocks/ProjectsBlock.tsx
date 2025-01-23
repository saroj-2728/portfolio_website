'use client'

import Link from 'next/link'
import Image from 'next/image'

import type { Project } from '@/app/page'

const ProjectsBlock = ({ projects }: { projects: Project[] }) => {
    return (
        <>
            {
                projects.length > 0
                    ?
                    projects?.map((project, index) => (
                        <div
                            key={index}
                            className="border border-grayish flex flex-col justify-between"
                        >
                            <div className="image">
                                {/* Image */}
                                <Image
                                    src={project?.imageSrc}
                                    height={400}
                                    width={400}
                                    alt="Project Image"
                                    className="object-cover w-full"
                                />
                                {/* Tech Stack */}
                                <div className="techStack py-2 border-y border-grayish px-2 text-grayish">
                                    {project?.techStack?.map((item, index) => (
                                        <span key={index}>{item + ' '}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="info p-4 space-y-3 text-grayish">
                                <h3 className="text-2xl text-white">{project?.name}</h3>
                                <p>{project?.description}</p>
                                <div className="flex flex-row items-center justify-start">
                                    <Link
                                        href={project?.liveLink}
                                        className="border border-primary hover:bg-primary/15 py-1.5 px-3 transition duration-300 text-white"
                                    >
                                        Live {'->'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-grayish'>
                        <p>No Projects available</p>
                    </div>
            }
        </>
    )
}

export default ProjectsBlock
