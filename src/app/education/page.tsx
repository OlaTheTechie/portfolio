"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/data";
import Loading, { Error } from "@/components/loading";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { HTMLMotionProps } from "framer-motion";

interface Education {
  degrees: Array<{
    degree: string;
    school: string;
    year: string;
    description: string;
    certificate?: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    url: string;
    badge?: string;
  }>;
  achievements: Array<{
    title: string;
    organization: string;
    year: string;
    description: string;
  }>;
}

export default function EducationPage() {
  const [education, setEducation] = useState<Education | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const motionProps: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  useEffect(() => {
    async function fetchEducation() {
      try {
        setLoading(true);
        const data = await fetchData<Education>("education");
        setEducation(data);
      } catch (err) {
        console.error('Error fetching education data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load education data');
      } finally {
        setLoading(false);
      }
    }
    fetchEducation();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error || !education) {
    return <Error message={error || 'No education data available'} />;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <motion.div
        {...motionProps}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Education</h1>
        <p className="text-lg text-muted-foreground">
          My academic journey and professional certifications
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Degrees */}
        <section>
          <motion.h2 {...motionProps} className="text-3xl font-bold mb-6">
            Education
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.degrees.map((degree, index) => (
              <motion.div
                key={index}
                {...motionProps}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-2">{degree.degree}</h3>
                  <p className="text-muted-foreground mb-1">{degree.school}</p>
                  <p className="text-sm text-muted-foreground mb-4">{degree.year}</p>
                  <p className="text-sm">{degree.description}</p>
                  {degree.certificate && (
                    <a
                      href={degree.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-primary hover:underline"
                    >
                      View Certificate
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <motion.h2 {...motionProps} className="text-3xl font-bold mb-6">
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.certifications.map((cert, index) => (
              <motion.div
                key={index}
                {...motionProps}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                  {cert.badge && (
                    <div className="mt-4 h-16 relative">
                      <Image
                        src={cert.badge}
                        alt={`${cert.name} badge`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-primary hover:underline"
                  >
                    Verify Certificate
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <motion.h2 {...motionProps} className="text-3xl font-bold mb-6">
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                {...motionProps}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground mb-1">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">{achievement.year}</p>
                  <p className="text-sm">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

