import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parkit — Smart Parking Marketplace (Kerala)",
  description: "Book parking spots in Kerala in under 60 seconds. Find, book, and pay securely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50`}>
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          {children}
          <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            © 2026 Parkit Marketplace. Built for Kerala.
          </footer>
        </main>
      </body>
    </html>
  );
}
