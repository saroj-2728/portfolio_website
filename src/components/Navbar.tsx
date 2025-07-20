'use client'
import { useState, useEffect } from "react";
import Image from "next/image"
import Navigations from "./Navigations";
import DeveloperInfoPopup from "./ui/DeveloperInfoPopup";


const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Handle ESC key to close popup
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsPopupOpen(false);
            }
        };

        if (isPopupOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevent body scroll when popup is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isPopupOpen]);

    const handleProfileClick = () => {
        setIsPopupOpen(true);
    };

    return (
        <nav className="hidden px-4 h-full md:flex flex-col overflow-hidden" role="navigation">
            {/* Profile Section */}
            <div 
                className="profile bg-accent sticky top-0 flex flex-row items-center justify-start gap-3 pt-6 py-7 cursor-pointer transition-colors duration-200 rounded-lg group"
                onClick={handleProfileClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleProfileClick();
                    }
                }}
            >
                <div className="profileImage w-10 h-10 rounded-full ring-2 ring-transparent group-hover:ring-btn-primary transition-all duration-200">
                    <Image
                        src="https://res.cloudinary.com/djfns59te/image/upload/v1745612812/profileImage_1_fp528i.jpg"
                        alt="profile"
                        width={50}
                        height={50}
                        priority={true}
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="profileName leading-tight">
                    <p className="text-primary text-sm font-semibold group-hover:text-btn-primary transition-colors duration-200">Saroj Pandey</p>
                    <p className="text-sm group-hover:text-secondary transition-colors duration-200">Web Developer</p>
                </div>
                <div className="ml-auto mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Navigation Section */}
            <Navigations showNumbers={true} />

            {/* Developer Info Popup */}
            <DeveloperInfoPopup 
                isOpen={isPopupOpen} 
                onClose={() => setIsPopupOpen(false)} 
            />

            {/* Search bar */}
        </nav>
    )
}
export default Navbar