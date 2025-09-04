'use client';
import React from "react";

export default function Callout({ type = "info", title, children }:{ type?: "info"|"warn"|"success"; title?: string; children: React.ReactNode }){
  const tone = type === "warn" ? "border-yellow-500/40 bg-yellow-500/5" :
               type === "success" ? "border-emerald-500/40 bg-emerald-500/5" :
               "border-cyan-500/40 bg-cyan-500/5";
  return (
    <div className={`not-prose mt-6 rounded-md border p-4 ${tone}`}>
      {title && <div className="mb-1 text-sm font-semibold opacity-80">{title}</div>}
      <div className="opacity-90">{children}</div>
    </div>
  );
}
