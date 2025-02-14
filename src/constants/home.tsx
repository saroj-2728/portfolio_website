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
        href: "#",
    },
    {
        icon: <MdMiscellaneousServices className="size-6 bg-icon text-primary p-2.5 box-content rounded-full" />,
        title: "Design Services",
        description: "Explore my range of design services.",
        href: "#"
    },
]

export const techStack: Stack[] = [
    {
        href: "#",
        mainText: "Lemon Squezzy",
        secondaryText: "Payment Platform",
        imageSrc: "/images/spidieeeee.jpg"
    },
    {
        href: "#",
        mainText: "Framer",
        secondaryText: "Web Design Platform",
        imageSrc: "/images/spidieeeee.jpg"
    },
    {
        href: "#",
        mainText: "Cron",
        secondaryText: "Calendar",
        imageSrc: "/images/spidieeeee.jpg"
    },
    {
        href: "#",
        mainText: "Figma",
        secondaryText: "Design Tool",
        imageSrc: "/images/spidieeeee.jpg"
    },
    {
        href: "#",
        mainText: "Arc",
        secondaryText: "Browser",
        imageSrc: "/images/spidieeeee.jpg"
    },
    {
        href: "#",
        mainText: "Typefully",
        secondaryText: "Writer and Scheduler for Twitter/X",
        imageSrc: "/images/spidieeeee.jpg"
    },
]