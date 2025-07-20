'use client'
import { HeroSection, ProjectsSection, FeedSection, StackSection } from "@/components/sections";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-10">
      <div className="max-w-[960px] w-full mx-auto">
        <HeroSection />
        <ProjectsSection />
        <FeedSection />
        <StackSection />
      </div>
    </main>
  );
}