import type { Metadata } from "next";
import { LXGW_WenKai_TC, JetBrains_Mono, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import KeyPressNavigation from "@/components/KeyPressNav";
import Footer from "@/components/Footer";
import { ProjectsProvider } from "@/contexts/ProjectsContext";
import { TerminalProvider } from "@/contexts/TerminalContext";
import MobileNav from "@/components/MobileNav";
import GlobalTerminalButton from "@/components/terminal/GlobalTerminalButton";
import GlobalTerminal from "@/components/terminal/GlobalTerminal";

// Main body font - beautiful Wenkai font
const wenkaiFont = LXGW_WenKai_TC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-wenkai',
})

// Display font for headers - modern and geometric
const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// Code font 1 - JetBrains Mono
const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Code font 2 - Fira Code for variety
const firaCode = Fira_Code({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: "Saroj Pandey",
  description: "Personal website of Saroj Pandey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${wenkaiFont.className} ${spaceGrotesk.variable} ${jetBrainsMono.variable} ${firaCode.variable} antialiased bg-background text-secondary min-h-screen`}
      >
        <TerminalProvider>
          <KeyPressNavigation>
            <ProjectsProvider>
              <div className="flex md:flex-row flex-col">
                <div className="hidden md:block sticky top-0 w-[240px] h-screen border-r border-brd bg-accent">
                  <Navbar />
                </div>
                <MobileNav />
                <div className="md:flex-1">
                  <div className="flex-1 max-w-[1080px] mx-auto mb-20 px-6 md:px-0">
                    {children}
                  </div>
                  <Footer />
                </div>
              </div>
              
              {/* Global Terminal Components */}
              <GlobalTerminalButton />
              <GlobalTerminal />
            </ProjectsProvider>
          </KeyPressNavigation>
        </TerminalProvider>
      </body>
    </html>
  );
}
