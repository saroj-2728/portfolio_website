import { RiBarChartBoxAiLine, RiFlowChart } from "react-icons/ri";
import { TbClockCode } from "react-icons/tb";
import { LiaCloudMeatballSolid } from "react-icons/lia";
import { TbBadgeVr } from "react-icons/tb";
import { SiAltiumdesigner } from "react-icons/si";
import { MdMiscellaneousServices, MdOutlineFeed } from "react-icons/md";

interface NewDrops {
    href: string
    imageSrc: string;
    title: string;
    description: string;
    tag: string;
}

interface Thoughts {
    href: string
    mainText: string
    secondaryText: string
    icon: React.ReactNode
}

interface CardNormal {
    icon: React.ReactNode
    title: string
    description: string
    href: string
}

interface Stack extends Omit<Thoughts, "icon"> {
    imageSrc: string
}

export const newDrops: NewDrops[] = [
    {
        href: "#",
        imageSrc: "/images/download.jpg",
        title: "Billify",
        description: "A digital invoice template for designers.",
        tag: "$25"
    },
    {
        href: "#",
        imageSrc: "/images/spidieeeee.jpg",
        title: "Supply",
        description: "Lemonsquezzy-powered digital store template.",
        tag: "$99"
    }
]

export const thoughts: Thoughts[] = [
    {
        href: "#",
        mainText: "Productize Your Design Skills",
        secondaryText: "Business",
        icon: <RiBarChartBoxAiLine className="size-6 bg-icon text-primary p-2 box-content rounded-lg" />
    },
    {
        href: "#",
        mainText: "Freelancing in Digital Design",
        secondaryText: "Business",
        icon: <TbClockCode className="size-6 bg-icon text-primary p-2 box-content rounded-lg" />
    },
    {
        href: "#",
        mainText: "Designing for Shareability",
        secondaryText: "Design",
        icon: <RiFlowChart className="size-6 bg-icon text-primary p-2 box-content rounded-lg" />
    },
    {
        href: "#",
        mainText: "A New Era of Entrepreneurship",
        secondaryText: "Business",
        icon: <LiaCloudMeatballSolid className="size-6 bg-icon text-primary p-2 box-content rounded-lg" />
    },
    {
        href: "#",
        mainText: "The Age of Mobile and VR",
        secondaryText: "Business",
        icon: <TbBadgeVr className="size-6 bg-icon text-primary p-2 box-content rounded-lg" />
    },
    {
        href: "#",
        mainText: "The Evolution of Digital Design",
        secondaryText: "Design",
        icon: <SiAltiumdesigner className="size-6 bg-icon text-primary p-2 box-content rounded-lg" />
    },
]

export const cards: CardNormal[] = [
    {
        icon: <MdOutlineFeed className="size-6 bg-icon text-primary p-2.5 box-content rounded-full" />,
        title: "Feed",
        description: "Dive into my quick thoughts.",
        href: "/feed",
    },
    {
        icon: <MdMiscellaneousServices className="size-6 bg-icon text-primary p-2.5 box-content rounded-full" />,
        title: "Services",
        description: "Explore my range of dev services.",
        href: "/services",
    },
]

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
