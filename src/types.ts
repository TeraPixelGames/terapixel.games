export type GameFaq = {
  question: string;
  answer: string;
};

export type GameGuideSection = {
  heading: string;
  copy: string;
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
  designNotes?: string;
  controls?: string[];
  playerTips?: string[];
  guideSections?: GameGuideSection[];
  faq?: GameFaq[];
  fullScreenUrl: string | null;
  embedUrl: string | null;
  embedOrientation?: 'landscape' | 'portrait';
  isComingSoon?: boolean;
};
