import { NextResponse } from 'next/server';
import { client } from '@/sanity/client';
import { SERVICES_QUERY } from "@/sanity/queries";
import type { Service } from "@/types/projectType";

export async function GET() {
    try {
        const services: Service[] = await client.fetch(SERVICES_QUERY, );
        return NextResponse.json(services);
    }
    catch (error) {
        console.error("Sanity fetch failed:", error);
        return new NextResponse(
            "Failed to fetch services",
            { status: 500 });
    }
}
