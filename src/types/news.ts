export enum Subject {
  SPORT = "sport",
  POLITICS = "politics",
  ECONOMY = "economy",
  TECHNOLOGY = "technology",
  HEALTH = "health",
  LIFESTYLE = "lifestyle",
}

export type Content = {
  type: "heading" | "paragraph" | "image" | "list";
  body: string | string[];
};

export type News = {
  id: number;
  title: string;
  content: Content[];
  created_at: string;
  description: string;
  slug: string;
  image: string;
  subject: Subject;
};
