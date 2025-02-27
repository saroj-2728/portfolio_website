'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { navigation, socialNavigation } from "@/constants/navbar";
import type { NavItem } from "@/constants/navbar";
import { MdOutlineFeed } from "react-icons/md";
import { TfiThought } from "react-icons/tfi";
import { PiStack } from "react-icons/pi";

const Navbar = () => {

    const pathname = usePathname()

    const resourceNavigation: NavItem[] = [
        {
            title: "Feed",
            href: "/feed",
            keyNav: "6",
            icon: <MdOutlineFeed className="size-6 p-0 box-content" />
        },
        {
            title: "Thoughts",
            href: "/thoughts",
            keyNav: "7",
            icon: <TfiThought className="size-6 p-0 box-content" />
        },
        {
            title: "Stack",
            href: "/stack",
            keyNav: "8",
            icon: <PiStack className="size-6 p-0 box-content" />
        },
    ]


    return (
        <nav className="px-4 h-full flex flex-col overflow-hidden" role="navigation">
            {/* Profile Section */}
            <div className="profile bg-accent sticky top-0 flex flex-row items-center justify-start gap-3 py-7">
                <div className="profileImage w-10 h-10 rounded-full">
                    <Image
                        src="/images/profileImage.jpg"
                        alt="profile"
                        width={50}
                        height={50}
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="profileName leading-tight">
                    <p className="text-primary font-semibold">Saroj Pandey</p>
                    <p>Web Developer</p>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="navigation space-y-8 overflow-y-auto grow scrollbar-hidden">
                {/* Basic nav links */}
                <ul className="">
                    <NavLinks navLinks={navigation} pathname={pathname} />
                </ul>

                {/* Resources */}
                <div className="space-y-4">
                    <p className="text-[10px] ps-2.5 font-bold cursor-default">RESOURCES</p>
                    <ul>
                        <NavLinks navLinks={resourceNavigation} pathname={pathname} />
                    </ul>
                </div>

                {/* Connect */}
                <div className="space-y-4">
                    <p className="text-[10px] ps-2.5 font-bold cursor-default">CONNECT</p>
                    <ul>
                        <NavLinks navLinks={socialNavigation} pathname={pathname} />
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
        </nav>
    )
}
export default Navbar


const NavLinks = ({ navLinks, pathname }: { navLinks: NavItem[], pathname: string }) => {
    return (
        <>
            {navLinks.map((nav, index) => (
                <li key={index} className={`${pathname === nav.href ? 'bg-icon border-brd font-semibold text-primary' : ''} flex flex-row items-center justify-start gap-3 rounded-md hover:font-semibold hover:text-primary transition duration-[400ms]`}>
                    <Link
                        target={nav.href.startsWith("http") ? "_blank" : ""}
                        className="h-full w-full py-2 px-2" href={nav.href}
                    >
                        <div className={`text-sm flex flex-row items-center justify-between gap-3`}>
                            {nav.icon}
                            <p className={`text-start w-[80%]`}>{nav.title}</p>
                            <p className="px-1 text-sm border border-brd rounded-xs">{nav.keyNav}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </>
    )
}