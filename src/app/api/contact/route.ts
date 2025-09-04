import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { name, email, organization, topic, message, website } = await req.json();
  if (website) return NextResponse.json({ ok: true }); // honeypot
  if (!name || !email || !message) return NextResponse.json({ ok: false }, { status: 400 });
  console.log("Contact form submission:", { name, email, organization, topic, message });
  return NextResponse.json({ ok: true });
}
