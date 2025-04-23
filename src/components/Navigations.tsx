'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { navigation, socialNavigation, resourceNavigation } from "@/constants/navbar";
import type { NavItem } from "@/constants/navbar";

interface NavigationsProps {
    showNumbers?: boolean
    onClick?: () => void
}

const Navigations = ({ showNumbers, onClick }: NavigationsProps) => {

    const pathname = usePathname()

    return (
        <div className="h-full flex flex-col overflow-hidden" role="navigation">

            {/* Navigation Section */}
            <div className="navigation space-y-8 overflow-y-auto grow scrollbar-hidden">
                {/* Basic nav links */}
                <ul className="">
                    <NavLinks navLinks={navigation} pathname={pathname} showNumbers={showNumbers} onClick={onClick} />
                </ul>

                {/* Resources */}
                <div className="space-y-4">
                    <p className="text-[10px] ps-2.5 font-bold cursor-default">RESOURCES</p>
                    <ul>
                        <NavLinks navLinks={resourceNavigation} pathname={pathname} showNumbers={showNumbers} onClick={onClick} />
                    </ul>
                </div>

                {/* Connect */}
                <div className="space-y-4">
                    <p className="text-[10px] ps-2.5 font-bold cursor-default">CONNECT</p>
                    <ul>
                        <NavLinks navLinks={socialNavigation} pathname={pathname} showNumbers={showNumbers} onClick={onClick} />
                    </ul>
                </div>
            </div>

            {/* Search bar */}
            <div className="w-full py-4 bg-accent">
                <div className="relative group">
                    <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 group-hover:text-primary group-focus-within:text-primary" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="bg-icon w-full py-2 pl-10 pr-3 rounded-md border border-brd text-secondary focus:text-primary focus:outline-hidden cursor-pointer hover:placeholder:text-primary"
                    />
                </div>
            </div>
        </div>
    )
}
export default Navigations


interface NavLinksProps {
    navLinks: NavItem[],
    pathname: string,
    showNumbers?: boolean
    onClick?: () => void
}

const NavLinks = ({ navLinks, pathname, showNumbers, onClick }: NavLinksProps) => {
    return (
        <>
            {navLinks.map((nav, index) => (
                <li key={index} className={`${pathname === nav.href ? 'bg-icon border-brd font-semibold text-primary' : ''} flex flex-row items-center justify-start gap-3 rounded-md hover:font-semibold hover:text-primary transition duration-[400ms]`}>
                    <Link
                        target={nav.href.startsWith("http") ? "_blank" : ""}
                        className="h-full w-full py-2 px-2" href={nav.href}
                        onClick={onClick}
                    >
                        <div className={`text-sm flex flex-row items-center justify-between gap-3`}>
                            {nav.icon}
                            <p className={`text-start w-[80%]`}>{nav.title}</p>
                            {showNumbers && <p className="px-1 text-sm border border-brd rounded-xs">{nav.keyNav}</p>}
                        </div>
                    </Link>
                </li>
            ))}
        </>
    )
}