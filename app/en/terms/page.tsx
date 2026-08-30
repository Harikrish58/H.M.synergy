import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | H&M Synergy",
  description:
    "Terms governing the use of the H&M Synergy website and its content.",
};

const sectionTitle =
  "mt-10 text-xl font-bold tracking-[-0.02em] text-[#0E2942] sm:text-2xl";

const paragraph =
  "text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

const list =
  "list-disc space-y-2 pl-6 text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

export default function TermsEN() {
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
              Terms of Use
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              These Terms of Use govern your access to and use of the H&amp;M
              Synergy website.
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
          By accessing or using this website, you agree to these Terms of Use.
          If you do not agree with these terms, please do not use the website.
        </p>

        {/* 1 */}
        <h2 className={sectionTitle}>1. Website operator</h2>

        <p className={paragraph}>
          This website is operated by:
        </p>

        <div className="mt-5 border-t border-[#DCE4EB] pt-5">
          <p className="font-semibold text-[#0E2942]">
            H&amp;M Synergy Sp. z o.o.
          </p>

          <p className="mt-2 text-sm leading-6 text-[#5B6878]">
            ul. Wiejska 2/7
            <br />
            58-260 Bielawa
            <br />
            Poland
            <br />
            NIP: 8822152332
            <br />
            REGON: 542508629
            <br />
            KRS: 0001189932
          </p>

          <p className="mt-3 text-sm leading-6 text-[#5B6878]">
            Email:{" "}
            <a
              href="mailto:h.m.synergypl@gmail.com"
              className="font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
            >
              h.m.synergypl@gmail.com
            </a>
          </p>
        </div>

        {/* 2 */}
        <h2 className={sectionTitle}>2. Use of the website</h2>

        <p className={paragraph}>
          You may use this website for lawful purposes and in accordance with
          these Terms of Use.
        </p>

        <p className={paragraph}>
          You must not use the website in a way that:
        </p>

        <ul className={list}>
          <li>violates applicable law or regulations;</li>
          <li>
            infringes the rights, privacy or intellectual property of another
            person;
          </li>
          <li>
            attempts to gain unauthorised access to the website or its systems;
          </li>
          <li>
            introduces malicious code, harmful software or other disruptive
            material;
          </li>
          <li>
            interferes with the security, availability or normal operation of
            the website; or
          </li>
          <li>
            uses information obtained from the website for unlawful or
            fraudulent purposes.
          </li>
        </ul>

        {/* 3 */}
        <h2 className={sectionTitle}>3. Website content</h2>

        <p className={paragraph}>
          We make reasonable efforts to keep the information on this website
          accurate and up to date. However, website content may change and we
          do not guarantee that all information will always be complete,
          accurate or current.
        </p>

        <p className={paragraph}>
          Information about vacancies, services and business activities is
          provided for general information purposes. A vacancy or description
          published on the website does not by itself constitute an employment
          contract, job offer, commercial contract or other legally binding
          agreement.
        </p>

        {/* 4 */}
        <h2 className={sectionTitle}>4. Job vacancies</h2>

        <p className={paragraph}>
          Job vacancies published on the website may be changed, updated,
          suspended or removed without prior notice.
        </p>

        <p className={paragraph}>
          Availability of a position does not guarantee employment. Recruitment
          decisions depend on the requirements of the relevant position,
          candidate qualifications, applicable law and the recruitment process.
        </p>

        <p className={paragraph}>
          Any employment relationship will be governed by the applicable
          employment documentation and agreements concluded with the relevant
          parties.
        </p>

        {/* 5 */}
        <h2 className={sectionTitle}>5. Contact forms and submitted information</h2>

        <p className={paragraph}>
          If you submit information through a contact form, you are responsible
          for providing information that is accurate and that you are entitled
          to provide.
        </p>

        <p className={paragraph}>
          Please do not submit confidential information, passwords, payment
          card details or other information that is not necessary for your
          enquiry.
        </p>

        <p className={paragraph}>
          Personal data submitted through the website is processed in
          accordance with our{" "}
          <Link
            href="/en/privacy"
            className="font-semibold text-[#123B63] hover:text-[#159A86]"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* 6 */}
        <h2 className={sectionTitle}>6. Intellectual property</h2>

        <p className={paragraph}>
          Unless otherwise stated, the content of this website, including
          text, graphics, logos, visual elements, design and other materials,
          is owned by or used lawfully by H&amp;M Synergy Sp. z o.o. and may be
          protected by applicable intellectual property laws.
        </p>

        <p className={paragraph}>
          You may access and use the website for personal or legitimate
          business purposes. You must not reproduce, distribute, modify,
          publish or commercially exploit website content without appropriate
          permission, unless permitted by applicable law.
        </p>

        {/* 7 */}
        <h2 className={sectionTitle}>7. Third-party websites and services</h2>

        <p className={paragraph}>
          The website may contain links to websites or services operated by
          third parties.
        </p>

        <p className={paragraph}>
          Third-party websites are outside our control. We are not responsible
          for their content, availability, security, privacy practices or terms.
          Your use of a third-party website is subject to that provider&apos;s
          own terms and policies.
        </p>

        {/* 8 */}
        <h2 className={sectionTitle}>8. Website availability</h2>

        <p className={paragraph}>
          We aim to keep the website available and functioning properly.
          However, we do not guarantee uninterrupted or error-free availability
          of the website.
        </p>

        <p className={paragraph}>
          The website may occasionally be unavailable because of maintenance,
          technical problems, security incidents, infrastructure failures or
          circumstances outside our reasonable control.
        </p>

        {/* 9 */}
        <h2 className={sectionTitle}>9. Disclaimer and limitation</h2>

        <p className={paragraph}>
          To the extent permitted by applicable law, the website and its
          content are provided without guarantees that the information will
          always be complete, accurate, available or suitable for a particular
          purpose.
        </p>

        <p className={paragraph}>
          Nothing in these Terms of Use excludes or limits liability where such
          exclusion or limitation is not permitted by applicable law.
        </p>

        {/* 10 */}
        <h2 className={sectionTitle}>10. Changes to the website and these terms</h2>

        <p className={paragraph}>
          We may change, update or discontinue parts of the website at any
          time.
        </p>

        <p className={paragraph}>
          We may also update these Terms of Use when necessary, including when
          the website, our services or applicable legal requirements change.
        </p>

        <p className={paragraph}>
          The latest version will be published on this page together with its
          update date.
        </p>

        {/* 11 */}
        <h2 className={sectionTitle}>11. Applicable law</h2>

        <p className={paragraph}>
          These Terms of Use are governed by the laws of the Republic of Poland,
          subject to mandatory provisions of applicable law.
        </p>

        <p className={paragraph}>
          Any disputes relating to the use of this website shall be handled by
          the competent courts in accordance with applicable Polish law,
          including any mandatory rules concerning jurisdiction and consumer
          rights where applicable.
        </p>

        {/* 12 */}
        <h2 className={sectionTitle}>12. Contact</h2>

        <p className={paragraph}>
          If you have questions regarding these Terms of Use, please contact:
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
            href="/en/cookies"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Cookie Policy
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