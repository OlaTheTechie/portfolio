"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface BookProps {
  title: string;
  author: string;
  coverImage: string;
  description?: string;
  url?: string;
}

export default function BookCard({ book }: { book: BookProps }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="hover:shadow-lg transition-shadow h-full flex flex-col group">
        <div className="relative h-[300px] overflow-hidden">
          {imageError ? (
            <div className="w-full h-full bg-muted rounded-t-lg flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
          ) : (
            <div className="relative w-full h-full bg-muted">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-contain rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={true}
              />
            </div>
          )}
        </div>
        <CardContent className="flex-1 p-6 space-y-4">
          <div className="space-y-2">
            <CardTitle className="line-clamp-2 text-xl">{book.title}</CardTitle>
            <p className="text-sm text-muted-foreground">by {book.author}</p>
          </div>
          
          {book.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
          )}

          {book.url && (
            <Button variant="outline" className="w-full mt-4" asChild>
              <a href={book.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                View Book <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
