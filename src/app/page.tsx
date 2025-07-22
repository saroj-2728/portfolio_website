'use client'
import PageContainer from '@/components/layout/PageContainer'
import { HeroSection, InteractiveSection, GithubContributionGraph } from "@/components/sections/home";
import { useState, useEffect } from 'react';
import ToastContainer, { Toast as ToastType } from '@/components/ui/Toast';

export default function Home() {
  // State for toasts
  const [toasts, setToasts] = useState<ToastType[]>([]);

  // Show under-development toast on mount
  useEffect(() => {
    setToasts([
      { id: 'under-dev', message: '🚧 Site under development – some features may be broken.', type: 'info', dismissible: true }
    ]);
  }, []);

  const handleDismiss = (id: string) => {
    setToasts(current => current.filter(t => t.id !== id));
  };

  return (
    <>
      <ToastContainer toasts={toasts} onDismiss={handleDismiss} />
      <PageContainer>
        <HeroSection />
        <InteractiveSection />
        <GithubContributionGraph />
      </PageContainer>
    </>
  );
}