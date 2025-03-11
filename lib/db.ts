import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    query_timeout: 60000, // 60 seconds
});

export interface ServiceType {
    id: string; // UUID as a string
    title: string;
    description: string;
    details: string[]; // Array of details for the service
    created_at: string; // Date of creation
    updated_at: string; // Date of last update
}

// Project Interface based on database schema
export interface Project {
    id: string;
    title: string;
    description: string;
    image_url: string;
    github_url: string;
    tags: string[];
    category: string | null;
    status: string;
    client_name: string;
    technologies: string[];
    created_at: Date;
    updated_at: Date;
    live_url: string | null;
}


export interface ProjectSummary {
    id: string;
    title: string;
    summary: string;
    image_urls: string[];
}


const dummyProjectSummaries: ProjectSummary[] = [
    {
        id: "c8f5d42e-2731-4ada-9c48-923fb51f42a9",
        title: "Fitness Tracker",
        summary: "A mobile app to track fitness goals.",
        image_urls: ["https://res.cloudinary.com/djfns59te/image/upload/v1731397767/defaultProfile_rvgzl9.jpg",]
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440000",
        title: "E-Commerce Platform",
        summary: "A fully functional e-commerce platform.",
        image_urls: ["https://res.cloudinary.com/djfns59te/image/upload/v1734033102/chat_app_profiles/aylei0vfv3hg0vqo1iq8.png",]
    },
    {
        id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        title: "Portfolio Website",
        summary: "A personal portfolio website to showcase projects.",
        image_urls: ["https://res.cloudinary.com/djfns59te/image/upload/v1733227746/chat_app_profiles/i7jqmmkbjzxgfzwvqtha.png",]
    },
    {
        id: "7dc53df5-703e-49b3-8670-b1c468f47f1f",
        title: "Task Management App",
        summary: "A kanban-style task management application.",
        image_urls: ["https://res.cloudinary.com/djfns59te/image/upload/v1732984328/chat_app_profiles/nfe0cxc9hnvf7biytkwf.png",]
    },
    {
        id: "9a52d8c1-4b3f-47ab-b2e3-0cd7a4e8e642",
        title: "Weather Dashboard",
        summary: "An interactive weather dashboard.",
        image_urls: ["https://res.cloudinary.com/djfns59te/image/upload/v1732617126/chat_app_profiles/knv9higllbmfe0tfgi4k.png",]
    }
];


// Dummy data for Projects
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummyProjects: Project[] = [
    {
        id: "c8f5d42e-2731-4ada-9c48-923fb51f42a9",
        title: "Fitness Tracker",
        description: "A mobile application for fitness goals.",
        image_url: "https://res.cloudinary.com/djfns59te/image/upload/v1731397767/defaultProfile_rvgzl9.jpg",
        github_url: "https://github.com/username/fitness-tracker",
        tags: ["mobile", "health", "lifestyle"],
        category: "Mobile App",
        status: "Planning",
        client_name: "FitLife Inc.",
        technologies: ["React Native", "Redux", "Express", "PostgreSQL"],
        created_at: new Date("2024-10-01T14:20:00"),
        updated_at: new Date("2024-10-10T09:30:00"),
        live_url: null
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440000",
        title: "E-Commerce Platform",
        description: "A fully functional e-commerce platform.",
        image_url: "https://res.cloudinary.com/djfns59te/image/upload/v1734033102/chat_app_profiles/aylei0vfv3hg0vqo1iq8.png",
        github_url: "https://github.com/username/ecommerce-platform",
        tags: ["web", "e-commerce", "fullstack"],
        category: "Web Development",
        status: "Completed",
        client_name: "Personal Project",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        created_at: new Date("2024-08-15T10:30:00"),
        updated_at: new Date("2024-10-20T14:45:00"),
        live_url: "https://ecommerce-demo.example.com"
    },
    {
        id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase projects.",
        image_url: "https://res.cloudinary.com/djfns59te/image/upload/v1733227746/chat_app_profiles/i7jqmmkbjzxgfzwvqtha.png",
        github_url: "https://github.com/username/portfolio-site",
        tags: ["portfolio", "frontend", "design"],
        category: "Web Design",
        status: "Completed",
        client_name: "Personal Project",
        technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
        created_at: new Date("2024-06-10T09:15:00"),
        updated_at: new Date("2024-06-25T16:30:00"),
        live_url: "https://portfolio.example.com"
    },
    {
        id: "7dc53df5-703e-49b3-8670-b1c468f47f1f",
        title: "Task Management App",
        description: "A kanban-style task management application.",
        image_url: "https://res.cloudinary.com/djfns59te/image/upload/v1732984328/chat_app_profiles/nfe0cxc9hnvf7biytkwf.png",
        github_url: "https://github.com/username/task-management",
        tags: ["productivity", "webapp", "collaboration"],
        category: "Web Application",
        status: "In Progress",
        client_name: "StartupXYZ",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        created_at: new Date("2024-09-05T11:20:00"),
        updated_at: new Date("2024-10-25T13:40:00"),
        live_url: null
    },
    {
        id: "9a52d8c1-4b3f-47ab-b2e3-0cd7a4e8e642",
        title: "Weather Dashboard",
        description: "An interactive weather dashboard.",
        image_url: "https://res.cloudinary.com/djfns59te/image/upload/v1732617126/chat_app_profiles/knv9higllbmfe0tfgi4k.png",
        github_url: "https://github.com/username/weather-dashboard",
        tags: ["api", "data-viz", "utility"],
        category: "Data Visualization",
        status: "Completed",
        client_name: "Personal Project",
        technologies: ["JavaScript", "D3.js", "OpenWeather API", "Chart.js"],
        created_at: new Date("2024-07-12T08:45:00"),
        updated_at: new Date("2024-08-02T15:10:00"),
        live_url: "https://weather.example.com"
    },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const query = async <T>(text: string, params?: any[]): Promise<T[]> => {
    const res = await pool.query(text, params);
    return dummyProjectSummaries as unknown as T[];
    return res.rows;
};