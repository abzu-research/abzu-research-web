import type { Metadata } from "next";
import { getPaper } from "../../../../lib/content";
import Prose from "../../../../components/blocks/Prose";
import BibtexBox from "../../../../components/papers/BibtexBox";
import RelationGraph from "../../../../components/graphs/RelationGraph";
import WolframEmbed from "../../../../components/wolfram/WolframEmbed";
import relations from "../../../../../content/relations.json";

export const dynamic = "force-static";

export function generateMetadata({ params }: { params: { cluster: string; slug: string } }): Metadata {
  const { frontmatter } = getPaper(params.cluster, params.slug);
  const title = frontmatter.title;
  const description = frontmatter.abstract || `Paper in ${frontmatter.cluster}`;
  const og = `/api/og/research/${params.cluster}/${params.slug}`;
  return { title, description, openGraph: { images: [og] }, twitter: { card: "summary_large_image" } };
}

export default function PaperPage({ params }: { params: { cluster: string; slug: string } }) {
  const { frontmatter, body } = getPaper(params.cluster, params.slug);
  const nodeId = `${params.cluster}/${params.slug}`;
  const graph = (relations as any);
  const nodes = graph.nodes as {id:string,label?:string,group?:string}[];
  const links = graph.links as {source:string,target:string,weight?:number}[];
  const neighbors = links.filter(l => l.source===nodeId || l.target===nodeId);
  const subNodes = nodes.filter(n => n.id===nodeId || neighbors.some(l => l.source===n.id || l.target===n.id));
  const subLinks = links.filter(l => subNodes.some(n=>n.id===l.source) && subNodes.some(n=>n.id===l.target));

  return (
    <article className="container py-16">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">{frontmatter.title}</h1>
        <p className="mt-2 opacity-80 max-w-3xl">{frontmatter.abstract}</p>
        <div className="mt-4 text-sm opacity-70 flex flex-wrap gap-3">
          <span>Program: <b>{frontmatter.cluster}</b></span>
          <span>Year: <b>{new Date(frontmatter.date).getFullYear()}</b></span>
          {frontmatter.status && <span>Status: <b>{frontmatter.status}</b></span>}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {frontmatter.repoUrl && <a className="underline" href={frontmatter.repoUrl}>GitHub</a>}
          {frontmatter.overleafUrl && <a className="underline" href={frontmatter.overleafUrl}>Overleaf</a>}
          {frontmatter.pdfUrl && <a className="underline" href={frontmatter.pdfUrl}>PDF</a>}
        </div>
      </header>

      <Prose source={body} />

      {frontmatter.citation?.bibtex && <BibtexBox bibtex={frontmatter.citation.bibtex} />}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Related in the corpus</h2>
        <p className="mt-1 text-sm opacity-75">Edges represent extends/uses/proves relationships.</p>
        <div className="mt-4"><RelationGraph nodes={subNodes} links={subLinks} /></div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Compute it live (Wolfram)</h2>
        <WolframEmbed path="/abzu/demo" params={{ alpha: 1.0, beta: 0.2 }} />
      </section>
    </article>
  );
}
