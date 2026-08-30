import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | H&M Synergy",
  description:
    "Privacy Policy of H&M Synergy Sp. z o.o. explaining how personal data is processed through the H&M Synergy website.",
};

const sectionTitle =
  "mt-10 text-xl font-bold tracking-[-0.02em] text-[#0E2942] sm:text-2xl";

const paragraph =
  "text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

const list =
  "list-disc space-y-2 pl-6 text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

export default function PrivacyEN() {
  return (
    <main className="bg-white text-[#182230]">
      {/* =========================================================
          HEADER
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
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              This Privacy Policy explains how H&amp;M Synergy Sp. z o.o.
              processes personal data in connection with this website and
              enquiries submitted through it.
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
        <div className="space-y-6">
          {/* INTRODUCTION */}
          <p className={paragraph}>
            H&amp;M Synergy Sp. z o.o. respects the privacy of individuals
            whose personal data it processes. We process personal data in
            accordance with applicable data protection law, including
            Regulation (EU) 2016/679 of the European Parliament and of the
            Council of 27 April 2016 (the General Data Protection Regulation,
            or “GDPR”), and applicable Polish law.
          </p>

          <p className={paragraph}>
            This Privacy Policy applies primarily to personal data collected
            through the H&amp;M Synergy website, including information
            submitted through our contact form and information necessary to
            maintain the security and operation of the website.
          </p>

          {/* 1 */}
          <h2 className={sectionTitle}>1. Data controller</h2>

          <p className={paragraph}>
            The controller of personal data processed in connection with this
            website is:
          </p>

          <div className="border-y border-[#DCE4EB] bg-[#F7F9FB] px-5 py-6 sm:px-7">
            <p className="font-semibold text-[#0E2942]">
              H&amp;M Synergy Sp. z o.o.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#5B6878]">
              ul. Wiejska 2/7
              <br />
              58-260 Bielawa
              <br />
              Poland
            </p>

            <p className="mt-4 text-sm leading-6 text-[#5B6878]">
              NIP: 8822152332
              <br />
              REGON: 542508629
              <br />
              KRS: 0001189932
            </p>

            <p className="mt-4 text-sm leading-6 text-[#5B6878]">
              Email:{" "}
              <a
                href="mailto:h.m.synergypl@gmail.com"
                className="font-medium text-[#123B63] hover:text-[#159A86]"
              >
                h.m.synergypl@gmail.com
              </a>
            </p>

            <p className="mt-2 text-sm leading-6 text-[#5B6878]">
              Phone: +48 739 686 095 / +48 573 415 010
            </p>
          </div>

          {/* 2 */}
          <h2 className={sectionTitle}>
            2. Personal data we may process
          </h2>

          <p className={paragraph}>
            Depending on how you interact with the website, we may process
            information such as:
          </p>

          <ul className={list}>
            <li>your name and surname;</li>
            <li>your email address;</li>
            <li>your telephone number, if you provide it;</li>
            <li>your company or organisation, if you provide it;</li>
            <li>the subject and content of your enquiry;</li>
            <li>
              information concerning your consent where consent is requested;
            </li>
            <li>
              technical information necessary for the secure operation of the
              website, such as server or security logs, where collected by our
              hosting or infrastructure providers.
            </li>
          </ul>

          <p className={paragraph}>
            We ask you not to provide sensitive personal information or other
            information that is not necessary to deal with your enquiry through
            the general contact form.
          </p>

          {/* 3 */}
          <h2 className={sectionTitle}>
            3. Purposes and legal bases for processing
          </h2>

          <p className={paragraph}>
            We process personal data only for specific and legitimate purposes.
            Depending on the circumstances, the applicable legal basis may
            include:
          </p>

          <div className="space-y-5">
            <div className="border-l-2 border-[#159A86] pl-5">
              <h3 className="font-semibold text-[#0E2942]">
                Responding to enquiries
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5B6878]">
                We may process contact details and enquiry information in order
                to respond to a request submitted through the website and to
                communicate with the person who contacted us. Depending on the
                circumstances, the legal basis may be our legitimate interest
                in handling and responding to business or general enquiries
                (Article 6(1)(f) GDPR) or taking steps at the request of the
                data subject prior to entering into a contract (Article
                6(1)(b) GDPR).
              </p>
            </div>

            <div className="border-l-2 border-[#159A86] pl-5">
              <h3 className="font-semibold text-[#0E2942]">
                Consent where required
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5B6878]">
                Where processing is based on consent, we process the relevant
                personal data on the basis of Article 6(1)(a) GDPR. Consent may
                be withdrawn at any time. Withdrawal does not affect the
                lawfulness of processing carried out before withdrawal.
              </p>
            </div>

            <div className="border-l-2 border-[#159A86] pl-5">
              <h3 className="font-semibold text-[#0E2942]">
                Legal obligations
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5B6878]">
                Where necessary, personal data may be processed to comply with
                legal obligations applicable to H&amp;M Synergy Sp. z o.o.,
                under Article 6(1)(c) GDPR.
              </p>
            </div>

            <div className="border-l-2 border-[#159A86] pl-5">
              <h3 className="font-semibold text-[#0E2942]">
                Security and protection of rights
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5B6878]">
                We may process technical information and relevant records where
                necessary to maintain the security of the website, prevent
                abuse, establish facts, or exercise and defend legal claims.
                Where applicable, the legal basis is our legitimate interest
                under Article 6(1)(f) GDPR or another legal basis required by
                applicable law.
              </p>
            </div>
          </div>

          {/* 4 */}
          <h2 className={sectionTitle}>
            4. Recruitment and employment enquiries
          </h2>

          <p className={paragraph}>
            The website may be used by people interested in employment
            opportunities and by companies interested in workforce solutions.
          </p>

          <p className={paragraph}>
            Information submitted through the general contact form may be used
            to respond to such enquiries. If a person subsequently participates
            in a recruitment or employment process, additional personal data
            may be processed under separate information requirements applicable
            to that process.
          </p>

          <p className={paragraph}>
            This website Privacy Policy should therefore not be understood as a
            complete privacy notice for every recruitment, employment,
            personnel, payroll or workforce-management processing activity
            carried out by H&amp;M Synergy Sp. z o.o.
          </p>

          {/* 5 */}
          <h2 className={sectionTitle}>
            5. Recipients of personal data
          </h2>

          <p className={paragraph}>
            Personal data may be made available to recipients who need the
            information to provide services to H&amp;M Synergy Sp. z o.o. or
            to operate and secure the website.
          </p>

          <p className={paragraph}>
            Depending on the technical setup of the website, these may include:
          </p>

          <ul className={list}>
            <li>website hosting and infrastructure providers;</li>
            <li>
              email and communication service providers used to handle
              enquiries;
            </li>
            <li>
              technical, security, maintenance or IT service providers;
            </li>
            <li>
              public authorities or other recipients where disclosure is
              required by law.
            </li>
          </ul>

          <p className={paragraph}>
            Where a service provider processes personal data on our behalf, we
            take appropriate steps to ensure that the processing is governed by
            applicable data protection requirements.
          </p>

          {/* 6 */}
          <h2 className={sectionTitle}>
            6. International transfers
          </h2>

          <p className={paragraph}>
            Some technology or service providers may process personal data
            outside the European Economic Area. Where such a transfer takes
            place and GDPR requires a transfer mechanism, we will use an
            appropriate legal mechanism, such as an adequacy decision or
            appropriate safeguards under Chapter V GDPR.
          </p>

          <p className={paragraph}>
            The actual providers used by the website may change as our
            technical infrastructure changes. We do not represent that every
            provider listed or described in this section is located outside the
            EEA.
          </p>

          {/* 7 */}
          <h2 className={sectionTitle}>
            7. How long we keep personal data
          </h2>

          <p className={paragraph}>
            We retain personal data only for as long as necessary for the
            purpose for which it was collected, taking into account applicable
            legal obligations and the need to establish, exercise or defend
            legal claims.
          </p>

          <p className={paragraph}>
            For ordinary website enquiries, the retention period is determined
            according to the nature of the enquiry and the subsequent
            relationship with the person who contacted us. Where a specific
            statutory retention period applies, the relevant legal requirement
            takes precedence.
          </p>

          <p className={paragraph}>
            We may retain limited information for longer where necessary to
            demonstrate compliance with legal obligations, resolve disputes or
            protect our legitimate interests.
          </p>

          {/* 8 */}
          <h2 className={sectionTitle}>
            8. Your rights under the GDPR
          </h2>

          <p className={paragraph}>
            Subject to the conditions and limitations provided by applicable
            law, you may have the right to:
          </p>

          <ul className={list}>
            <li>
              obtain confirmation as to whether we process your personal data;
            </li>
            <li>access your personal data and obtain a copy of it;</li>
            <li>request correction of inaccurate or incomplete data;</li>
            <li>
              request erasure of personal data where the applicable conditions
              are met;
            </li>
            <li>
              request restriction of processing in circumstances provided by
              the GDPR;
            </li>
            <li>
              object to processing based on legitimate interests, subject to
              the requirements of the GDPR;
            </li>
            <li>
              receive personal data in a structured, commonly used and
              machine-readable format where the right to data portability
              applies;
            </li>
            <li>
              withdraw consent at any time where processing is based on
              consent.
            </li>
          </ul>

          <p className={paragraph}>
            To exercise your rights, contact us using the contact details
            provided in this Privacy Policy.
          </p>

          {/* 9 */}
          <h2 className={sectionTitle}>
            9. Right to lodge a complaint
          </h2>

          <p className={paragraph}>
            You have the right to lodge a complaint with a supervisory
            authority if you believe that the processing of your personal data
            infringes applicable data protection law.
          </p>

          <p className={paragraph}>
            In Poland, the supervisory authority is the President of the
            Personal Data Protection Office (Prezes Urzędu Ochrony Danych
            Osobowych, UODO).
          </p>

          <div className="border-y border-[#DCE4EB] bg-[#F7F9FB] px-5 py-5 sm:px-7">
            <p className="text-sm leading-6 text-[#5B6878]">
              Urząd Ochrony Danych Osobowych
              <br />
              ul. Stawki 2
              <br />
              00-193 Warszawa
              <br />
              Poland
            </p>
          </div>

          {/* 10 */}
          <h2 className={sectionTitle}>
            10. Cookies and similar technologies
          </h2>

          <p className={paragraph}>
            Our website may use cookies or similar technologies that are
            necessary for the operation, security and proper functioning of
            the website.
          </p>

          <p className={paragraph}>
            We do not state that the website uses analytics, advertising or
            other optional tracking technologies unless such technologies are
            actually implemented.
          </p>

          <p className={paragraph}>
            Information about cookies and similar technologies, including their
            purposes and the choices available to users, is provided in our
            separate Cookie Policy.
          </p>

          <Link
            href="/en/cookies"
            className="inline-flex items-center text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
          >
            Read our Cookie Policy →
          </Link>

          {/* 11 */}
          <h2 className={sectionTitle}>
            11. Data security
          </h2>

          <p className={paragraph}>
            We take appropriate technical and organisational measures designed
            to protect personal data against unauthorised access, accidental
            loss, destruction, alteration or other unlawful processing.
          </p>

          <p className={paragraph}>
            The measures used may include encrypted communication, access
            controls, secure hosting practices and other safeguards appropriate
            to the risks associated with the processing.
          </p>

          {/* 12 */}
          <h2 className={sectionTitle}>
            12. Automated decision-making and profiling
          </h2>

          <p className={paragraph}>
            We do not use this website to make decisions producing legal or
            similarly significant effects on individuals solely through
            automated decision-making.
          </p>

          <p className={paragraph}>
            If this changes for a particular processing activity, appropriate
            information will be provided in accordance with applicable law.
          </p>

          {/* 13 */}
          <h2 className={sectionTitle}>
            13. Changes to this Privacy Policy
          </h2>

          <p className={paragraph}>
            We may update this Privacy Policy when necessary, including when
            our website, services, technology or legal obligations change.
          </p>

          <p className={paragraph}>
            The current version of the Privacy Policy will be published on this
            page together with its latest update date.
          </p>

          {/* 14 */}
          <h2 className={sectionTitle}>
            14. Contact
          </h2>

          <p className={paragraph}>
            If you have questions concerning this Privacy Policy or the
            processing of your personal data, please contact:
          </p>

          <div className="border-t border-[#DCE4EB] pt-6">
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
              className="mt-3 inline-block text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
            >
              h.m.synergypl@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#DCE4EB] pt-7">
            <Link
              href="/en/cookies"
              className="text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
            >
              Cookie Policy
            </Link>

            <Link
              href="/en/terms"
              className="text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
            >
              Terms of Use
            </Link>

            <Link
              href="/en/contact"
              className="text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}