"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
  { name: "Books", href: "/books" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="text-2xl font-bold">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              >
                OlaTheTechie
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-1 md:gap-2 lg:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right Side - Theme Toggle & CV Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <a 
                href="https://github.com/OlaTheTechie/portfolio-assets/raw/main/cv/OladimejiBalogunCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="OladimejiBalogunCV.pdf"
              >
                Download CV
              </a>
            </Button>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  asChild
                >
                  <a 
                    href="https://github.com/OlaTheTechie/portfolio-assets/raw/main/cv/OladimejiBalogunCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="OladimejiBalogunCV.pdf"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
