export type ContentType = "heading" | "paragraph" | "image" | "list";

export type Content = {
  type: ContentType;
  body: string | string[];
};

export type Post = {
  id: number;
  title: string;
  content: Content[];
  created_at: string;
  description: string;
  slug: string;
  image: string;
  category: NewsCategory;
};

export type NewsCategory =
  | "siyaset"
  | "spor"
  | "saglik"
  | "ekonomi"
  | "yasam"
  | "teknoloji"
  | "turkiye-ve-dunya-gundemi"
  | "magazin"
  | "kultur-sanat"
  | "egitim"
  | "sariyer-haberleri"
  | "emlak"
  | "sektor"
  | "guncel-haberler"
  | "gundem";
