"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="mt-4 text-lg text-muted-foreground">Loading...</p>
    </div>
  );
}

interface ErrorProps {
  message: string;
}

export function Error({ message }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-destructive text-6xl mb-4">⚠️</div>
      <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong</h2>
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
