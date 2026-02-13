import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/mongodb";

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(1).max(150).optional().or(z.literal("")),
  message: z.string().min(1).max(5000),
  // optional anti-spam field (honeypot)
  website: z.string().optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = ContactSchema.parse(json);

    // Honeypot: if bots fill this hidden field => ignore
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const db = await getDb();
    const collection = db.collection("contact_messages");

    await collection.insertOne({
      ...data,
      createdAt: new Date(),
      status: "new",
      ip:
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        req.headers.get("x-real-ip") ??
        null,
      userAgent: req.headers.get("user-agent") ?? null,
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: any) {
    // zod validation error
    if (err?.name === "ZodError") {
      return NextResponse.json(
        { ok: false, error: "Invalid input", details: err.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
