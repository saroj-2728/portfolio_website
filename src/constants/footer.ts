export interface FooterLink {
    title: string
    href: string
}

const indexLinks: FooterLink[] = [
    {
        title: "Explore",
        href: "/"
    },
    {
        title: "Boutique",
        href: "/boutique"
    },
    {
        title: "Projects",
        href: "/projects"
    },
    {
        title: "Services",
        href: "/services"
    },
    {
        title: "About",
        href: "/about"
    },
]

const productLinks: FooterLink[] = [
    {
        title: "Billify",
        href: "#"
    },
    {
        title: "Supply",
        href: "#"
    },
    {
        title: "Linx",
        href: "#"
    },
    {
        title: "CourseOS",
        href: "#"
    },
]

const ResourcesLinks: FooterLink[] = [
    {
        title: "Feed",
        href: "/feed"
    },
    {
        title: "Thoughts",
        href: "/thoughts"
    },
    {
        title: "Stack",
        href: "/stack"
    },
]

const ConnectLinks: FooterLink[] = [
    {
        title: "Contact",
        href: "/contact"
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/saroj27/"
    },
    {
        title: "GitHub",
        href: "https://www.github.com/saroj-2728"
    },
    {
        title: "X",
        href: "https://x.com/_saroj27"
    },
    {
        title: "Discord",
        href: "https://discord.gg/_saroj_"
    }
]

export const FooterBlock = [
    {
        title: "Index",
        links: indexLinks
    },
    {
        title: "Products",
        links: productLinks
    },
    {
        title: "Resources",
        links: ResourcesLinks
    },
    {
        title: "Connect",
        links: ConnectLinks
    }
]