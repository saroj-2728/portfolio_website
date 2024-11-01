"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SocialIcons } from "@/components/SvgIcons";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [messageStatus, setMessageStatus] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Saroj",
    email: "",
    message: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setMessageStatus("SUCCESS! Your message has been sent.");
      })
      .catch((error) => {
        setMessageStatus("Failed to send the message! Please try again!");
        console.error("Error sending message: ", error.text);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] py-8 px-4 md:px-6">
      <motion.div
        className="w-full max-w-lg bg-[var(--bg-card)] p-6 sm:p-8 rounded-lg shadow-lg mb-6 sm:mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-center">Get in Touch</h1>
        <p className="text-base sm:text-lg text-center mb-6 sm:mb-8 text-[var(--text-secondary)]">
          I&#39;d love to hear from you! Please fill out the form below to reach out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name Field */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="name" className="font-semibold mb-1 sm:mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="p-2 sm:p-3 rounded-lg bg-[var(--bg-section)] border border-green-500/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
              required
            />
            {errors.from_name && <p className="text-red-500 text-center mt-1 text-xs sm:text-sm">{errors.from_name}</p>}
          </motion.div>

          {/* Email Field */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <label htmlFor="email" className="font-semibold mb-1 sm:mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 sm:p-3 rounded-lg bg-[var(--bg-section)] border border-green-500/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
              required
            />
            {errors.email && <p className="text-red-500 text-center mt-1 text-xs sm:text-sm">{errors.email}</p>}
          </motion.div>

          {/* Message Field */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <label htmlFor="message" className="font-semibold mb-1 sm:mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="p-2 sm:p-3 rounded-lg bg-[var(--bg-section)] border border-green-500/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
              required
            />
            {errors.message && <p className="text-red-500 text-center mt-1 text-xs sm:text-sm">{errors.message}</p>}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full p-2 sm:p-3 rounded-lg bg-[var(--accent-primary)] text-white font-semibold hover:bg-opacity-90 transition duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Success Indicator */}
        {messageStatus && (
          <motion.p
            className={`mt-4 ${messageStatus.includes("SUCCESS") ? "text-[#0EEA2F]" : "text-[#fc0303]"} font-semibold text-center`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {messageStatus}
          </motion.p>
        )}
      </motion.div>

      {/* Follow Me Section */}
      <motion.div
        className="text-center mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Follow Me</h2>
        <p className="text-[var(--text-secondary)] mb-4 text-sm sm:text-base">
          Connect with me on these platforms:
        </p>
        <div className="flex justify-center flex-wrap space-x-4 sm:space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/saroj27/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[var(--accent-primary)] text-2xl sm:text-3xl mb-4"
          >
            <SocialIcons.FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/saroj-2728"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[var(--accent-primary)] text-2xl sm:text-3xl mb-4"
          >
            <SocialIcons.FaGithub />
          </motion.a>
          <motion.a
            href="https://instagram.com/_._.saroj._._"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[var(--accent-primary)] text-2xl sm:text-3xl mb-4"
          >
            <SocialIcons.FaInstagram />
          </motion.a>
          <motion.a
            href="https://facebook.com/1sarojpandey"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[var(--accent-primary)] text-2xl sm:text-3xl mb-4"
          >
            <SocialIcons.FaFacebook />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
