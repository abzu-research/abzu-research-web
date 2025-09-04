import Link from "next/link";
import Image from "next/image";
import { getClusters, getPapersByCluster } from "../../../lib/content";
export const dynamic = "force-static";
export function generateStaticParams() { return getClusters().map(c => ({ cluster: c.slug })); }
export default function ClusterPage({ params }: { params: { cluster: string } }) {
  const cluster = getClusters().find(c => c.slug === params.cluster);
  if (!cluster) return <div className="container py-16">Unknown cluster.</div>;
  const papers = getPapersByCluster(cluster.slug);
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold">{cluster.title}</h1>
      {cluster.summary && <p className="mt-2 opacity-80 max-w-3xl">{cluster.summary}</p>}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {papers.map(p => (
          <Link key={p.slug} href={`/research/${cluster.slug}/${p.slug}`} className="group rounded-lg border overflow-hidden">
            <div className="aspect-[4/3] bg-[hsl(var(--ink-2))] relative">
              <Image
                src={p.thumbnail || `/api/og/research/${cluster.slug}/${p.slug}`}
                alt={p.title}
                fill
                className="object-cover transition group-hover:scale-[1.02]"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                priority={false}
              />
            </div>
            <div className="p-4">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm opacity-70">{(p.authors || []).join(", ")}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
