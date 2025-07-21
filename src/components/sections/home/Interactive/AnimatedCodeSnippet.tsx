'use client'
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Button from '@/components/ui/Button';

export default function AnimatedCodeSnippet({ onBuild }: { onBuild: () => void }) {
    const lines = [
        "// Greetings, explorer! 🕵️‍♂️",
        "const secrets = ['creativity', 'code', 'coffee', 'curiosity'];",
        "const foundSecrets = secrets.filter(s => s !== 'bugs');",
        "console.log('You\'ve unlocked:', foundSecrets.join(', '));",
        "// Watch out for bugs though! 🐞",
        "// Enjoy the journey! ✨"
    ];

    const lineVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    const cursorAnimation = {
        animate: { opacity: [1, 0, 1] },
        transition: { repeat: Infinity, duration: 1.2 }
    };

    return (
        <div
            className="max-w-md bg-terminal-bg rounded-lg shadow-lg font-mono text-sm md:text-base text-terminal-green border border-terminal-green/40 overflow-hidden relative"
        >
            {/* Header bar like VS Code */}
            <div className="flex items-center gap-3 px-4 py-3 bg-terminal-header border-b border-terminal-green/50">
                <div className='flex gap-5 items-center'>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center gap-2 text-terminal-text text-sm">
                        <Terminal className="w-4 h-4" />
                        <span>code.js</span>
                    </div>
                </div>
            </div>

            {/* Code lines */}
            <div className="px-6 py-4 space-y-1 leading-[1.4]">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        variants={lineVariants}
                        className="whitespace-pre-wrap"
                    >
                        {line}
                        {i === lines.length - 1 && (
                            <motion.span
                                className="inline-block w-1 bg-terminal-green ml-1"
                                {...cursorAnimation}
                            />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Build button */}
            <div className="absolute bottom-3 right-3">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={onBuild}
                    className="text-terminal-text hover:text-terminal-green bg-transparent border border-terminal-green/30 hover:border-terminal-green transition-colors"
                >
                    <div className="flex items-center gap-1">
                        <Terminal className="size-4" />
                        <span>Build</span>
                    </div>
                </Button>
            </div>
        </div>
    );
}