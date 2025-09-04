import Link from "next/link";
import { getClusters, getPapersByCluster } from "../../lib/content";
export const dynamic = "force-static";
export default function ResearchIndex() {
  const clusters = getClusters();
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold">Research Programs</h1>
      <p className="mt-2 opacity-80 max-w-3xl">Programs organize papers by method and aim.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clusters.map(c => (
          <Link key={c.slug} href={`/research/${c.slug}`} className="group rounded-lg border p-6 hover:shadow-lg">
            <div className="text-sm uppercase tracking-wide opacity-60">Program</div>
            <div className="mt-1 text-2xl font-semibold">{c.title}</div>
            <p className="mt-2 line-clamp-3 opacity-80">{c.summary}</p>
            <div className="mt-4 text-sm opacity-60">{getPapersByCluster(c.slug).length} papers</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
