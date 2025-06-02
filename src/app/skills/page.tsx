"use client";

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Loading from "@/components/loading";

// Disable SSR for the skills component since it uses browser APIs
const Skills = dynamic(() => import('@/components/skills'), {
  ssr: false,
  loading: () => <Loading />
});

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive overview of my technical and academic capabilities
        </p>
      </div>
      <Skills />
    </motion.div>
  );
}
