export interface ServiceType {
    title: string;
    description: string;
    details: string[]
}

export const services: ServiceType[] = [
    {
        title: "Web Development",
        description: "Building responsive, high-performance websites that cater to your specific needs and deliver an exceptional user experience.",
        details: [
            "Custom web development",
            "Responsive design",
            "Frontend and backend solutions",
            "Ongoing maintenance and support"
        ]
    },
    {
        title: "Web Design",
        description: "Crafting visually stunning and user-friendly websites that captivate audiences and ensure seamless navigation across all devices.",
        details: [
            "UI/UX design",
            "Custom website design",
            "Responsive and mobile-first design",
            "Landing pages and blogs",
        ]
    },
    {
        title: "Desktop Apps with Electron",
        description: "Transforming your web applications into fully functional cross-platform desktop apps using Electron, designed to run seamlessly on Windows, macOS, and Linux.",
        details: [
            "Cross-platform desktop app development",
            "Electron.js integration",
            "Custom desktop UI design",
            "App packaging and deployment"
        ]
    },
    {
        title: "API Development",
        description: "Creating robust and scalable RESTful APIs that power your applications, ensuring smooth data exchange and integration with third-party services.",
        details: [
            "Backend API development",
            "Authentication and security",
            "Database integration",
            "Optimization and scalability"
        ]
    },
]
