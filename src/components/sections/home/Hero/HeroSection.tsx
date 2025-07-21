import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer } from "@/hooks/useScrollAnimation";
import HeroIntro from "./HeroIntro";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => ["Full Stack Developer", "Problem Solver", "Code Architect"], []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100; // faster when deleting
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500); // wait before deleting
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roles, currentRoleIndex]);

  const heroAnimation = useScrollAnimation({ threshold: 0.2, bidirectional: true });

  return (
    <motion.header
      ref={heroAnimation.ref}
      className="me md:p-12 md:pb-0 pb-16 space-y-12 md:space-y-16"
      initial="hidden"
      animate={heroAnimation.controls}
      variants={staggerContainer}
    >
      <HeroIntro displayText={displayText} />
      <HeroContent />
      <HeroActions copied={copied} setCopied={setCopied} />
    </motion.header>
  );
}