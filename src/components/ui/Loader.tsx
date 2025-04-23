const Loader = () => {
    return (
        <span className="inline-flex space-x-1 items-end">
            <span className="w-1 h-1 bg-current rounded-full animate-[bounce_0.6s_infinite] [animation-delay:-0.3s]"></span>
            <span className="w-1 h-1 bg-current rounded-full animate-[bounce_0.6s_infinite] [animation-delay:-0.15s]"></span>
            <span className="w-1 h-1 bg-current rounded-full animate-[bounce_0.6s_infinite]"></span>
        </span>
    );
};

export default Loader;  