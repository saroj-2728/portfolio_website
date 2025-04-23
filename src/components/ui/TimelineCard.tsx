'use client'
import type { TimelineItem } from "@/constants/achievements"

const TimelineCard = (
    { timelineItem }: { timelineItem: TimelineItem }
) => {
    return (
        <div className="relative md:pl-10 pl-7">
            {/* Timeline Dot */}
            <div className="absolute left-0.5 top-4 w-3.5 h-3.5 bg-white rounded-full shadow-lg flex items-center justify-center" />

            {/* Content */}
            <div className="md:px-6 px-4 md:py-3 py-2.5 rounded-xl border-l-6 border-brd border">
                <p className="md:text-sm text-xs">{timelineItem.date}</p>
                <h3 className="md:text-base text-sm md:font-bold font-semibold text-primary">
                    {timelineItem.title}
                </h3>
                <h4 className="text-sm text-primary">
                    {timelineItem.subtitle}
                </h4>
                <p className="md:text-base text-sm mt-2">
                    {timelineItem.description}
                </p>
            </div>
        </div>
    )
}

export default TimelineCard