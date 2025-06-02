export const GIST_IDS = {
  skills: '5d698ad98c427d228615f5a7cfa9fa2f',
  projects: '6aab12717eb09597f2559a3ba32fa5fe',
  education: '68e9927fb02bd6ed9aa771654e71bc07',
  books: 'e7a6490e7437425ba6ddaa308069191c',
  articles: '8cc2eab4a2ab1cf1d306341a764fb9e1'
} as const;

export type DataType = keyof typeof GIST_IDS;
