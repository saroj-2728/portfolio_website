"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "@/context/ThemeContext"
import { usePathname } from "next/navigation"
import SidebarMenu from "./MobileNav"

const Navbar = () => {

    const pathname = usePathname()
    const { toggleTheme, isOn, setIsOn } = useTheme()

    const toggleSwitch = () => {
        setIsOn(!isOn)
        toggleTheme()
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className='z-10 hidden md:block bg-[var(--bg-primary)]'>
                <div className="flex flex-row justify-around items-center px-0 py-3 w-full h-full">
                    <Link href="/" className="logo font-bold text-lg text-[var(--text-primary)]">
                        SaR0J
                    </Link>
                    <div className="link-container flex flex-row gap-3">
                        <Link
                            href="/"
                            className={`relative px-2 py-1.5 text-[var(--text-primary)] transition-all duration-[350ms] hover:text-[var(--accent-primary)] ${pathname === "/" ? "after:w-full" : "after:w-0"} hover:after:w-full after:bg-[#0EEA2F] rounded-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300`}
                        >
                            Home
                        </Link>

                        <Link
                            href='/about'
                            className={`relative px-2 py-1.5 text-[var(--text-primary)] transition-all duration-[350ms] hover:text-[var(--accent-primary)] ${pathname === "/about" ? "after:w-full" : "after:w-0"} hover:after:w-full after:bg-[#0EEA2F] rounded-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300`}>
                            About
                        </Link>

                        <Link
                            href='/projects'
                            className={`relative px-2 py-1.5 text-[var(--text-primary)] transition-all duration-[350ms] hover:text-[var(--accent-primary)] ${pathname === "/projects" ? "after:w-full" : "after:w-0"} hover:after:w-full after:bg-[#0EEA2F] rounded-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300`}>
                            Projects
                        </Link>

                        <Link
                            href='/contact'
                            className={`relative px-2 py-1.5 text-[var(--text-primary)] transition-all duration-[350ms] hover:text-[var(--accent-primary)] ${pathname === "/contact" ? "after:w-full" : "after:w-0"} hover:after:w-full after:bg-[#0EEA2F] rounded-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300`}>
                            Contact
                        </Link>
                    </div>
                    <div className="theme sticky top-2 z-[9999]">
                        <motion.button
                            onClick={toggleSwitch}
                            className={`flex items-center justify-between w-15 h-8 rounded-full transition-colors border border-[var(--accent-primary)]`}
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

                            {/* Circle (toggle knob) */}
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

                    </div>

                </div>
                <div className="line md:w-[90%] mx-auto border-b border-[var(--accent-primary)]">

                </div>
            </motion.nav>
            < SidebarMenu />
        </>
    )
}

export default Navbar
