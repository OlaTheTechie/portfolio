interface GistData {
  blogs?: {
    posts: Array<{
      title: string;
      brief: string;
      slug: string;
      dateAdded: string;
      coverImage: string;
      totalReactions: number;
      url: string;
    }>;
  };
  education?: {
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
  };
  books?: {
    current: Array<{
      title: string;
      author: string;
      coverImage: string;
      progress: number;
      review?: string;
    }>;
    completed: Array<{
      title: string;
      author: string;
      coverImage: string;
      rating: number;
      review: string;
    }>;
  };
  projects?: {
    featured: Array<{
      title: string;
      description: string;
      image: string;
      technologies: string[];
      liveUrl?: string;
      githubUrl?: string;
      featured: boolean;
    }>;
  };
}

const GIST_IDS = {
  blogs: '8cc2eab4a2ab1cf1d306341a764fb9e1',
  education: 'YOUR_EDUCATION_GIST_ID',
  books: 'YOUR_BOOKS_GIST_ID',
  projects: 'YOUR_PROJECTS_GIST_ID'
};

export async function fetchGistData<T extends keyof GistData>(
  section: T
): Promise<GistData[T]> {
  try {
    const gistId = GIST_IDS[section];
    if (!gistId) {
      throw new Error(`No Gist ID configured for section: ${section}`);
    }

    const response = await fetch(
      `https://gist.githubusercontent.com/OlaTheTechie/${gistId}/raw/${section}.json`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${section} data`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${section} data:`, error);
    throw error;
  }
}
