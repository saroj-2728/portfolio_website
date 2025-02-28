'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoCopyOutline } from "react-icons/io5";
import type { ServiceType } from "@/constants/services";

const ServiceCard = ({ title, description, details }: ServiceType) => {

    const router = useRouter();

    const [copied, setCopied] = useState(false)

    return (
        <div className="w-full bg-accent p-6 rounded-md border border-brd">
            <div className="flex flex-col gap-3">
                <div>
                    <p className="text-primary text-xl font-semibold">{title}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-primary">
                            {description}
                        </p>
                    </div>
                    <div>
                        <ul className="list-disc list-inside">
                            {
                                details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <button
                        onClick={() => router.push("/contact")}
                        className="px-6 py-2.5 font-semibold bg-btn-primary text-background rounded-md hover:opacity-60 transition duration-[400ms] cursor-pointer"
                    >
                        Get started now
                    </button>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText("sp0710412@gmail.com")
                            setCopied(true)
                            setTimeout(() => setCopied(false), 2000)
                        }}
                        className="px-6 py-2.5 font-semibold text-primary border border-brd rounded-lg text-center align-middle hover:bg-btn-secondary hover:opacity-60 transition duration-[400ms] cursor-pointer"
                    >
                        <IoCopyOutline className={`size-4 text-secondary inline-block`} /> <span className={`${copied ? "text-secondary" : ""} `}>{copied ? "Copied" : "E-mail"}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
