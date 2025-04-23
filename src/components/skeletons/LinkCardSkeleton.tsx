const LinkCardSkeleton = () => {
    return (
        <div className="w-full rounded-md bg-accent border border-brd animate-pulse">
            <div className="overflow-hidden md:h-58 h-48 bg-gray-700/50" />
            <div className="p-4 flex flex-nowrap justify-between items-end">
                <div className="space-y-2">
                    <div className="w-32 h-4 bg-gray-700/50 rounded" />
                    <div className="w-48 h-4 bg-gray-700/50 rounded" />
                </div>
                <div className="w-12 h-6 bg-gray-700/50 rounded-2xl" />
            </div>
        </div>
    );
};

export default LinkCardSkeleton;
