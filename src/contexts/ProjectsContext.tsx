'use client'
import type { ProjectSummary } from '../../lib/db'
import { createContext, useContext, useState, useEffect } from 'react';


interface ProjectsContextType {
    projects: ProjectSummary[];
    setProjects: React.Dispatch<React.SetStateAction<ProjectSummary[]>>;
    isLoading: boolean;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider = (
    { children }: { children: React.ReactNode }
) => {
    const [projects, setProjects] = useState<ProjectSummary[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        try {
            async function fetchProjects() {
                const res = await fetch('/api/projects', { cache: "no-store"});
                const data: ProjectSummary[] = await res.json();
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
