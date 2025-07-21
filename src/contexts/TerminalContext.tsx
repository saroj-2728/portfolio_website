'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface TerminalContextType {
  isTerminalOpen: boolean;
  openTerminal: () => void;
  closeTerminal: () => void;
  toggleTerminal: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};

interface TerminalProviderProps {
  children: ReactNode;
}

export const TerminalProvider = ({ children }: TerminalProviderProps) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const openTerminal = () => setIsTerminalOpen(true);
  const closeTerminal = () => setIsTerminalOpen(false);
  const toggleTerminal = () => setIsTerminalOpen(prev => !prev);

  return (
    <TerminalContext.Provider value={{
      isTerminalOpen,
      openTerminal,
      closeTerminal,
      toggleTerminal
    }}>
      {children}
    </TerminalContext.Provider>
  );
};
