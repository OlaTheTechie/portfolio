import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Collection of tech-related Unsplash photos with their full IDs
const techImageIds = [
  "xkBaqlcqeb4", // laptop and coffee
  "4Mw7nkQDByk", // code editor
  "IgWNxx7paz4", // workspace
  "9SoCnyQmkzI", // laptop on desk
  "weRQAu9TA-A", // dark code editor
];

/**
 * Get a random tech-related placeholder image from Unsplash
 * @param width - Image width (default: 800)
 * @param height - Image height (default: 400)
 * @returns URL to a random tech image
 */
export function getTechPlaceholderImage(width = 800, height = 400): string {
  const randomId = techImageIds[Math.floor(Math.random() * techImageIds.length)];
  return `https://images.unsplash.com/photo-${randomId}?w=${width}&h=${height}&fit=crop&q=80`;
}

/**
 * Convert a Google Drive sharing URL to a direct image URL
 * @param url - The Google Drive URL
 * @returns Direct URL to the image
 */
export function getGoogleDriveDirectUrl(url: string): string {
  if (!url) return getTechPlaceholderImage();

  // Extract file ID from various Google Drive URL formats
  let fileId = '';

  if (url.includes('/file/d/')) {
    fileId = url.split('/file/d/')[1].split('/')[0];
  } else if (url.includes('?id=')) {
    fileId = url.split('?id=')[1].split('&')[0];
  }

  if (!fileId) return getTechPlaceholderImage();

  // Use the direct download URL format that works with Next.js Image component
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

/**
 * Convert a Google Drive sharing URL to a direct image URL
 * @param driveUrl - The Google Drive sharing URL
 * @returns Direct URL to the image that can be used in <Image> components
 */
export function getGoogleDriveImageUrl(driveUrl: string): string {
  // Handle different Google Drive URL formats
  let fileId = "";

  // Format: https://drive.google.com/file/d/{fileId}/view
  if (driveUrl.includes("/file/d/")) {
    fileId = driveUrl.split("/file/d/")[1].split("/")[0];
  }
  // Format: https://drive.google.com/open?id={fileId}
  else if (driveUrl.includes("?id=")) {
    fileId = driveUrl.split("?id=")[1].split("&")[0];
  }
  // Format: Already a file ID
  else if (driveUrl.match(/^[a-zA-Z0-9_-]{25,}$/)) {
    fileId = driveUrl;
  }

  if (!fileId) {
    console.error("Invalid Google Drive URL:", driveUrl);
    return getTechPlaceholderImage(); // Fallback to tech placeholder
  }

  // Return the direct image URL
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}
