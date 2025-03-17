export const dynamic = 'force-static'
import { query } from "../../../../lib/db";
import type { Project } from "../../../../lib/db";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
    try {
        const projects: Project[] = await query<Project>('SELECT * FROM services');

        return new Response(JSON.stringify(projects), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    catch (error) {
        console.error("Error fetching projects:", error);
        return new Response(
            JSON.stringify({ error: 'Failed to fetch projects' }),
            { status: 500 }
        );
    }
}