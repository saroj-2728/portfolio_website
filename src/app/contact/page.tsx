'use client'
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import NewsLetterSubscription from "@/components/NewsLetterSub";

const ContactPage = () => {

    const [copied, setCopied] = useState(false)

    return (
        <main className="flex flex-col items-center min-h-screen pt-10">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
                <header className="me p-12 pb-0 space-y-6">
                    <h1 className="text-5xl font-bold text-primary">
                        Contact
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                        I&apos;m always looking to collaborate on interesting projects with great people. Need a supportive hand? I have two!
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
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
                </header>

                <form className="m-12 p-8 border border-brd rounded-lg space-y-6">
                    <h3 className="text-xl font-bold text-primary">Send a message</h3>
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 rounded-lg border border-brd bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 rounded-lg border border-brd bg-transparent focus:outline-none focus:ring-2 focus:ring-btn-primary"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full p-2 rounded-lg border border-brd bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-btn-primary text-background rounded-lg hover:opacity-60 transition duration-[400ms] cursor-pointer">
                        Send Message
                    </button>
                </form>

                <NewsLetterSubscription
                    mainText="Never miss a new tool"
                    secondaryText="Get notified as soon as I add new tools to my stack."
                    className="m-12 border border-brd rounded-md"
                />

            </div>
        </main>
    )
}

export default ContactPage
