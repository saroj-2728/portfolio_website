'use client'
import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { IoCopyOutline } from "react-icons/io5";
import type { ServiceType } from "@/constants/services";

const ServiceCard = ({ title, description, details }: ServiceType) => {
    const [copied, setCopied] = useState(false)

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("sp0710412@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Card
            variant="default"
            size="md"
            interactive={true}
            hoverEffect="lift"
            className="w-full"
        >
            <div className="flex flex-col gap-3">
                <div>
                    <p className="text-primary text-xl font-semibold">{title}</p>
                </div>
                <div className="flex flex-col gap-2 md:text-base text-[0.9rem]">
                    <div>
                        <p className="text-primary">
                            {description}
                        </p>
                    </div>
                    <div>
                        <ul className="list-disc list-inside text-secondary">
                            {
                                details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <Button
                        variant="primary"
                        size="md"
                        href="/contact"
                    >
                        Get started now
                    </Button>
                    <Button
                        variant="secondary"
                        size="md"
                        icon={IoCopyOutline}
                        onClick={handleCopyEmail}
                    >
                        {copied ? "Copied" : "E-mail"}
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default ServiceCard
