import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — H&M Synergy",
  description:
    "How H&M Synergy Sp. z o.o. processes personal data submitted via this website.",
};

export default function PrivacyEN() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <section className="space-y-6 text-gray-800">
        <p>
          This Privacy Policy explains how we process personal data submitted via this website, in particular through
          the contact form. We comply with the General Data Protection Regulation (EU) 2016/679 (“GDPR”).
        </p>

        <h2 className="text-xl font-semibold">1) Controller</h2>
        <p>
          <strong>H&amp;M Synergy Sp. z o.o.</strong>
          <br />
          ul. Wiejska 2/7, 58-260 Bielawa, Poland
          <br />
          NIP: 8822152332 · REGON: 542508629 · KRS: 0001189932
          <br />
          Email:{" "}
          <a className="text-blue-600 underline" href="mailto:h.m.synergypl@gmail.com">
            h.m.synergypl@gmail.com
          </a>
          <br />
          Phone: +48 739 686 095 / +48 573 415 010
        </p>

        <h2 className="text-xl font-semibold">2) What data we collect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Identity and contact: name, email address.</li>
          <li>Optional: phone number, company.</li>
          <li>Message content you provide.</li>
          <li>Consent checkbox information.</li>
          <li>Technical logs from our hosting platform (for security/diagnostics).</li>
        </ul>

        <h2 className="text-xl font-semibold">3) Why we process your data (legal bases)</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            To respond to your inquiry and maintain related correspondence — <em>legitimate interests</em> (GDPR
            6(1)(f)).
          </li>
          <li>
            If you tick the consent box, to contact you about this inquiry — <em>consent</em> (GDPR 6(1)(a)).
          </li>
          <li>
            To comply with legal obligations (e.g., proving consent) — <em>legal obligation</em> (GDPR 6(1)(c)), where
            applicable.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">4) Who receives your data</h2>
        <p>We use service providers acting as processors, notably:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email infrastructure (Gmail/Google LLC) for receiving and sending messages.</li>
          <li>Hosting/infrastructure providers for this website (may store security logs).</li>
        </ul>
        <p>
          These providers may be located outside the EEA. Where applicable, transfers rely on appropriate safeguards
          (e.g., standard contractual clauses).
        </p>

        <h2 className="text-xl font-semibold">5) Retention</h2>
        <p>
          We keep inquiry-related data for up to <strong>12 months</strong> after the last communication, unless a
          longer period is required by law or necessary to establish/defend legal claims.
        </p>

        <h2 className="text-xl font-semibold">6) Your rights</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access, rectification, deletion.</li>
          <li>Restriction or objection to processing.</li>
          <li>Data portability (for data you provided by consent/contract, processed by automated means).</li>
          <li>Withdraw consent at any time (doesn’t affect prior processing).</li>
          <li>
            Complaint in Poland: <strong>President of the Personal Data Protection Office (UODO)</strong>, ul. Stawki 2,
            00-193 Warszawa.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">7) Cookies & tracking</h2>
        <p>
          We do not use analytics or marketing cookies. Only strictly necessary cookies (if any) for security/basic
          operation may be used.
        </p>

        <h2 className="text-xl font-semibold">8) Security</h2>
        <p>
          We apply technical and organisational measures appropriate to the risk, including transport encryption (HTTPS)
          and access controls.
        </p>

        <h2 className="text-xl font-semibold">9) Changes</h2>
        <p>We may update this Policy from time to time. The latest version is always available on this page.</p>

        <div className="pt-6">
          <Link href="/en/contact" className="text-blue-600 underline">
            Back to contact
          </Link>
        </div>
      </section>
    </main>
  );
}
