export type Post = {
  id: string;
  meta: PostMeta;
  title: string;
  body: string;
  slug: string;
};

export type PostMeta = {
  updatedAt?: string;
  publishedAt: string;
  heroImage?: {
    url: string;
    title?: string;
  };
  tags?: string[];
  excerpt?: string;
};
