import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface Project {
    _id: string;
    category: string | null;
    clientName: string;
    createdAt: Date;
    description: string;
    features: string[];
    githubUrl: string;
    images: SanityImageObject[];
    liveUrl: string | null;
    slug: string;
    status: string;
    summary: string;
    tags: string[];
    technologies: string[];
    title: string;
    updatedAt: Date;
}

export interface Service {
    _id: string;
    createdAt: Date;
    description: string;
    details: string[];
    title: string;
    updatedAt: Date;
}