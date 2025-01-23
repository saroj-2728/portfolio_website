"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const LandingScreen = () => {
    return (
        // <div className="h-[91vh] flex flex-row gap-[8%] justify-center items-center text-white py-3">
        //     <div className="profile max-h-[560px] w-[54%] h-full flex flex-col items-center justify-center gap-8 bg-[#0a0a0ada] rounded-2xl">
        //         <div className="image rounded-full h-60 w-60 border-2 border-sky-500">
        //             <Image
        //                 src={'/images/image.jpg'}
        //                 height={500}
        //                 width={500}
        //                 alt="Profile Image"
        //                 className="h-full w-full object-cover object-center rounded-full"
        //             />
        //         </div>
        //         <div>
        //             <p className="text-5xl text-center">Hi, I&apos;m <br /> Saroj Pandey</p>
        //         </div>
        //     </div>

        //     <div className="others w-[38%] h-full flex flex-col items-center justify-center">
        //         <div className="info w-full bg-[#0a0a0ada] rounded-2xl p-5 max-w-80">
        //             <p className="text-center text-2xl">I&apos;m a <br /> Computer Engineering Student <br /> and <br /> Web Developer</p>
        //         </div>
        //         <div className="icons flex flex-wrap gap-5 basis-2 items-center justify-center mt-10">
        //             <div className="bg-white text-black w-36 h-36 flex flex-col items-center justify-center gap-2 px-5 rounded-2xl">
        //                 <FaGithub className="size-16" />
        //                 <p className="text-center text-lg leading-none">code i&apos;m developing</p>
        //             </div>
        //             <div className="bg-white text-black w-36 h-36 flex flex-col items-center justify-center gap-2 px-5 rounded-2xl">
        //                 <FaGithub className="size-16" />
        //                 <p className="text-center text-lg leading-none">code i&apos;m developing</p>
        //             </div>
        //             <div className="bg-white text-black w-36 h-36 flex flex-col items-center justify-center gap-2 px-5 rounded-2xl">
        //                 <FaGithub className="size-16" />
        //                 <p className="text-center text-lg leading-none">code i&apos;m developing</p>
        //             </div>
        //             <div className="bg-white text-black w-36 h-36 flex flex-col items-center justify-center gap-2 px-5 rounded-2xl">
        //                 <FaGithub className="size-16" />
        //                 <p className="text-center text-lg leading-none">code i&apos;m developing</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-max max-h-[720px] py-8 text-white">
            {/* First Div (Single Div) */}
            <div className="p-4 flex flex-col items-center justify-center gap-8 bg-[#0a0a0ada] rounded-2xl">
                <div className="image rounded-full h-60 w-60 border-2 border-sky-500">
                    <Image
                        src={'/images/image.jpg'}
                        height={500}
                        width={500}
                        alt="Profile Image"
                        className="h-full w-full object-cover object-center rounded-full"
                    />
                </div>
                <p className="text-5xl text-center">Hi, I&apos;m <br /> Saroj Pandey</p>
            </div>

            {/* Second Div (Two Divs in a Column) */}
            <div className="grid grid-rows-2 gap-4">
                {/* First Row */}
                <div className="border p-4">
                    <p>Content for second div - first row</p>
                </div>

                {/* Second Row (Four Divs in 2x2 Layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border p-4">
                        <p>Content for second div - second row, first column</p>
                    </div>
                    <div className="border p-4">
                        <p>Content for second div - second row, second column</p>
                    </div>
                    <div className="border p-4">
                        <p>Content for second div - second row, third column</p>
                    </div>
                    <div className="border p-4">
                        <p>Content for second div - second row, fourth column</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingScreen
