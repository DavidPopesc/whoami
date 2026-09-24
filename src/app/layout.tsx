import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import GridBackground from "../components/GridBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David's Website",
  description: "Welcome to my personal website showcasing my portfolio, blog, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <GridBackground />

      {/* nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-black/[.08] dark:border-white/[.145]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-mono-tag text-lg font-bold">
              <span className="text-accent">~/</span>david
            </Link>
            <div className="hidden md:flex space-x-8">
            {/* <Link href="/portfolio" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</Link>
            <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Blog</Link>
            <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Projects</Link> */}
            </div>
          </div>
        </div>
      </nav>
        <div className="pt-20">
        {children}
        </div>
      </body>
    </html>
  );
}
