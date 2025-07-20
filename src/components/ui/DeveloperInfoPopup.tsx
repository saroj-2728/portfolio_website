'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Terminal } from 'lucide-react';
import { createPortal } from 'react-dom';
import Button from './Button';

interface DeveloperInfoPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const DeveloperInfoPopup = ({ isOpen, onClose }: DeveloperInfoPopupProps) => {
    const [copied, setCopied] = useState(false);
    const [typingIndex, setTypingIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const developerData = `{
  "name": "Saroj Pandey",
  "role": "Full Stack Developer",
  "location": "Nepal",
  "experience": "2+ years",
  "status": "working",
  "passion": "Building digital experiences",
  "skills": {
    "frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    "backend": ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    "tools": ["VS Code", "Git", "Github", "Figma"],
    "currently_learning": ["Rust", "Electron.js"]
  },
  "contact": {
    "email": "saroj.p.2728@gmail.com",
    "github": "github.com/saroj-2728",
    "timezone": "UTC+5:45"
  },
  "motto": "Turning ideas into seamless digital reality",
  "coffee_consumed": "∞",
  "bugs_fixed": "countless",
  "features_shipped": "many",
  "last_updated": "${new Date().toISOString()}"
}`;

    useEffect(() => {
        if (isOpen) {
            setTypingIndex(0);
            const timer = setInterval(() => {
                setTypingIndex((prev) => {
                    if (prev < developerData.length) {
                        return prev + 1;
                    } else {
                        clearInterval(timer);
                        return prev;
                    }
                });
            }, 25); // Typing speed

            return () => clearInterval(timer);
        }
    }, [isOpen, developerData.length]);

    const handleCopy = () => {
        navigator.clipboard.writeText(developerData);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return mounted ? createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[99999] font-jetbrains-mono flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={handleBackgroundClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ zIndex: 99999 }}
                >
                    <motion.div
                        className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden bg-terminal-bg rounded-xl shadow-2xl border border-terminal-border"
                        initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-terminal-header border-b border-terminal-border">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex items-center gap-2 text-terminal-text text-sm">
                                    <Terminal className="w-4 h-4" />
                                    <span>developer-info.json</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={handleCopy}
                                    className="text-terminal-text hover:text-terminal-green border-terminal-border bg-transparent"
                                >
                                    <div className="flex items-center gap-1">
                                        <Copy className="size-3" />
                                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                                    </div>
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={onClose}
                                    className="text-terminal-text hover:text-red-400 border-terminal-border bg-transparent p-1.5"
                                >
                                    <X className="size-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-sm overflow-auto max-h-[60vh] bg-terminal-bg">
                            <pre className="text-terminal-text whitespace-pre-wrap leading-relaxed">
                                <code>
                                    {developerData.slice(0, typingIndex)}
                                    {typingIndex < developerData.length && (
                                        <motion.span
                                            className="inline-block w-0.5 h-5 bg-terminal-green ml-1"
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                        />
                                    )}
                                </code>
                            </pre>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-3 bg-terminal-header border-t border-terminal-border text-xs text-terminal-muted">
                            <div className="flex justify-between items-center">
                                <span>JSON • UTF-8 • {developerData.split('\n').length} lines</span>
                                <span>Press ESC to close</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    ) : null;
};

export default DeveloperInfoPopup;
