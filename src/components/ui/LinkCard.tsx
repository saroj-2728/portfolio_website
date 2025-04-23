import Image from "next/image";
import Link from "next/link";

interface CardProps {
    href: string;
    imageSrc: string;
    title: string;
    description: string;
    tag?: string;
}

const LinkCard = ({ href, imageSrc, title, description, tag }: CardProps) => {
    return (
        <Link href={href} className="w-full rounded-md bg-accent border border-brd group overflow-hidden">
            <div>
                <div className="overflow-hidden h-58">
                    <Image
                        src={imageSrc}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover object-center rounded-t-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                        alt="Image of the project"
                    />
                </div>
                <div className="p-4 flex flex-nowrap justify-between items-end">
                    <div>
                        <h3 className="text-sm font-bold text-primary">{title}</h3>
                        <p className="text-sm text-secondary">{description}</p>
                    </div>
                    {tag &&
                        <div className="text-xs rounded-2xl border border-brd px-3 py-1.5">
                            <p>{tag}</p>
                        </div>
                    }
                </div>
            </div>
        </Link>
    )
}

export default LinkCard
