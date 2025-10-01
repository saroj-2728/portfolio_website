'use client'
import PageContainer from '@/components/layout/PageContainer'
import { HeroSection, /* InteractiveSection */ } from "@/components/sections/home";

export default function Home() {

  return (
    <>
      <PageContainer>
        <HeroSection />
        {/* <InteractiveSection /> */}
      </PageContainer>
    </>
  );
}