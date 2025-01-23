import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Allerta_Stencil, Fira_Code } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Socials from "@/components/ui/Socials";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const firaCode = Fira_Code({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})
const allertaStencil = Allerta_Stencil({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-allerta-stencil',
})
export const metadata = {
  title: "SaR0J",
  description: "Saroj Pandey",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.className} ${allertaStencil.variable} antialiased max-w-[1080px] mx-auto bg-background text-white`}
      >
        {/* <div className="fixed inset-0">
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0H0V100' fill='none' stroke='%23333' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
              mixBlendMode: 'plus-lighter'
            }}
          />

          <div
            className="absolute inset-0 h-full w-full bg-black bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"
            // bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_90%,rgba(120,119,198,0.2),rgba(255,255,255,0))]
            style={{
              mixBlendMode: 'plus-lighter'
            }}
          />
        </div> */}
        <Socials />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
