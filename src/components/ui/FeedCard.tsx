'use client'
import { useRouter } from "next/navigation"

interface FeedCardProps {
    title: string
    description: string
    href: string
    icon: React.ReactNode
}

const FeedCard = ({ icon, title, description, href }: FeedCardProps) => {

    const router = useRouter()

    return (
        <div className="bg-accent border border-brd rounded-md">
            <div className="p-6 flex flex-col flex-nowrap gap-8 justify-start items-start">
                <div className="flex flex-col justify-start items-start gap-6">
                    {icon}
                    <div>
                        <h3 className="font-bold text-primary">{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => router.push(href)}
                        className="p-2 px-6 bg-icon text-primary rounded-lg hover:opacity-70 transition duration-[400ms]"
                    >
                        View {title}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
