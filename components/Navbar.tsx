"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname()

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="z-10 hidden md:block">
                <div className="flex flex-row justify-between items-center px-0 py-2 pt-5 w-full h-full">
                    <Link href="/" className="logo font-bold text-lg text-white">
                        SaR0J
                    </Link>
                    <div className="link-container flex flex-row gap-3">
                        {
                            ['/', '/works', '/about-me', '/contact',].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link}
                                    className={`relative px-2 py-1.5 text-grayish transition-all duration-[350ms] ${link === pathname ? 'text-white': ''} hover:text-white after:w-0 hover rounded-lg`}
                                >
                                    <span className={`text-[#c778dd]`}>#</span>{link === '/' ? 'home' : link.slice(1)}
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </motion.nav>
            {/* < SidebarMenu /> */}
        </>
    )
}

export default Navbar
