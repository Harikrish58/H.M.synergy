import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | H&M Synergy",
  description:
    "Information about cookies and similar technologies used on the H&M Synergy website.",
};

const sectionTitle =
  "mt-10 text-xl font-bold tracking-[-0.02em] text-[#0E2942] sm:text-2xl";

const paragraph =
  "text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

const list =
  "list-disc space-y-2 pl-6 text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

export default function CookiesEN() {
  return (
    <main className="bg-white text-[#182230]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-[#DCE4EB] bg-[#F5F8FA]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#159A86]" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                Legal information
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]">
              Cookie Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              This Cookie Policy explains how H&amp;M Synergy Sp. z o.o.
              uses cookies and similar technologies on this website.
            </p>

            <p className="mt-6 text-sm text-[#8A96A3]">
              Last updated: 29 August 2026
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <section className="mx-auto max-w-[1000px] px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        <p className={paragraph}>
          H&amp;M Synergy Sp. z o.o. respects your privacy. This Cookie Policy
          explains our current approach to cookies and similar technologies
          used when you visit our website.
        </p>

        {/* 1 */}
        <h2 className={sectionTitle}>1. What are cookies?</h2>

        <p className={paragraph}>
          Cookies are small files that may be stored on your device when you
          visit a website. They can be used to enable website functionality,
          remember preferences, maintain security or collect information about
          how a website is used.
        </p>

        {/* 2 */}
        <h2 className={sectionTitle}>2. Cookies currently used on this website</h2>

        <p className={paragraph}>
          At present, H&amp;M Synergy does not intentionally use analytics,
          advertising, marketing or behavioural-tracking cookies on this
          website.
        </p>

        <p className={paragraph}>
          We also do not currently use services such as Google Analytics,
          Google Tag Manager, Meta Pixel or other advertising and analytics
          technologies that would require optional tracking cookies.
        </p>

        <p className={paragraph}>
          The website may use technically necessary technologies required for
          the secure and proper operation of the website or its infrastructure.
        </p>

        {/* 3 */}
        <h2 className={sectionTitle}>3. Necessary technologies</h2>

        <p className={paragraph}>
          Certain technical information may be processed automatically when
          you access a website. This can include information contained in
          server, hosting or security logs.
        </p>

        <p className={paragraph}>
          Such information may be necessary for purposes including:
        </p>

        <ul className={list}>
          <li>website security;</li>
          <li>preventing abuse or malicious activity;</li>
          <li>maintaining website availability;</li>
          <li>diagnosing technical problems; and</li>
          <li>maintaining the proper operation of the website.</li>
        </ul>

        {/* 4 */}
        <h2 className={sectionTitle}>4. Analytics and marketing</h2>

        <p className={paragraph}>
          We currently do not use cookies or similar technologies for:
        </p>

        <ul className={list}>
          <li>advertising;</li>
          <li>marketing;</li>
          <li>behavioural profiling;</li>
          <li>cross-site tracking; or</li>
          <li>website analytics.</li>
        </ul>

        <p className={paragraph}>
          If this changes in the future, we will review the applicable legal
          requirements and update this Cookie Policy accordingly.
        </p>

        {/* 5 */}
        <h2 className={sectionTitle}>5. Third-party services</h2>

        <p className={paragraph}>
          Our website may use technical infrastructure or services provided by
          third parties to host, secure or operate the website.
        </p>

        <p className={paragraph}>
          These providers may process technical information as necessary to
          provide their services. We do not use third-party advertising or
          analytics technologies on the website at present.
        </p>

        {/* 6 */}
        <h2 className={sectionTitle}>6. Managing cookies</h2>

        <p className={paragraph}>
          You can control cookies through the settings of your web browser.
          Most browsers allow you to view, delete or block cookies.
        </p>

        <p className={paragraph}>
          Because some technical technologies may be necessary for a website
          to function correctly, blocking all cookies or browser storage may
          affect certain website functionality.
        </p>

        {/* 7 */}
        <h2 className={sectionTitle}>7. Changes to this Cookie Policy</h2>

        <p className={paragraph}>
          We may update this Cookie Policy if the technologies used by the
          website change or if applicable legal requirements change.
        </p>

        <p className={paragraph}>
          The current version of this Cookie Policy will always be available
          on this page.
        </p>

        {/* 8 */}
        <h2 className={sectionTitle}>8. Contact</h2>

        <p className={paragraph}>
          If you have any questions about cookies or similar technologies used
          on our website, you can contact us at:
        </p>

        <div className="mt-6 border-t border-[#DCE4EB] pt-6">
          <p className="font-semibold text-[#0E2942]">
            H&amp;M Synergy Sp. z o.o.
          </p>

          <p className="mt-2 text-sm leading-6 text-[#5B6878]">
            ul. Wiejska 2/7
            <br />
            58-260 Bielawa
            <br />
            Poland
          </p>

          <a
            href="mailto:h.m.synergypl@gmail.com"
            className="mt-3 inline-block text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            h.m.synergypl@gmail.com
          </a>
        </div>

        {/* =========================================================
            LEGAL NAVIGATION
        ========================================================= */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#DCE4EB] pt-7">
          <Link
            href="/en/privacy"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/en/terms"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Terms of Use
          </Link>

          <Link
            href="/en/contact"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}