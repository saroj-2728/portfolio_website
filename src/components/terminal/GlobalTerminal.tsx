'use client'
import { useTerminal } from '@/contexts/TerminalContext';
import Terminal from './Terminal';

const GlobalTerminal = () => {
  const { isTerminalOpen, closeTerminal } = useTerminal();
  
  return (
    <Terminal
      isOpen={isTerminalOpen}
      onClose={closeTerminal}
    />
  );
};

export default GlobalTerminal;
