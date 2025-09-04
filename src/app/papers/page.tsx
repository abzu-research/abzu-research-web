import Link from "next/link";
import Image from "next/image";
import { getPapers } from "../../lib/content";

export const dynamic = "force-static";

function unique<T>(arr: T[]): T[] { return Array.from(new Set(arr)); }

export default function PapersIndex({ searchParams }: { searchParams?: { [key:string]: string | string[] | undefined } }) {
  const papers = getPapers();
  const program = (searchParams?.program as string) || "";
  const year = (searchParams?.year as string) || "";
  const status = (searchParams?.status as string) || "";
  const filtered = papers.filter(p =>
    (!program || p.cluster === program) &&
    (!year || new Date(p.date).getFullYear().toString() === year) &&
    (!status || (p.status || "").toLowerCase() === status.toLowerCase())
  );

  const programs = unique(papers.map(p=>p.cluster));
  const years = unique(papers.map(p=>new Date(p.date).getFullYear().toString())).sort().reverse();
  const statuses = unique(papers.map(p=>p.status || "")).filter(Boolean);

  function linkWith(params: Record<string,string>) {
    const url = new URL("http://x/papers");
    const merged = { program, year, status, ...params };
    Object.entries(merged).forEach(([k,v])=> { if (v) url.searchParams.set(k, v); else url.searchParams.delete(k); });
    return url.pathname + url.search;
  }

  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold">Papers</h1>
      <div className="mt-4 flex flex-wrap gap-2 text-sm items-center">
        <span className="opacity-70">Program:</span>
        <a href={linkWith({ program: "" })} className={`chip ${!program ? "chip--active" : ""}`}>All</a>
        {programs.map(p => <a key={p} href={linkWith({ program: p })} className={`chip ${program===p ? "chip--active" : ""}`}>{p}</a>)}
        <span className="ml-4 opacity-70">Year:</span>
        <a href={linkWith({ year: "" })} className={`chip ${!year ? "chip--active" : ""}`}>All</a>
        {years.map(y => <a key={y} href={linkWith({ year: y })} className={`chip ${year===y ? "chip--active" : ""}`}>{y}</a>)}
        <span className="ml-4 opacity-70">Status:</span>
        <a href={linkWith({ status: "" })} className={`chip ${!status ? "chip--active" : ""}`}>All</a>
        {statuses.map(s => <a key={s} href={linkWith({ status: s })} className={`chip ${status===s ? "chip--active" : ""}`}>{s}</a>)}
      </div>

      <style>{`.chip{padding:4px 10px;border-radius:999px;border:1px solid hsl(var(--line));opacity:.8}
        .chip--active{background:rgba(255,255,255,.08);opacity:1}`}</style>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <Link key={p.slug} href={`/research/${p.cluster}/${p.slug}`} className="group rounded-lg border overflow-hidden">
            <div className="aspect-[4/3] bg-[hsl(var(--ink-2))] relative">
              <Image
                src={p.thumbnail || `/api/og/research/${p.cluster}/${p.slug}`}
                alt={p.title}
                fill
                className="object-cover transition group-hover:scale-[1.02]"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm opacity-70">{new Date(p.date).getFullYear()} · {p.cluster}</div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && <p className="mt-10 opacity-70">No matches. Clear filters to see more papers.</p>}
    </main>
  );
}
