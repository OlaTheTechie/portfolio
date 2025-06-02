"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold mb-12">Download Resume</h1>
      <div className="max-w-md mx-auto">
        <p className="text-muted-foreground mb-6">
          Download my latest resume in PDF format.
        </p>
        <a 
          href="https://github.com/OlaTheTechie/portfolio-assets/raw/main/cv/OladimejiBalogunCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="OladimejiBalogunCV.pdf"
          className="block w-full"
        >
          <Button size="lg" className="w-full">
            Download Resume
          </Button>
        </a>
      </div>
    </motion.div>
  );
}
