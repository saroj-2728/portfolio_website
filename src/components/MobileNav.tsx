/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import Link from "next/link"
import Image from "next/image"

import { FaBars } from "react-icons/fa";


const MobileNav = () => {
    return (
        <nav className="md:hidden sticky top-0 w-full border-b border-brd bg-background z-50">
            {/* Profile */}
            <div className="w-full flex flex-row items-center justify-between bg-background p-6">
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

                <FaBars className="size-6" />
            </div>


            {/* Navigation */}

        </nav>
    )
}

export default MobileNav