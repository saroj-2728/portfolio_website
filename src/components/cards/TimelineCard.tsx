'use client'
import Card from "../ui/Card"
import Badge from "../ui/Badge"
import type { TimelineItem } from "@/constants/achievements"

const TimelineCard = (
    { timelineItem }: { timelineItem: TimelineItem }
) => {
    return (
        <div className="relative md:pl-10 pl-7">
            {/* Timeline Dot */}
            <div className="absolute left-0.5 top-4 w-3.5 h-3.5 bg-white rounded-full shadow-lg flex items-center justify-center" />

            {/* Content */}
            <Card
                variant="default"
                size="sm"
                interactive={true}
                hoverEffect="lift"
                className="border-l-6 border-brd"
            >
                <Badge variant="secondary" size="xs" className="mb-2">
                    {timelineItem.date}
                </Badge>
                <h3 className="md:text-base text-sm md:font-bold font-semibold text-primary">
                    {timelineItem.title}
                </h3>
                <h4 className="text-sm text-primary mb-2">
                    {timelineItem.subtitle}
                </h4>
                <p className="md:text-base text-sm text-secondary">
                    {timelineItem.description}
                </p>
            </Card>
        </div>
    )
}

export default TimelineCard