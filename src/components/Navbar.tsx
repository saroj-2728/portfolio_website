'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigations from "./Navigations";
import DeveloperInfoPopup from "./ui/DeveloperInfoPopup";
import { Terminal } from "lucide-react"

const rotatingTitles = [
    "TS Wizard",
    "Rustacean",
    "Next.js Nerd",
    "Code Ninja",
];

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [titleIndex, setTitleIndex] = useState(0);

    // Handle ESC key to close popup
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsPopupOpen(false);
            }
        };

        if (isPopupOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isPopupOpen]);

    // Rotate titles every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleProfileClick = () => {
        setIsPopupOpen(true);
    };

    return (
        <motion.nav
            className="hidden px-4 h-full md:flex flex-col overflow-hidden"
            role="navigation"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Profile Section */}
            <motion.div
                className="profile bg-accent sticky top-0 flex flex-row items-center justify-start gap-3 pt-6 py-7 cursor-pointer transition-colors duration-200 rounded-lg group"
                onClick={handleProfileClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleProfileClick();
                    }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
            >
                <motion.div
                    className="profileImage w-10 h-10 rounded-full ring-2 ring-transparent group-hover:ring-terminal-green transition-all duration-200 relative"
                    whileHover={{ rotate: 2, scale: 1.05 }}
                >
                    <Image
                        src="https://res.cloudinary.com/djfns59te/image/upload/v1745612812/profileImage_1_fp528i.jpg"
                        alt="profile"
                        width={50}
                        height={50}
                        priority={true}
                        className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                    {/* Glow Effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-btn-primary/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                </motion.div>

                {/* Profile Name */}
                <div className="profileName leading-tight">
                    <motion.p
                        className="text-primary text-sm font-semibold group-hover:text-btn-primary transition-colors duration-200"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Saroj Pandey
                    </motion.p>
                    <motion.p
                        key={titleIndex} // animate on change
                        className="text-sm text-secondary group-hover:text-primary transition-colors duration-200"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.4 }}
                    >
                        {rotatingTitles[titleIndex]}
                    </motion.p>
                </div>

                {/* Status Dot */}
                <motion.div
                    className="ml-auto mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <Terminal className="text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-5" />
                </motion.div>
            </motion.div>

            {/* Navigation Section */}
            <Navigations showNumbers={true} />

            {/* Developer Info Popup */}
            <DeveloperInfoPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </motion.nav>
    );
};

export default Navbar;