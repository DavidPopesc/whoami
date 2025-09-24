import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      
      {/* nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-black/[.08] dark:border-white/[.145]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold">David's Website</a>
            <div className="hidden md:flex space-x-8">
            <a href="/portfolio" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</a>
            <a href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Blog</a>
            <a href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Projects</a>
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
