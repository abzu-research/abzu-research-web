'use client';
import React from "react";

export default function BibtexBox({ bibtex }:{ bibtex: string }){
  async function copy(){
    try{ await navigator.clipboard.writeText(bibtex); alert("BibTeX copied."); }
    catch{ alert("Could not copy."); }
  }
  return (
    <div className="not-prose mt-6">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Citation</h3>
        <button onClick={copy} className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20">Copy</button>
      </div>
      <pre className="p-4 rounded-md bg-[hsl(var(--ink-2))] overflow-auto"><code>{bibtex}</code></pre>
    </div>
  );
}
