import type { Metadata } from "next";
import { LXGW_WenKai_TC, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import KeyPressNavigation from "@/components/KeyPressNav";
import Footer from "@/components/Footer";
import { ProjectsProvider } from "@/contexts/ProjectsContext";
import MobileNav from "@/components/MobileNav";


const wenkaiFont = LXGW_WenKai_TC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
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
        className={`${wenkaiFont.className} ${jetBrainsMono.variable} antialiased bg-background text-secondary min-h-screen`}
      >
        <KeyPressNavigation>
          <ProjectsProvider>
            <div className="flex md:flex-row flex-col">
              <div className="hidden md:block sticky top-0 w-[240px] h-screen border-r border-brd bg-accent">
                <Navbar />
              </div>
              <MobileNav />
              <div className="md:flex-1">
                <div className="flex-1 max-w-[1080px] mx-auto px-6 md:px-0">
                  {children}
                </div>
                <Footer />
              </div>
            </div>
          </ProjectsProvider>
        </KeyPressNavigation>
      </body>
    </html>
  );
}
