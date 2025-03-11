'use client'
import type { TimelineItem } from "@/constants/achievements"

const TimelineCard = (
    { timelineItem }: { timelineItem: TimelineItem }
) => {
    return (
        <div className="relative pl-10">
            {/* Timeline Dot */}
            <div className="absolute left-0.5 top-4 w-3.5 h-3.5 bg-white rounded-full shadow-lg flex items-center justify-center" />

            {/* Content */}
            <div className="px-6 py-3 rounded-xl border-l-6 border-brd border">
                <p className="text-sm">{timelineItem.date}</p>
                <h3 className="font-bold text-primary">
                    {timelineItem.title}
                </h3>
                <h4 className="text-sm text-primary">
                    {timelineItem.subtitle}
                </h4>
                <p className="mt-2">
                    {timelineItem.description}
                </p>
            </div>
        </div>
    )
}

export default TimelineCard