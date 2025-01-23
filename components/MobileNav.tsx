import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import useDimensions from "@/customHooks/useDimensions";

const MotionLink = motion.create(Link);

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: { type: "spring", stiffness: 20, restDelta: 2 },
    }),
    closed: {
        clipPath: "circle(1px at 36px 36px)",
        transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
    },
};

const menuItemVariants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
};

const SidebarMenu = () => {
    const pathname = usePathname();
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const { toggleTheme, isOn, setIsOn } = useTheme();

    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
    ];

    const classes =
        "relative px-2 py-1.5 text-[var(--text-primary)] transition-all duration-[350ms] hover:text-[var(--accent-primary)] hover:after:w-full after:bg-[#0EEA2F] rounded-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300";

    const toggleSwitch = () => {
        setIsOn(!isOn);
        toggleTheme();
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => toggleOpen()}
                className="md:hidden outline-none border-[3px] border-[var(--accent-primary)] fixed top-4 left-4 w-10 h-10 rounded-full cursor-pointer bg-transparent flex items-center justify-center z-50"
            >
                <svg
                 className="w-6 h-6" 
                 viewBox="0 0 18.9 19.6"
                 >
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="var(--accent-primary)"
                        strokeLinecap="round"
                        d="M 2 2.5 L 20 2.5"
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" },
                        }}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                    />
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="var(--accent-primary)"
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1, d: "M 2 9.423 L 20 9.423" }, 
                            open: { opacity: 0, d: "M 2 9.423 L 20 9.423" }, 
                        }}
                        transition={{ duration: 0.1 }}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                    />
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="var(--accent-primary)"
                        strokeLinecap="round"
                        d="M 2 16.346 L 20 16.346"
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" },
                        }}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                    />
                </svg>

            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial="closed"
                        animate="open"
                        exit="closed"
                        custom={height}
                        ref={containerRef}
                        className="fixed md:hidden top-0 left-0 bottom-0 w-72 z-40"
                        style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 bottom-0 w-72 bg-[var(--bg-section)] border-r-2 border-[var(--accent-primary)]"
                            variants={sidebarVariants}
                        />

                        <ul className="p-6 absolute flex flex-col top-24 w-56 space-y-5">
                            {links.map((i, index) => (
                                <MotionLink
                                    key={index}
                                    href={i.link}
                                    className={`${classes}  ${pathname === i.link ? "after:w-full" : "after:w-0"}`}
                                    variants={menuItemVariants}
                                    onClick={() => toggleOpen()}
                                >
                                    {i.name}
                                </MotionLink>
                            ))}
                        </ul>

                        <motion.button
                            onClick={toggleSwitch}
                            className={`absolute top-5 left-[218px] flex items-center w-15 h-8 rounded-full transition-colors border border-[var(--accent-primary)]`}
                            variants={menuItemVariants}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="var(--accent-primary)"
                                className={`${isOn ? "hidden" : "block"} w-6 h-6`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                />
                            </svg>

                            <motion.div
                                className={`w-7 h-7 bg-[var(--accent-primary)] rounded-full shadow-md`}
                                layout
                                transition={{ type: 'spring', stiffness: 900 }}
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="var(--accent-primary)"
                                className={`${!isOn ? "hidden" : "block"} w-6 h-6`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                />
                            </svg>
                        </motion.button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default SidebarMenu;
