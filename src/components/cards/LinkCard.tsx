import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface ProjectCardProps {
    href: string;
    imageSrc: string;
    title: string;
    description: string;
    tag?: string;
}

const ProjectCard = ({ href, imageSrc, title, description, tag }: ProjectCardProps) => {
    return (
        <Card
            href={href}
            image={imageSrc}
            imageAlt="Image of the project"
            title={title}
            description={description}
            variant="default"
            size="sm"
            interactive={true}
            hoverEffect="scale"
            className="overflow-hidden text-sm"
            imageClassName="md:h-48 h-40 object-cover object-center"
            contentClassName="text-sm"
            badge={tag ? (
                <Badge variant="secondary" size="xs">
                    {tag}
                </Badge>
            ) : undefined}
        />
    )
}

export default ProjectCard
