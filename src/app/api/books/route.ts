import { NextResponse } from "next/server";
import { books } from "@/data/books.json";

export async function POST(request: Request) {
  try {
    const newBook = await request.json();
    
    // Add the new book to the beginning of the array
    const updatedBooks = [newBook, ...books];
    
    // Save the updated books array (in a real app, this would be saved to a database)
    // For now, we'll just return the updated array
    return NextResponse.json(updatedBooks);
  } catch (error) {
    console.error("Error adding book:", error);
    return NextResponse.json(
      { error: "Failed to add book" },
      { status: 500 }
    );
  }
}
