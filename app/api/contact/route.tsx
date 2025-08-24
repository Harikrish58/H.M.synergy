// app/api/contact/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  locale: z.enum(["pl", "en"]).default("en"),
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(60).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(3).max(5000), // allow quick tests
  consent: z.boolean(),
  website: z.string().optional().or(z.literal("")), // honeypot
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json().catch(() => null);
    const parsed = ContactSchema.safeParse(json);

    if (!parsed.success) {
      const issues = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Invalid payload", issues },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot: quietly succeed if filled
    if (data.website) return NextResponse.json({ ok: true });

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO = SMTP_USER,
      CONTACT_FROM = SMTP_USER, // for Gmail this usually must equal SMTP_USER
      NODE_ENV,
    } = process.env;

    // Dev convenience: log instead of failing if SMTP not set
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      if (NODE_ENV !== "production") {
        console.warn("[contact] Missing SMTP env; payload:", data);
        return NextResponse.json({ ok: true, dev: true });
      }
      return NextResponse.json(
        { error: "Server email not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject =
      data.locale === "pl"
        ? `Nowe zapytanie ze strony — ${data.name}`
        : `New website inquiry — ${data.name}`;

    const adminText = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Company: ${data.company || "-"}`,
      `Locale: ${data.locale}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    const adminHtml = `
      <h2>${escapeHtml(subject)}</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone || "-")}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company || "-")}</p>
      <p><strong>Locale:</strong> ${escapeHtml(data.locale)}</p>
      <hr />
      <pre style="white-space:pre-wrap;margin:0">${escapeHtml(
        data.message
      )}</pre>
    `;

    // 1) Send to you
    await transporter.sendMail({
      to: CONTACT_TO,
      from: CONTACT_FROM,
      replyTo: data.email,
      subject,
      text: adminText,
      html: adminHtml,
    });

    // 2) Auto-reply to the sender (optional but nice)
    const autoSubject =
      data.locale === "pl"
        ? "Dziękujemy za wiadomość — odpiszemy w 24h"
        : "Thanks for your message — we’ll reply within 24h";

    const autoText =
      (data.locale === "pl"
        ? "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin roboczych.\n\nTwoja wiadomość:\n"
        : "Thanks for reaching out. We’ll reply within 24 business hours.\n\nYour message:\n") +
      data.message;

    await transporter.sendMail({
      to: data.email,
      from: CONTACT_FROM, // must be your mailbox
      replyTo: CONTACT_TO, // replies come back to you
      subject: autoSubject,
      text: autoText,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : typeof err === "string"
        ? err
        : "Mail send failed";
    console.error("[contact] sendMail failed:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
