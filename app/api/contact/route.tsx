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
  message: z.string().min(3).max(5000),
  consent: z.boolean(),
  website: z.string().optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json().catch(() => null);
    const parsed = ContactSchema.safeParse(json);

    if (!parsed.success) {
      const issues = parsed.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          error: "Invalid payload",
          issues,
        },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Honeypot
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    // ---------------------------------------------------------
    // ENVIRONMENT
    // ---------------------------------------------------------

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO = SMTP_USER,
      CONTACT_FROM = SMTP_USER,
      NODE_ENV,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      if (NODE_ENV !== "production") {
        console.warn("[contact] Missing SMTP environment variables.");
        console.warn("[contact] Payload:", data);

        return NextResponse.json({
          ok: true,
          dev: true,
        });
      }

      return NextResponse.json(
        {
          error: "Server email not configured.",
        },
        { status: 500 },
      );
    }

    // ---------------------------------------------------------
    // SMTP
    // ---------------------------------------------------------

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // ---------------------------------------------------------
    // COMPANY EMAIL
    // ---------------------------------------------------------

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
      <div style="font-family:Arial,sans-serif;line-height:1.6;">
        <h2>${escapeHtml(subject)}</h2>

        <p>
          <strong>Name:</strong><br />
          ${escapeHtml(data.name)}
        </p>

        <p>
          <strong>Email:</strong><br />
          ${escapeHtml(data.email)}
        </p>

        <p>
          <strong>Phone:</strong><br />
          ${escapeHtml(data.phone || "-")}
        </p>

        <p>
          <strong>Company:</strong><br />
          ${escapeHtml(data.company || "-")}
        </p>

        <p>
          <strong>Language:</strong><br />
          ${escapeHtml(data.locale)}
        </p>

        <hr />

        <p>
          <strong>Message:</strong>
        </p>

        <pre style="white-space:pre-wrap;font-family:Arial,sans-serif;">${escapeHtml(
          data.message,
        )}</pre>
      </div>
    `;

    // ---------------------------------------------------------
    // 1. SEND TO H&M SYNERGY
    // ---------------------------------------------------------

    try {
      await transporter.sendMail({
        to: CONTACT_TO,
        from: CONTACT_FROM,
        replyTo: data.email,
        subject,
        text: adminText,
        html: adminHtml,
      });

      console.log("[contact] Company notification sent successfully.");
    } catch (error) {
      console.error("[contact] Company notification email failed:", error);

      // This is a real failure because we could not notify the company.
      return NextResponse.json(
        {
          error: "Unable to send your message.",
        },
        { status: 500 },
      );
    }

    // ---------------------------------------------------------
    // 2. SEND AUTO-REPLY TO CUSTOMER
    // ---------------------------------------------------------

    try {
      const autoSubject =
        data.locale === "pl"
          ? "Dziękujemy za wiadomość — H&M Synergy"
          : "Thank you for contacting H&M Synergy";

      const autoText =
        data.locale === "pl"
          ? [
              "Dziękujemy za kontakt z H&M Synergy.",
              "",
              "Otrzymaliśmy Twoją wiadomość i skontaktujemy się z Tobą w ciągu 24 godzin roboczych.",
              "",
              "Twoja wiadomość:",
              data.message,
              "",
              "H&M Synergy Sp. z o.o.",
            ].join("\n")
          : [
              "Thank you for contacting H&M Synergy.",
              "",
              "We have received your message and our team will get back to you within 24 business hours.",
              "",
              "Your message:",
              data.message,
              "",
              "H&M Synergy Sp. z o.o.",
            ].join("\n");

      await transporter.sendMail({
        to: data.email,
        from: CONTACT_FROM,
        replyTo: CONTACT_TO,
        subject: autoSubject,
        text: autoText,
      });

      console.log("[contact] Auto-reply sent successfully.");
    } catch (error) {
      // IMPORTANT:
      // Auto-reply failure should NOT make the form submission fail.
      console.error("[contact] Auto-reply failed:", error);
    }

    // ---------------------------------------------------------
    // SUCCESS
    // ---------------------------------------------------------

    return NextResponse.json(
      {
        ok: true,
        message: "Message sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[contact] Unexpected error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while processing your message.",
      },
      { status: 500 },
    );
  }
}

// ---------------------------------------------------------
// HTML ESCAPE
// ---------------------------------------------------------

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
