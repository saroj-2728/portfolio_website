import { NextResponse } from 'next/server';

const isUnderMaintenance = process.env.MAINTENANCE_MODE === 'true';

export function middleware(request) {
    if (isUnderMaintenance) {
        return new NextResponse('<div style="display:flex; align-items:center; justify-content:center; height: 95vh"> <h1>Site Under Maintenance</h1> </div>', {
            headers: { 'Content-Type': 'text/html' },
        });
    }

    return NextResponse.next();
}
