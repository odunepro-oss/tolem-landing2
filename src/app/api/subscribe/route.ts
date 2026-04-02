import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!url) {
      return NextResponse.json({ error: "Non configuré" }, { status: 500 });
    }

    const res = await fetch(`${url}?email=${encodeURIComponent(email.trim())}`);
    if (!res.ok) {
      return NextResponse.json({ error: "Erreur Google Sheet" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
