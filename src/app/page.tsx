"use client";

import Hero from "@/components/hero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold mb-8">Welcome to my portfolio</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Explore my work, skills, and contact information through the navigation menu above.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-muted-foreground mb-4">
              View my featured projects showcasing my technical capabilities.
            </p>
            <Button variant="outline" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
          <div className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <p className="text-muted-foreground mb-4">
              Explore my technical expertise and professional capabilities.
            </p>
            <Button variant="outline" asChild>
              <Link href="/skills">View Skills</Link>
            </Button>
          </div>
          <div className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-muted-foreground mb-4">
              Get in touch with me for opportunities and collaborations.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
