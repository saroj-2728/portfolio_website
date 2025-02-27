import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-secondary text-center px-4">
            {/* Large 404 with glitch effect */}
            <h1 className="text-7xl md:text-9xl font-extrabold text-primary relative">
                404
                <span className="absolute top-0 left-0 text-accent animate-ping">404</span>
            </h1>

            <p className="text-lg md:text-xl mt-4 opacity-80">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>

            <Link
                href="/"
                className="mt-12 px-6 py-2 bg-primary text-background text-lg font-medium rounded-lg shadow-md hover:bg-gray-100/60 transition-all duration-[400ms]"
            >
                Return Home
            </Link>
        </div>
    );
}
