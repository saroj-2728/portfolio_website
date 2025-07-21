'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import Button from './Button';

interface TerminalCommand {
  command: string;
  output: string[];
  timestamp: string;
}

interface TerminalInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TerminalInterface = ({ isOpen, onClose }: TerminalInterfaceProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: {
      description: 'Show available commands',
      output: [
        '📋 Available commands:',
        '  help        - Show this help message',
        '  skills      - Display technical skills',
        '  projects    - List featured projects', 
        '  contact     - Get contact information',
        '  whoami      - Show developer info',
        '  experience  - View work experience',
        '  education   - Show educational background',
        '  clear       - Clear terminal',
        '  exit        - Close terminal',
        '',
        'Type any command to get started! 🚀'
      ]
    },
    skills: {
      description: 'Display technical skills',
      output: [
        '💻 Technical Skills:',
        '',
        '🎯 Frontend:',
        '  • React.js / Next.js',
        '  • TypeScript / JavaScript',
        '  • Tailwind CSS / CSS3',
        '  • Framer Motion',
        '',
        '⚡ Backend:',
        '  • Node.js / Express.js',
        '  • MongoDB / PostgreSQL',
        '  • REST APIs',
        '',
        '🛠️ Tools:',
        '  • Git / GitHub',
        '  • VS Code',
        '  • Figma',
        '  • Docker',
        '',
        '📚 Currently Learning:',
        '  • Rust',
        '  • Electron.js'
      ]
    },
    projects: {
      description: 'List featured projects',
      output: [
        '🚀 Featured Projects:',
        '',
        '1. Portfolio Website',
        '   • Interactive developer portfolio with terminal UI',
        '   • Built with Next.js, TypeScript, Tailwind CSS',
        '   • Features: Code editor, terminal interface, animations',
        '',
        '2. Full Stack Web Applications',
        '   • E-commerce platforms',
        '   • Content management systems',
        '   • Real-time chat applications',
        '',
        '3. Open Source Contributions',
        '   • Contributing to React ecosystem',
        '   • Building developer tools',
        '',
        'Visit /projects to see more details! 📁'
      ]
    },
    contact: {
      description: 'Get contact information',
      output: [
        '📞 Contact Information:',
        '',
        '📧 Email: saroj.p.2728@gmail.com',
        '🐙 GitHub: github.com/saroj-2728',
        '🌍 Location: Nepal',
        '⏰ Timezone: UTC+5:45',
        '',
        '💬 Feel free to reach out for:',
        '  • Project collaborations',
        '  • Full-stack development',
        '  • Technical consultations',
        '  • Open source contributions'
      ]
    },
    whoami: {
      description: 'Show developer info',
      output: [
        '👨‍💻 Developer Profile:',
        '',
        '🏷️  Name: Saroj Pandey',
        '💼 Role: Full Stack Developer',
        '📍 Location: Nepal',
        '⏱️  Experience: 2+ years',
        '🎯 Status: Available for work',
        '❤️  Passion: Building digital experiences',
        '',
        '🎨 Motto: "Turning ideas into seamless digital reality"',
        '',
        '☕ Coffee consumed: ∞',
        '🐛 Bugs fixed: countless',
        '🚀 Features shipped: many'
      ]
    },
    experience: {
      description: 'View work experience',
      output: [
        '💼 Work Experience:',
        '',
        '🔹 Full Stack Developer (2022 - Present)',
        '   • Developed responsive web applications',
        '   • Built REST APIs and database systems',
        '   • Collaborated with cross-functional teams',
        '   • Improved application performance by 40%',
        '',
        '🔹 Frontend Developer (2021 - 2022)',
        '   • Created interactive user interfaces',
        '   • Implemented modern CSS frameworks',
        '   • Optimized for mobile responsiveness',
        '',
        '🔹 Freelance Projects',
        '   • E-commerce websites',
        '   • Business portfolios',
        '   • Custom web applications'
      ]
    },
    education: {
      description: 'Show educational background',
      output: [
        '🎓 Education:',
        '',
        '🏫 Self-taught Developer',
        '   • Online courses and tutorials',
        '   • Open source contributions',
        '   • Personal projects and experimentation',
        '',
        '📚 Continuous Learning:',
        '   • Advanced React patterns',
        '   • System design',
        '   • DevOps practices',
        '   • New technologies (Rust, Electron.js)',
        '',
        '🏆 Certifications:',
        '   • Various online programming courses',
        '   • Web development bootcamps'
      ]
    },
    clear: {
      description: 'Clear terminal',
      output: []
    },
    exit: {
      description: 'Close terminal',
      output: ['Goodbye! 👋']
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }
    
    if (trimmedCmd === 'exit') {
      setTimeout(onClose, 1000);
    }
    
    const command = commands[trimmedCmd as keyof typeof commands];
    const output = command ? command.output : [
      `Command not found: ${cmd}`,
      'Type "help" to see available commands.'
    ];
    
    setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
    setCommandHistory(prev => [...prev, cmd]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        executeCommand(input);
        setInput('');
        setHistoryIndex(-1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen && history.length === 0) {
      // Welcome message
      setHistory([{
        command: '',
        output: [
          '🚀 Welcome to Saroj\'s Terminal!',
          '',
          'Type "help" to see available commands.',
          'Use ↑/↓ arrows to navigate command history.',
          ''
        ],
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  }, [isOpen, history.length]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[99999] font-jetbrains-mono flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full max-w-4xl h-[80vh] bg-terminal-bg rounded-xl shadow-2xl border border-terminal-border overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
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
              <span>saroj@portfolio:~$</span>
            </div>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="text-terminal-text hover:text-red-400 border-terminal-border bg-transparent p-1.5"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Terminal Output */}
        <div
          ref={outputRef}
          className="flex-1 p-4 overflow-y-auto bg-terminal-bg text-terminal-text text-sm leading-relaxed"
          style={{ height: 'calc(100% - 120px)' }}
        >
          <AnimatePresence>
            {history.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-4"
              >
                {cmd.command && (
                  <div className="flex items-center gap-2 mb-1 text-terminal-green">
                    <span className="text-terminal-muted text-xs">[{cmd.timestamp}]</span>
                    <span>$</span>
                    <span>{cmd.command}</span>
                  </div>
                )}
                <div className="ml-4">
                  {cmd.output.map((line, lineIndex) => (
                    <div key={lineIndex} className="whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Terminal Input */}
        <div className="flex items-center gap-2 px-4 py-3 bg-terminal-header border-t border-terminal-border text-terminal-text">
          <span className="text-terminal-green">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-terminal-text font-jetbrains-mono"
            placeholder="Type a command..."
            autoComplete="off"
          />
          <motion.div
            className="w-2 h-5 bg-terminal-green"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TerminalInterface;
