'use client'
import { HeroSection, InteractiveSection } from "@/components/sections/home";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-10">
      <div className="max-w-[960px] w-full mx-auto space-y-12 md:space-y-16">
        <HeroSection />
        <InteractiveSection />
      </div>
    </main>
  );
}