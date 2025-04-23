'use client'
import { useState, useEffect } from "react";
import Link from "next/link"
import { FooterBlock, FooterLink } from "@/constants/footer"
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {

    const [time, setTime] = useState<string>("--:--")

    useEffect(() => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        }, 60 * 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center bg-accent w-full border-t border-brd pb-5">
            <footer className="w-full max-w-[960px] mx-auto">
                <div className="p-6 md:p-12 flex flex-col-reverse md:flex-col gap-5 md:gap-10">
                    <div className="links grid grid-cols-2 gap-20 sm:grid-cols-4">

                        {
                            FooterBlock.map((block, index) => (
                                <FooterLinkBlocks
                                    key={index}
                                    title={block.title}
                                    links={block.links}
                                />
                            ))
                        }
                    </div>

                    <div className="current grid grid-cols-1 md:grid-cols-2 gap-6 py-5 md:py-3 md:p-0 border-b md:border-y border-brd items-center">
                        <div className="status flex flex-col gap-1">
                            <h4 className="text-primary">Currently 👨‍💻 working <span className="text-green-400">•</span></h4>
                            <Link
                                href={"/contact"}
                                className="flex flex-row items-center gap-2 min-w-max max-w-min"
                            >
                                <span> Reach out </span>
                                <FaArrowRight />
                            </Link>
                        </div>
                        <div className="time flex flex-row justify-start">
                            <p className="text-5xl md:text-[80px]">{time}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer


const FooterLinkBlocks = ({ title, links }: { title: string, links: FooterLink[] }) => {
    return (
        <div className="connect">
            <div className="index flex flex-col">
                <div className="title">
                    <h4 className="text-primary">{title}</h4>
                </div>
                <div className="flex flex-col text-sm">
                    {
                        links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="max-w-min hover:text-primary transition druation-[400ms]"
                            >
                                {link.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}