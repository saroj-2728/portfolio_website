'use client'
import Image from "next/image"
import Navigations from "./Navigations";


const Navbar = () => {
    return (
        <nav className="hidden px-4 h-full md:flex flex-col overflow-hidden" role="navigation">
            {/* Profile Section */}
            <div className="profile bg-accent sticky top-0 flex flex-row items-center justify-start gap-3 pt-6j py-7">
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
                    <p className="text-primary text-sm font-semibold">Saroj Pandey</p>
                    <p className="text-sm">Web Developer</p>
                </div>
            </div>

            {/* Navigation Section */}
            <Navigations showNumbers={true} />

            {/* Search bar */}
        </nav>
    )
}
export default Navbar