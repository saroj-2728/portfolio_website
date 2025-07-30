'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { navigation, socialNavigation, resourceNavigation } from "@/constants/navbar";
import type { NavItem } from "@/constants/navbar";
import { motion } from "framer-motion";

interface NavigationsProps {
    showNumbers?: boolean
    onClick?: () => void
}

const Navigations = ({ showNumbers, onClick }: NavigationsProps) => {
    const pathname = usePathname();

    return (
        <div className="h-full flex flex-col overflow-hidden" role="navigation">
            {/* Navigation Section */}
            <div className="navigation space-y-8 overflow-y-auto grow scrollbar-hidden">
                {/* Basic nav links */}
                <ul className="space-y-1">
                    <NavLinks navLinks={navigation} pathname={pathname} showNumbers={showNumbers} onClick={onClick} />
                </ul>

                {/* Resources */}
                <div className="space-y-4">
                    <p className="text-[10px] ps-2.5 font-bold text-link cursor-default">❯ RESOURCES</p>
                    <ul className="space-y-1">
                        <NavLinks navLinks={resourceNavigation} pathname={pathname} showNumbers={showNumbers} onClick={onClick} />
                    </ul>
                </div>

                {/* Connect */}
                <div className="space-y-4">
                    <p className="text-[10px] ps-2.5 font-bold text-link cursor-default">❯ CONNECT</p>
                    <ul className="space-y-1">
                        <NavLinks navLinks={socialNavigation} pathname={pathname} showNumbers={showNumbers} onClick={onClick} />
                    </ul>
                </div>
            </div>

            {/* Search bar */}
            <div className="w-full py-4 bg-accent">
                <div className="relative group">
                    <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-terminal-muted group-hover:text-link" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="bg-icon w-full py-2 pl-10 pr-3 rounded-md border border-terminal-border text-secondary focus:text-primary focus:border-link focus:outline-none hover:placeholder:text-link transition-colors"
                    />
                    {/* Animated underline */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-link transition-all duration-300 group-focus-within:w-full" />
                </div>
            </div>
        </div>
    )
}
export default Navigations;


interface NavLinksProps {
    navLinks: NavItem[],
    pathname: string,
    showNumbers?: boolean
    onClick?: () => void
}

const NavLinks = ({ navLinks, pathname, showNumbers, onClick }: NavLinksProps) => {
    return (
        <>
            {navLinks.map((nav, index) => {
                const isActive = pathname === nav.href;
                return (
                    <li
                        key={index}
                        className={`relative flex flex-row items-center justify-start gap-3 rounded-md font-semibold transition duration-[400ms]
                        ${isActive ? 'text-link bg-terminal-header' : 'hover:text-link/80 hover:bg-hover'}`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeNav"
                                className="absolute left-0 top-0 h-full w-[3px] bg-link rounded-l-md"
                            />
                        )}
                        <Link
                            target={nav.href.startsWith("http") ? "_blank" : ""}
                            className="h-full w-full py-2 px-2" href={nav.href}
                            onClick={onClick}
                        >
                            <div className="text-sm flex flex-row items-center justify-between gap-3">
                                {nav.icon}
                                <p className="text-start w-[80%]">{nav.title}</p>
                                {showNumbers && <p className={`px-1 text-sm border rounded-xs text-link ${isActive ? "border-link": "border-terminal-border"}`}>{nav.keyNav}</p>}
                            </div>
                        </Link>
                    </li>
                )
            })}
        </>
    )
}
