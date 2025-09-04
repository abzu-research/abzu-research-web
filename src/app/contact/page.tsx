'use client';
import React from "react";
export default function ContactPage() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    alert(res.ok ? "Thanks — we’ll be in touch." : "Something went wrong.");
  }
  return (
    <main className="container py-16 max-w-2xl">
      <h1 className="text-4xl font-bold">Contact</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input name="name" placeholder="Name" className="w-full rounded border p-3 bg-transparent" required />
        <input name="email" type="email" placeholder="Email" className="w-full rounded border p-3 bg-transparent" required />
        <input name="organization" placeholder="Organization (optional)" className="w-full rounded border p-3 bg-transparent" />
        <select name="topic" className="w-full rounded border p-3 bg-transparent">
          <option>Collaboration</option><option>Review</option><option>Research Question</option><option>Other</option>
        </select>
        <textarea name="message" placeholder="Message" rows={6} className="w-full rounded border p-3 bg-transparent" required />
        <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button className="rounded bg-white/10 px-4 py-2 hover:bg-white/20">Send →</button>
      </form>
    </main>
  );
}
