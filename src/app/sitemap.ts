import { getClusters, getPapers } from "../lib/content";
export default function sitemap(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const pages = [
    "", "research", "papers", "contact",
    ...getClusters().map(c=>`research/${c.slug}`),
    ...getPapers().map(p=>`research/${p.cluster}/${p.slug}`)
  ];
  return pages.map(p => ({ url: `${base}/${p}`, lastModified: new Date() }));
}
