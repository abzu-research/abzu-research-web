'use client';
import React, { useMemo } from "react";

export default function WolframEmbed({ path, params }:{ path: string; params?: Record<string,string|number> }){
  const base = process.env.NEXT_PUBLIC_WOLFRAM_CLOUD_BASE || "";
  const qs = useMemo(()=>{
    const p = new URLSearchParams();
    Object.entries(params || {}).forEach(([k,v])=> p.set(k,String(v)));
    return p.toString();
  }, [params]);
  const src = `${base}${path}${qs ? "?" + qs : ""}`;
  if (!base) {
    return <div className="text-sm opacity-70">Set <code>NEXT_PUBLIC_WOLFRAM_CLOUD_BASE</code> to enable the live embed.</div>;
  }
  return <iframe src={src} className="w-full h-[420px] rounded-md border" />;
}
