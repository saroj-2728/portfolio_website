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


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const query = async <T>(text: string, params?: any[]): Promise<T[]> => {
    try {
        const res = await pool.query(text, params);
        // return dummyProjectSummaries as unknown as T[];
        return res.rows;
    }
    catch (error) {
        console.error("Error executing query:", error);
        return [] as unknown as T[];
    }
};