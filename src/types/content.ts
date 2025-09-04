export type Cluster = {
  slug: string;
  title: string;
  summary: string;
  order?: number;
  cover?: string;
  colorToken?: string;
};

export type Paper = {
  slug: string;
  title: string;
  cluster: string;
  authors: string[];
  abstract: string;
  date: string;
  status?: "preprint" | "under review" | "published";
  repoUrl?: string;
  overleafUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
  datasetUrl?: string;
  tags?: string[];
  ogImage?: string;
  thumbnail?: string;
  citation?: { bibtex?: string; doi?: string };
};
