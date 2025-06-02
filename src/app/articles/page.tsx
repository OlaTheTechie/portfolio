"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/data";
import Loading from "@/components/loading";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Article {
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  url: string;
  type: "article" | "publication" | "research";
  venue?: string;
}

interface ArticlesData {
  articles: Article[];
}

export default function ArticlesPage() {
  const [data, setData] = useState<ArticlesData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const articlesData = await fetchData<ArticlesData>("articles" as const);
        setData(articlesData);
      } catch (e) {
        console.error('Error fetching articles:', e);
        setError(e instanceof Error ? e.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="container py-8">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  if (!data?.articles) {
    return (
      <div className="container py-8">
        <div className="text-center">No articles found.</div>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Articles & Publications</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my articles, research papers, and technical publications in
          data science, machine learning, and software engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.articles.map((article) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                {article.coverImage && (
                  <div className="relative h-48 w-full bg-muted">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={article.type === "publication" ? "default" : "outline"}
                        className="capitalize"
                      >
                        {article.type}
                      </Badge>
                      <time className="text-sm text-muted-foreground">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short'
                        })}
                      </time>
                    </div>
                    <h3 className="font-semibold text-lg line-clamp-2">{article.title}</h3>
                    {article.venue && (
                      <p className="text-sm text-muted-foreground italic">
                        {article.venue}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
