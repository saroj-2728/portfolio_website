interface Stack {
    href: string
    mainText: string
    secondaryText: string
    imageSrc: string
}

export interface SkillNodeType {
    id: string;
    name: string;
    category: 'language' | 'framework' | 'database' | 'runtime' | 'systems';
    proficiency: 'beginner' | 'intermediate' | 'advanced';
    description: string;
    position: { x: number; y: number };
    color: string;
    icon: string;
    connections: string[];
}

export const techStack: Stack[] = [
    {
        href: "https://code.visualstudio.com/",
        mainText: "VS Code",
        secondaryText: "Code editor",
        imageSrc: "/images/vscode-logo.png"
    },
    {
        href: "https://react.dev/",
        mainText: "React",
        secondaryText: "Frontend Library",
        imageSrc: "/images/react-logo.png"
    },
    {
        href: "https://nextjs.org/",
        mainText: "Next.js",
        secondaryText: "React Framework for SSR",
        imageSrc: "/images/nextjs-logo.jpeg"
    },
    {
        href: "https://tailwindcss.com/",
        mainText: "Tailwind CSS",
        secondaryText: "CSS Framework",
        imageSrc: "/images/tailwindcss-logo.jpeg"
    },
    {
        href: "https://electronjs.org/",
        mainText: "Electron",
        secondaryText: "Cross-Platform Desktop Apps",
        imageSrc: "/images/electron-logo.jpg"
    },
    {
        href: "https://figma.com/",
        mainText: "Figma",
        secondaryText: "Collaborative design tool",
        imageSrc: "/images/figma-image.png"
    },
];

export const designTools: Stack[] = [
    techStack[5],
];

export const devTools: Stack[] = [
    techStack[0],
    techStack[1],
    techStack[2],
    techStack[3],
    techStack[4],
    {
        href: "https://www.jetbrains.com/webstorm/",
        mainText: "WebStorm",
        secondaryText: "JavaScript and TypeScript IDE",
        imageSrc: "/images/webstorm-image.png"
    },

];

export const productivityTools: Stack[] = [
    {
        href: "https://www.notion.so/",
        mainText: "Notion",
        secondaryText: "All-in-one workspace",
        imageSrc: "/images/notion-logo.png"
    },
    {
        href: "https://github.com/",
        mainText: "GitHub",
        secondaryText: "Code hosting platform",
        imageSrc: "/images/github-logo.jpg"
    },
    {
        href: "https://zoom.com/",
        mainText: "Zoom",
        secondaryText: "Video meetings",
        imageSrc: "/images/zoom-logo.png"
    },
    techStack[5],
];

export const skills: SkillNodeType[] = [
    // Languages
    {
        id: 'javascript',
        name: 'JavaScript',
        category: 'language',
        proficiency: 'advanced',
        description: 'Dynamic programming language for web development',
        position: { x: 50, y: 70 },
        color: 'from-yellow-400 to-yellow-600',
        icon: '🟨',
        connections: ['typescript', 'react', 'nextjs', 'nodejs', 'express']
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        category: 'language',
        proficiency: 'intermediate',
        description: 'Strongly typed JavaScript superset',
        position: { x: 50, y: 30 },
        color: 'from-blue-400 to-blue-600',
        icon: '🔷',
        connections: ['javascript', 'react', 'nextjs', 'nodejs']
    },

    // Frontend Frameworks
    {
        id: 'react',
        name: 'React.js',
        category: 'framework',
        proficiency: 'advanced',
        description: 'Component-based UI library',
        position: { x: 10, y: 50 },
        color: 'from-cyan-400 to-cyan-600',
        icon: '⚛️',
        connections: ['javascript', 'typescript', 'nextjs']
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        category: 'framework',
        proficiency: 'advanced',
        description: 'Full-stack React framework',
        position: { x: 20, y: 80 },
        color: 'from-gray-700 to-gray-900',
        icon: '▲',
        connections: ['react', 'javascript', 'typescript']
    },

    // Backend
    {
        id: 'nodejs',
        name: 'Node.js',
        category: 'runtime',
        proficiency: 'intermediate',
        description: 'JavaScript runtime for server-side development',
        position: { x: 80, y: 80 },
        color: 'from-green-400 to-green-600',
        icon: '🟢',
        connections: ['javascript', 'typescript', 'express', 'mongodb', 'postgresql']
    },
    {
        id: 'express',
        name: 'Express.js',
        category: 'framework',
        proficiency: 'advanced',
        description: 'Minimal web framework for Node.js',
        position: { x: 90, y: 50 },
        color: 'from-gray-600 to-gray-800',
        icon: '🚂',
        connections: ['nodejs', 'javascript', 'mongodb', 'postgresql']
    },

    // Databases
    {
        id: 'mongodb',
        name: 'MongoDB',
        category: 'database',
        proficiency: 'intermediate',
        description: 'NoSQL document database',
        position: { x: 20, y: 20 },
        color: 'from-green-500 to-green-700',
        icon: '🍃',
        connections: ['nodejs', 'express']
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        category: 'database',
        proficiency: 'beginner',
        description: 'Advanced relational database',
        position: { x: 80, y: 20 },
        color: 'from-blue-600 to-indigo-600',
        icon: '🐘',
        connections: ['express', 'nodejs']
    },
];