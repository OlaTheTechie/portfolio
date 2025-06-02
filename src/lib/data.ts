import { GIST_IDS, DataType } from './config';

interface GistResponse {
  files: {
    [key: string]: {
      content: string;
    };
  };
}

export class GistError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GistError';
  }
}

export async function fetchData<T>(type: DataType): Promise<T> {
  try {
    const response = await fetch(`https://api.github.com/gists/${GIST_IDS[type]}`);
    if (!response.ok) {
      throw new GistError(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json() as GistResponse;
    const file = Object.values(data.files)[0];
    if (!file) {
      throw new GistError('No file found in gist');
    }
    return JSON.parse(file.content) as T;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching ${type} data:`, error.message);
      throw new GistError(error.message);
    }
    throw new GistError('An unknown error occurred');
  }
}
