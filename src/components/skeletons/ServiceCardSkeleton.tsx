const ServiceCardSkeleton = () => {
    return (
        <div className="w-full bg-accent p-6 rounded-md border border-brd animate-pulse">
            <div className="flex flex-col gap-3">
                {/* Title Skeleton */}
                <div className="h-6 w-1/5 bg-brd rounded-md" />

                {/* Description Skeleton */}
                <div className="h-4 w-5/6 bg-brd rounded-md" />

                {/* Details Skeleton */}
                <ul className="space-y-2 mt-2">
                    <li className="h-4 w-2/5 bg-brd rounded-md" />
                    <li className="h-4 w-2/5 bg-brd rounded-md" />
                    <li className="h-4 w-2/5 bg-brd rounded-md" />
                </ul>

                {/* Buttons Skeleton */}
                <div className="flex items-center space-x-4 mt-4">
                    <div className="h-10 w-40 bg-brd rounded-md" />
                    <div className="h-10 w-28 bg-brd rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default ServiceCardSkeleton;
