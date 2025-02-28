export interface ServiceType {
    title: string;
    description: string;
    details: string[]
}

export const services: ServiceType[] = [
    {
        title: "Web Design",
        description: "We design and develop websites that are visually appealing and user-friendly.",
        details: [
            "Custom web design",
            "Responsive design",
            "UI/UX design",
            "E-commerce design",
            "Website maintenance"
        ]
    },
    {
        title: "Branding",
        description: "We create unique brand identities that resonate with your target audience.",
        details: [
            "Logo design",
            "Brand guidelines",
            "Brand strategy",
            "Brand collateral",
            "Brand messaging"
        ]
    },
    {
        title: "Digital Marketing",
        description: "We help you reach your target audience and grow your business online.",
        details: [
            "SEO",
            "Social media marketing",
            "Content marketing",
            "Email marketing",
            "PPC advertising"
        ]
    },
    {
        title: "Graphic Design",
        description: "We design graphics that communicate your brand message effectively.",
        details: [
            "Print design",
            "Packaging design",
            "Illustration",
            "Infographics",
            "Brochure design"
        ]
    },
    {
        title: "Photography",
        description: "We capture stunning images that tell your brand story.",
        details: [
            "Product photography",
            "Lifestyle photography",
            "Event photography",
            "Portrait photography",
            "Photo editing"
        ]
    },
    {
        title: "Videography",
        description: "We produce high-quality videos that engage your audience.",
        details: [
            "Promotional videos",
            "Explainer videos",
            "Product videos",
            "Event coverage",
            "Video editing"
        ]
    }
]