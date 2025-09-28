'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInVariants } from '@/hooks/useScrollAnimation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import validateContactForm from '@/utils/forms/validateContactForm';
import emailjs from '@emailjs/browser';

import ToastContainer, { Toast as ToastType } from '@/components/ui/Toast';

const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ContactForm() {
    const sectionAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: false, bidirectional: true });

    const [formData, setFormData] = useState({
        from_name: '',
        to_name: 'Saroj',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<{ from_name?: string; email?: string; message?: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [toasts, setToasts] = useState<ToastType[]>([]);

    const handleToastDismiss = (id: string) => {
        setToasts(current => current.filter(t => t.id !== id));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear the error for this field as soon as the user types
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { isValid, errors: validationErrors } = validateContactForm(formData);
        if (!isValid) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setToasts([
                {
                    id: 'message-sent',
                    message: 'Your message has been sent. I\'ll get back to you soon!',
                    type: 'success',
                    dismissible: true
                }
            ]);
            setFormData({ from_name: '', to_name: 'Saroj', email: '', message: '' });
        } catch (err) {
            setToasts([
                {
                    id: 'message-failed',
                    message: 'Failed to send the message! Please try again.',
                    type: 'error',
                    dismissible: true
                }
            ]);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            ref={sectionAnimation.ref}
            initial="hidden"
            animate={sectionAnimation.controls}
            variants={fadeInVariants}
            className="max-w-2xl mx-auto p-6 bg-accent rounded-lg border border-brd shadow-lg"
        >
            <ToastContainer toasts={toasts} onDismiss={handleToastDismiss} />

            <motion.h2
                className="text-2xl font-bold text-primary mb-6 text-center"
                variants={formFieldVariants}
            >
                Get in Touch
            </motion.h2>

            <motion.form
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
                onSubmit={handleSubmit}
            >
                <motion.div variants={formFieldVariants}>
                    <Input
                        label="Your Name"
                        name="from_name"
                        placeholder="Enter your name"
                        value={formData.from_name}
                        onChange={handleChange}
                        error={errors.from_name}
                        required
                        fullWidth
                    />
                </motion.div>

                <motion.div variants={formFieldVariants}>
                    <Input
                        label="Your Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                        fullWidth
                    />
                </motion.div>

                <motion.div variants={formFieldVariants}>
                    <Input
                        label="Message"
                        name="message"
                        placeholder="Write your message here"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        required
                        fullWidth
                    />
                </motion.div>

                <motion.div variants={formFieldVariants} className="text-center">
                    <Button type="submit" variant="primary" className="w-full md:w-auto" loading={isLoading}>
                        {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                </motion.div>
            </motion.form>
        </motion.div>
    );
}