import { metadata } from "./metadata";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/theme-provider";
import Analytics from "@/components/analytics";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <Toaster />
          <Navbar />
          <main className="mt-16 min-h-[calc(100vh-8rem)]">
            {children}
          </main>
          <footer className="py-6 border-t border-border">
            <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
              © {new Date().getFullYear()} Oladimeji Balogun. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
