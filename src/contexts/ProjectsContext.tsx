'use client'
import type { Project } from '../../lib/db'
import { createContext, useContext, useState, useEffect } from 'react';


interface ProjectsContextType {
    projects: Project[];
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
    isLoading: boolean;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider = (
    { children }: { children: React.ReactNode }
) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        try {
            async function fetchProjects() {
                // const res = await fetch('/api/projects', { cache: "no-store" });

                const res = await fetch('/api/projects', {
                    next: { revalidate: 3600 }, // cache and revalidate every 1 hour
                });

                const data: Project[] = await res.json();
                setProjects(data);
                setIsLoading(false);
            }

            fetchProjects();
        }
        catch (error) {
            console.error("Error fetching projects:", error);
        }
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects, setProjects, isLoading }}>
            {children}
        </ProjectsContext.Provider>
    );
};

// Custom hook to use the context
export const useProjects = (): ProjectsContextType => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error('useProjects must be used within a ProjectsProvider');
    }
    return context;
};
