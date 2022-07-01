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
