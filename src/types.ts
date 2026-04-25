export type GameFaq = {
  question: string;
  answer: string;
};

export type Game = {
  title: string;
  slug: string;
  genre?: string;
  mood?: string;
  accent?: 'signal' | 'neon' | 'ember' | 'citrus' | 'mint' | 'gold';
  description?: string;
  image: string;
  seoIntro?: string;
  seoDetails?: string;
  seoHowToPlay?: string;
  seoFeatures?: string[];
  faq?: GameFaq[];
  fullScreenUrl: string | null;
  embedUrl: string | null;
  embedOrientation?: 'landscape' | 'portrait';
  isComingSoon?: boolean;
};
