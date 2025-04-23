'use client'
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { IoCopyOutline } from "react-icons/io5";
import Loader from "@/components/ui/Loader";
// import NewsLetterSubscription from "@/components/NewsLetterSub";

interface Errors {
    from_name?: string
    email?: string
    message?: string
}

const ContactPage = () => {

    const [copied, setCopied] = useState(false)
    const [messageStatus, setMessageStatus] = useState<string>("");
    const [errors, setErrors] = useState<Errors>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = () => {
        const newErrors: Errors = {};
        if (!formData.from_name.trim()) newErrors.from_name = "Please enter your name.";
        if (!formData.email.trim()) newErrors.email = "Email address is required.";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters long.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "Saroj",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true)
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setMessageStatus("SUCCESS! Your message has been sent.");
            setFormData({
                from_name: "",
                to_name: "Roshan Koirala",
                email: "",
                message: "",
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error: any) {
            setMessageStatus("Failed to send the message! Please try again!");
            console.error("Error sending message: ", error.text);
        }
        finally {
            setTimeout(() => {
                setMessageStatus("")
            }, 5000);
            setIsLoading(false)
        }
    };



    return (
        <main className="flex flex-col items-center md:min-h-screen md:pt-10 pt-0 pb-10 md:pb-0">
            <div className="max-w-[960px] w-full mx-auto">
                {/* Header section */}
                <header className="me p-0 pt-10 md:p-12 md:pb-0 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        Contact
                    </h1>
                    <p className="mt-3 text-lg max-w-xl">
                        Let&apos;s connect! Whether you have a project idea, a question, or just want to chat, I&apos;d love to hear from you.
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

                <form
                    onSubmit={handleSubmit}
                    className="md:m-12 mt-10 m-0 p-4 md:p-8 border border-brd rounded-lg space-y-4 md:space-y-6"
                >
                    <h3 className="text-xl font-bold text-primary">Send a message</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                id="name"
                                className="w-full mb-1 p-2 rounded-lg border border-brd bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                            {errors?.from_name && <p className="text-red-500 ps-1 mt-0 text-left text-xs">{errors?.from_name}</p>}
                        </div>
                        <div className="flex-1 space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                id="email"
                                className="w-full mb-1 p-2 rounded-lg border border-brd bg-transparent focus:outline-none focus:ring-2 focus:ring-btn-primary"
                                required
                            />
                            {errors?.email && <p className="text-red-500 ps-1 mt-0 text-left text-xs">{errors?.email}</p>}
                        </div>
                    </div>
                    <div className={`space-y-2 ${messageStatus? "mb-0": ""}`}>
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            id="message"
                            rows={4}
                            className="w-full mb-0 p-2 rounded-lg border border-brd bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            required
                        />
                        {errors?.message && <p className="text-red-500 ps-1 mt-0 text-left text-xs">{errors?.message}</p>}

                    </div>

                    {messageStatus && (
                        <p
                            className={`text-xs my-2 ${messageStatus.includes("SUCCESS") ? "text-[#0EEA2F]" : "text-[#fc0303]"} text-center`}
                        >
                            {messageStatus}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-2.5 md:py-2 px-4 bg-btn-primary text-background rounded-lg hover:opacity-60 transition duration-[400ms] cursor-pointer flex justify-center items-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                Sending
                                <Loader />
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>

                </form>

                {/* <NewsLetterSubscription
                    mainText="Never miss a new tool"
                    secondaryText="Get notified as soon as I add new tools to my stack."
                    className="m-12 border border-brd rounded-md"
                /> */}

            </div>
        </main>
    )
}

export default ContactPage
