import { NextResponse } from 'next/server';
import { client } from '@/sanity/client';
import { PROJECTS_QUERY } from '@/sanity/queries';
import type { Project } from '@/types/projectType';

export async function GET() {
    try {
        const projects: Project[] = await client.fetch(PROJECTS_QUERY);
        return NextResponse.json(projects);
    }
    catch (error) {
        console.error("Sanity fetch failed:", error);
        return new NextResponse(
            "Failed to fetch projects",
            { status: 500 });
    }
}
