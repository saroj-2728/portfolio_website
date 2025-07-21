'use client'
import { motion } from "motion/react";
import { IoCopyOutline } from "react-icons/io5";
import { Code } from "lucide-react";
import Button from "@/components/ui/Button";
import { staggerItem } from "@/hooks/useScrollAnimation";

export default function HeroActions({ copied, setCopied }: { copied: boolean, setCopied: (v: boolean) => void }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center gap-6"
      variants={staggerItem}
    >
      <Button
        variant="primary"
        size="lg"
        href="/about"
        className="group font-wenkai font-medium"
      >
        <div className="flex items-center gap-3">
          <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Explore My Code</span>
        </div>
      </Button>
      <Button
        variant="secondary"
        size="lg"
        icon={IoCopyOutline}
        onClick={() => {
          navigator.clipboard.writeText("saroj.p.2728@gmail.com");
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="group font-wenkai font-medium"
      >
        {copied ? "Email Copied!" : "Connect via Email"}
      </Button>
    </motion.div>
  );
}
