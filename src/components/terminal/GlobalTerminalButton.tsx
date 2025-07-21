'use client'
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useTerminal } from '@/contexts/TerminalContext';

const GlobalTerminalButton = () => {
  const { openTerminal } = useTerminal();

  return (
    <motion.button
      onClick={openTerminal}
      className="fixed bottom-6 right-6 bg-terminal-green hover:bg-purple-600 text-white p-4 rounded-full shadow-lg z-40 group transition-all duration-300 hover:scale-110 cursor-pointer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title="Open Terminal (Global Access)"
    >
      <Terminal className="w-6 h-6" />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-terminal-green rounded-full opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-surface border border-brd rounded-lg p-2 whitespace-nowrap text-sm">
          <div className="text-primary font-medium">Open Terminal</div>
        </div>
      </div>
    </motion.button>
  );
};

export default GlobalTerminalButton;
