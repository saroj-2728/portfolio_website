'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Terminal } from 'lucide-react';
import { createPortal } from 'react-dom';
import Button from './Button';
import AnimatedImage from '@/components/image/AnimatedImage';

interface DeveloperInfoPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const highlightJson = (json: string) => {
    return json.replace(
        /("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        (match) => {
            let cls = 'text-[var(--code-number)]';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'text-[var(--code-key)]'; // key
                } else {
                    cls = 'text-[var(--code-string)]'; // string
                }
            } else if (/true|false/.test(match)) {
                cls = 'text-[var(--code-boolean)]'; // booleans
            } else if (/null/.test(match)) {
                cls = 'text-[var(--code-null)]'; // null
            }
            return `<span class="${cls}">${match}</span>`;
        }
    );
};


const DeveloperInfoPopup = ({ isOpen, onClose }: DeveloperInfoPopupProps) => {
    const [copied, setCopied] = useState(false);
    const [typingIndex, setTypingIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

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
  "sleepless_nights": "∞",
  "bugs_fixed": "countless",
  "features_shipped": "many",
  "last_updated": "${new Date().toISOString()}"
}`;

    useEffect(() => {
        if (isOpen) {
            setTypingIndex(0);
            const timer = setInterval(() => {
                setTypingIndex((prev) => (prev < developerData.length ? prev + 1 : (clearInterval(timer), prev)));
            }, 25);
            return () => clearInterval(timer);
        }
    }, [isOpen, developerData.length]);

    const handleCopy = () => {
        navigator.clipboard.writeText(developerData);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    return mounted ? createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[99999] font-jetbrains-mono flex bg-terminal-bg text-terminal-text"
                    onClick={handleBackgroundClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Left Side */}
                    <motion.div
                        className="w-1/2 flex flex-col items-center justify-between py-8 bg-background text-white relative"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="mb-6 text-lg font-bold text-terminal-green animate-pulse">
                            sudo pacman -S profile-image
                        </div>

                        {/* Image */}
                        <AnimatedImage
                            src="https://res.cloudinary.com/djfns59te/image/upload/v1745612812/profileImage_1_fp528i.jpg"
                            alt="Saroj Pandey"
                            className="rounded-lg shadow-2xl"
                            width={300}
                            height={400}
                            hoverEffect="scale"
                        />

                        {/* Footer */}
                        <div className="mt-6 text-sm text-terminal-muted space-y-2">
                            <span className="block">🦀 Running: <span className="text-terminal-green">cargo run --future-vision</span></span>
                            <div className="w-full h-2 bg-terminal-border rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-[progress_3s_linear_infinite]" />
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Side - Developer Info */}
                    <motion.div
                        className="w-1/2 flex flex-col bg-terminal-bg border-l border-terminal-border"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-terminal-header border-b border-terminal-border">
                            <div className='flex gap-5 items-center'>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex items-center gap-2 text-terminal-text text-sm">
                                    <Terminal className="w-4 h-4" />
                                    <span>info.json</span>
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
                        <div className="p-6 font-mono text-sm overflow-auto flex-1">
                            <pre className="whitespace-pre-wrap leading-relaxed">
                                <code
                                    dangerouslySetInnerHTML={{
                                        __html: highlightJson(developerData.slice(0, typingIndex)),
                                    }}
                                />
                                {typingIndex < developerData.length && (
                                    <motion.span
                                        className="inline-block w-0.5 h-5 bg-terminal-green ml-1"
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                    />
                                )}
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