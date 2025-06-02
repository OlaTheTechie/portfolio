"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/data";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

interface GistResponse {
  featured: Project[];
}

const DEFAULT_PROJECTS: Project[] = [
  {
    title: "AI Resume Screener",
    description: "Built an AI system using NLP and transformer models to automate resume screening and candidate evaluation for hiring managers.",
    tech: ["Python", "Transformers", "NLP", "Machine Learning"],
    github: "https://github.com/OlaTheTechie/ai-resume-screener"
  },
  // Add more default projects if needed
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadProjects = async () => {
      try {
        const data = await fetchData<GistResponse>('projects');
        console.log('Fetched projects data:', data);
        
        if (!isMounted) return;
        
        // Check if data has a 'featured' array with items
        if (data?.featured?.length > 0) {
          setProjects(data.featured);
        } else {
          console.warn('No featured projects found in the response, using default projects');
          // Use default projects if no featured projects found
          setProjects(DEFAULT_PROJECTS);
        }
      } catch (err) {
        console.error('Failed to load projects, using default projects:', err);
        if (isMounted) {
          setError('Failed to load latest projects. Showing default projects.');
          setProjects(DEFAULT_PROJECTS);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProjects();
    
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Selected works that showcase my development and academic capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="mr-2">
                        <Button variant="outline" size="sm">GitHub</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
