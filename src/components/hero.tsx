"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start pt-32 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Oladimeji Balogun</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Data Scientist | AI Engineer | Award Winning Scholar & Innovator
            </p>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              I leverage cutting-edge data science and AI to solve complex problems and drive innovation. My expertise spans machine learning, deep learning, and data analysis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/projects">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2"
                >
                  View My Work
                </motion.span>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="w-full sm:w-auto"
            >
              <a 
                href="https://github.com/OlaTheTechie/portfolio-assets/raw/main/cv/OladimejiBalogunCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="OladimejiBalogunCV.pdf"
              >
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2"
                >
                  Download CV
                </motion.span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex gap-4"
          >
            {/* Add social links here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
