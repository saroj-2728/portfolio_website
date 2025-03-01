const LinkTilesSkeleton = () => {
    return (
        <div className="p-3 rounded-lg border border-brd bg-accent animate-pulse">
            <div className="flex flex-row flex-nowrap items-center justify-start gap-4">
                <div className="size-10 bg-gray-700/50 rounded-lg"></div>
                <div className="leading-tight text-sm space-y-2">
                    <div className="w-32 h-4 bg-gray-700/50 rounded"></div>
                    <div className="w-48 h-3 bg-gray-700/50 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default LinkTilesSkeleton;
