'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import Button from '../ui/Button';
import { useTerminalCommands } from '@/hooks/useTerminalCommands';
import { experienceCommand, educationCommand, servicesCommand } from './CommandLibrary';

interface TerminalCommand {
  command: string;
  output: string[];
  timestamp: string;
}

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  
  const { 
    navigationCommands, 
    infoCommands, 
    projectCommands, 
    contactCommands,
    handleNavigation,
    getCurrentPath 
  } = useTerminalCommands();

  // Welcome message
  useEffect(() => {
    if (isOpen && history.length === 0) {
      const welcomeCommand: TerminalCommand = {
        command: 'welcome',
        output: [
          '🚀 Welcome to the Terminal!',
          'Type "help" to see all available commands',
          'Type "ls" to see available pages',
          'Type "cd /<page>" to navigate anywhere',
          'Happy exploring!'
        ],
        timestamp: new Date().toLocaleTimeString()
      };
      setHistory([welcomeCommand]);
    }
  }, [isOpen, history.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Prevent background scrolling when terminal is open
  useEffect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Cleanup function to restore original overflow
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
      };
    }
  }, [isOpen]);

  // Combine all commands
  const allCommands: { [key: string]: { description: string; output: string[] } } = {
    ...navigationCommands,
    ...infoCommands,
    ...projectCommands,
    ...contactCommands,
    experience: experienceCommand,
    education: educationCommand,
    services: servicesCommand,
    clear: {
      description: 'Clear terminal',
      output: []
    },
    exit: {
      description: 'Close terminal',
      output: ['👋 Goodbye! Thanks for exploring!']
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [baseCommand, ...args] = trimmedCmd.split(' ');
    
    let output: string[] = [];

    // Handle navigation commands
    if (baseCommand === 'cd') {
      if (args.length === 0) {
        output = [
          '❌ Missing path argument',
          '',
          '💡 Usage: cd <path>',
          '📁 Example: cd /projects',
          '',
          'Type "ls" to see available paths'
        ];
      } else {
        output = handleNavigation(args[0]);
      }
    } 
    // Handle pwd command
    else if (baseCommand === 'pwd') {
      output = getCurrentPath();
    }
    // Handle other commands
    else if (allCommands[baseCommand]) {
      if (baseCommand === 'clear') {
        setHistory([]);
        return;
      }
      
      if (baseCommand === 'exit') {
        output = allCommands[baseCommand].output;
        setTimeout(() => onClose(), 1000);
      } else {
        output = allCommands[baseCommand].output;
      }
    } 
    // Unknown command
    else {
      output = [
        `❌ Command not found: ${trimmedCmd}`,
        '',
        '💡 Available commands:',
        '  • help     - Show all commands',
        '  • ls       - List pages',
        '  • cd <path> - Navigate to page',
        '  • skills   - Show technical skills',
        '  • projects - View projects',
        '  • contact  - Get contact info',
        '',
        'Type "help" for complete command list'
      ];
    }

    const newCommand: TerminalCommand = {
      command: cmd,
      output,
      timestamp: new Date().toLocaleTimeString()
    };

    setHistory(prev => [...prev, newCommand]);
    
    // Update command history
    if (cmd.trim()) {
      setCommandHistory(prev => [...prev, cmd.trim()]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="bg-terminal-bg border border-terminal-border rounded-xl shadow-2xl w-full max-w-4xl h-[500px] flex flex-col overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Terminal Header */}
          <div className="bg-terminal-header border-b border-terminal-border p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TerminalIcon className="w-5 h-5 text-terminal-green" />
              <span className="font-fira-code text-sm text-terminal-text">
                saroj@portfolio:~$ terminal
              </span>
            </div>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              className="text-terminal-text hover:text-red-400"
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* Terminal Content */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Output */}
            <div
              ref={outputRef}
              className="flex-1 p-4 bg-terminal-bg text-terminal-text font-fira-code text-sm overflow-y-auto scrollbar-hidden"
              style={{ scrollBehavior: 'smooth' }}
            >
              {history.map((cmd, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  {cmd.command !== 'welcome' && (
                    <div className="flex items-center gap-2 text-terminal-green mb-3">
                      <span>saroj@portfolio:~$</span>
                      <span>{cmd.command}</span>
                    </div>
                  )}
                  <div className="text-terminal-text">
                    {cmd.output.map((line, lineIndex) => (
                      <div key={lineIndex} className="leading-relaxed min-h-[1.2em] py-0.5">
                        {line || '\u00A0'}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-terminal-border p-4 bg-terminal-bg flex-shrink-0">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-terminal-green font-fira-code text-sm">
                  saroj@portfolio:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-terminal-text font-fira-code text-sm outline-none caret-terminal-green"
                  placeholder="Type a command..."
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
              
              {/* Quick hints */}
              <div className="mt-2 text-xs text-terminal-muted font-fira-code">
                💡 Quick commands: help | ls | cd /projects | skills | contact | exit
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Terminal;
