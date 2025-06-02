"use client";

import { fetchData } from "@/lib/data";
import BookCard from "@/components/book-card";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";

interface Book {
  title: string;
  author: string;
  coverImage: string;
  description?: string;
  url?: string;
}

interface BooksData {
  books: Book[];
}

export default function BooksPage() {
  const [data, setData] = useState<BooksData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      try {
        const booksData = await fetchData<BooksData>("books");
        setData(booksData);
      } catch (e) {
        console.error('Error fetching books data:', e);
        setError(e instanceof Error ? e.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
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

  if (!data?.books) {
    return (
      <div className="container py-8">
        <div className="text-center">No books found.</div>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Welcome to My Mini Library</h1>
        <p className="text-lg text-muted-foreground">
          Here's a curated collection of books that have shaped my journey and knowledge.
          Feel free to explore and discover something interesting!
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.books.map((book: Book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}
