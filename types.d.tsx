export interface Project {
  owner: string;
  repo: string;
  link: string;
  description?: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: string | number;
  forks: string | number;
}

/** Represents a Post in the Blog. */
export interface Post {
  pathname: string;
  markdown: string;
  title: string;
  publishDate: Date;
}
