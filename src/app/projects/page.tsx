"use client";

import { motion } from "framer-motion";
import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4"
    >
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <Projects />
    </motion.div>
  );
}
