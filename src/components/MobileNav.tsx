'use client'
import Image from "next/image"
import { useState, useEffect } from "react";
import Navigations from "./Navigations";

import { FaBars } from "react-icons/fa";


const MobileNav = () => {

    const [navLinksVisible, setNavLinksVisible] = useState<boolean>(false)

    useEffect(() => {
        if (navLinksVisible) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [navLinksVisible]);

    const toggleNavLinksVisibility = () => {
        setNavLinksVisible(prev => !prev)
    }

    return (
        <nav className="md:hidden sticky top-0 w-full border-b border-brd bg-background z-50">
            {/* Profile */}
            <div className="w-full flex flex-row items-center justify-between bg-background p-4">
                <div className="w-full profile flex flex-row items-center justify-start gap-3 bg-background">
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

                <div
                    onClick={() => toggleNavLinksVisibility()}
                    className="cursor-pointer">
                    <FaBars
                        className="size-6"
                    />
                </div>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${navLinksVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setNavLinksVisible(false)}
            />


            {/* Navigation */}
            <div
                className={`fixed top-0 right-0 w-[65%] h-screen bg-black border-r border-white/10 transform transition-transform duration-300 ease-in-out ${navLinksVisible ? 'translate-x-0' : 'translate-x-full'} border z-50 ps-2`}
            >
                <div
                    className="pt-7 px-3"
                >
                    <Navigations
                        showNumbers={false}
                        onClick={() => setNavLinksVisible(false)}
                    />
                </div>
            </div>

        </nav>
    )
}

export default MobileNav