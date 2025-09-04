import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Cluster, Paper } from "../types/content";

const ROOT = process.cwd();

export function getClusters(): Cluster[] {
  const dir = path.join(ROOT, "content", "clusters");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(f => matter.read(path.join(dir, f)))
    .map(({ data }) => data as Cluster)
    .sort((a,b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getPapers(): Paper[] {
  const dir = path.join(ROOT, "content", "papers");
  if (!fs.existsSync(dir)) return [];
  const clusters = fs.readdirSync(dir).filter(n => fs.statSync(path.join(dir, n)).isDirectory());
  const all: Paper[] = [];
  for (const c of clusters) {
    const pdir = path.join(dir, c);
    for (const f of fs.readdirSync(pdir).filter(x => x.endsWith(".mdx") || x.endsWith(".md"))) {
      const { data } = matter.read(path.join(pdir, f));
      all.push(data as Paper);
    }
  }
  return all.sort((a,b) => b.date.localeCompare(a.date));
}

export function getPapersByCluster(slug: string): Paper[] {
  return getPapers().filter(p => p.cluster === slug);
}

export function getPaper(cluster: string, slug: string): { frontmatter: Paper; body: string } {
  const p1 = path.join(ROOT, "content", "papers", cluster, `${slug}.mdx`);
  const p2 = path.join(ROOT, "content", "papers", cluster, `${slug}.md`);
  const p = fs.existsSync(p1) ? p1 : p2;
  if (!fs.existsSync(p)) throw new Error(`Paper not found: ${cluster}/${slug}`);
  const { data, content } = matter.read(p);
  return { frontmatter: data as Paper, body: content };
}
