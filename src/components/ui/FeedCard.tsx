'use client'
import Card from "./Card"
import Button from "./Button"

interface FeedCardProps {
    title: string
    description: string
    href: string
    icon: React.ReactNode
}

const FeedCard = ({ icon, title, description, href }: FeedCardProps) => {
    return (
        <Card
            variant="default"
            size="md"
            interactive={true}
            hoverEffect="lift"
            className="flex flex-col gap-8"
        >
            <div className="flex flex-col justify-start items-start gap-6">
                {icon}
                <div>
                    <h3 className="font-bold text-primary">{title}</h3>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
            <div>
                <Button
                    variant="secondary"
                    size="md"
                    href={href}
                    className="w-auto"
                >
                    View {title}
                </Button>
            </div>
        </Card>
    )
}

export default FeedCard
