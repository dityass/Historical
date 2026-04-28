
export type Screen = 'splash' | 'dashboard' | 'archive' | 'reader' | 'quiz' | 'profile';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  era: string;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  historySnippet: string;
}

export interface UserStats {
  accuracy: number;
  xp: number;
  rank: string;
  streak: number;
  progress: number;
}
