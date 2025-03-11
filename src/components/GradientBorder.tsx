
const GradientBorder = (
    { children, className = '' }: { children: React.ReactNode; className?: string }
) => {
    return (
        <div className={`relative ${className}`}>
            {/* <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div> */}
            <div className="relative rounded-lg bg-white dark:bg-gray-900 m-0.5">
                {children}
            </div>
        </div>
);
};

export default GradientBorder;