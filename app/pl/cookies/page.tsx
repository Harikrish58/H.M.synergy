import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka plików cookies | H&M Synergy",
  description:
    "Informacje dotyczące plików cookies i podobnych technologii wykorzystywanych na stronie internetowej H&M Synergy.",

  alternates: {
    canonical: "/pl/cookies",
    languages: {
      en: "/en/cookies",
      pl: "/pl/cookies",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/cookies",
    siteName: "H&M Synergy",
    title: "Polityka plików cookies | H&M Synergy",
    description:
      "Informacje dotyczące plików cookies i podobnych technologii wykorzystywanych na stronie internetowej H&M Synergy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Polityka plików cookies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Polityka plików cookies | H&M Synergy",
    description:
      "Informacje dotyczące plików cookies i podobnych technologii wykorzystywanych na stronie H&M Synergy.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const sectionTitle =
  "mt-10 text-xl font-bold tracking-[-0.02em] text-[#0E2942] sm:text-2xl";

const paragraph =
  "text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

const list =
  "list-disc space-y-2 pl-6 text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

export default function CookiesPL() {
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
                Informacje prawne
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]">
              Polityka plików cookies
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Niniejsza Polityka plików cookies wyjaśnia, w jaki sposób
              H&amp;M Synergy Sp. z o.o. wykorzystuje pliki cookies i podobne
              technologie na tej stronie internetowej.
            </p>

            <p className="mt-6 text-sm text-[#8A96A3]">
              Ostatnia aktualizacja: 29 sierpnia 2026 r.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <section className="mx-auto max-w-[1000px] px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        <p className={paragraph}>
          H&amp;M Synergy Sp. z o.o. szanuje Państwa prywatność. Niniejsza
          Polityka plików cookies wyjaśnia nasze obecne podejście do plików
          cookies i podobnych technologii wykorzystywanych podczas korzystania
          z naszej strony internetowej.
        </p>

        {/* 1 */}
        <h2 className={sectionTitle}>1. Czym są pliki cookies?</h2>

        <p className={paragraph}>
          Pliki cookies to niewielkie pliki, które mogą być zapisywane na
          urządzeniu użytkownika podczas odwiedzania strony internetowej. Mogą
          być wykorzystywane do zapewnienia prawidłowego działania strony,
          zapamiętywania ustawień, utrzymania bezpieczeństwa lub gromadzenia
          informacji o sposobie korzystania ze strony.
        </p>

        {/* 2 */}
        <h2 className={sectionTitle}>
          2. Pliki cookies obecnie wykorzystywane na tej stronie
        </h2>

        <p className={paragraph}>
          Obecnie H&amp;M Synergy nie wykorzystuje celowo plików cookies do
          celów analitycznych, reklamowych, marketingowych ani do śledzenia
          zachowania użytkowników na tej stronie internetowej.
        </p>

        <p className={paragraph}>
          Obecnie nie korzystamy również z usług takich jak Google Analytics,
          Google Tag Manager, Meta Pixel ani innych technologii reklamowych
          i analitycznych, które wymagałyby stosowania opcjonalnych plików
          cookies służących do śledzenia użytkowników.
        </p>

        <p className={paragraph}>
          Strona internetowa może wykorzystywać technologie technicznie
          niezbędne do zapewnienia jej bezpiecznego i prawidłowego działania
          oraz działania infrastruktury, na której jest utrzymywana.
        </p>

        {/* 3 */}
        <h2 className={sectionTitle}>
          3. Technologie niezbędne do działania strony
        </h2>

        <p className={paragraph}>
          Niektóre informacje techniczne mogą być przetwarzane automatycznie
          podczas uzyskiwania dostępu do strony internetowej. Mogą one
          obejmować informacje zawarte w logach serwera, hostingu lub systemów
          bezpieczeństwa.
        </p>

        <p className={paragraph}>
          Informacje te mogą być niezbędne między innymi do:
        </p>

        <ul className={list}>
          <li>zapewnienia bezpieczeństwa strony internetowej;</li>
          <li>zapobiegania nadużyciom lub złośliwym działaniom;</li>
          <li>utrzymania dostępności strony;</li>
          <li>diagnozowania problemów technicznych; oraz</li>
          <li>zapewnienia prawidłowego działania strony internetowej.</li>
        </ul>

        {/* 4 */}
        <h2 className={sectionTitle}>
          4. Analityka i marketing
        </h2>

        <p className={paragraph}>
          Obecnie nie wykorzystujemy plików cookies ani podobnych technologii
          do:
        </p>

        <ul className={list}>
          <li>reklam;</li>
          <li>marketingu;</li>
          <li>profilowania zachowania użytkowników;</li>
          <li>śledzenia użytkowników pomiędzy stronami internetowymi; ani</li>
          <li>analizy korzystania ze strony internetowej.</li>
        </ul>

        <p className={paragraph}>
          Jeżeli w przyszłości ulegnie to zmianie, dokonamy przeglądu
          obowiązujących wymogów prawnych i odpowiednio zaktualizujemy
          niniejszą Politykę plików cookies.
        </p>

        {/* 5 */}
        <h2 className={sectionTitle}>5. Usługi podmiotów trzecich</h2>

        <p className={paragraph}>
          Nasza strona internetowa może korzystać z infrastruktury technicznej
          lub usług świadczonych przez podmioty trzecie w celu hostowania,
          zabezpieczenia lub obsługi strony.
        </p>

        <p className={paragraph}>
          Dostawcy tych usług mogą przetwarzać informacje techniczne w zakresie
          niezbędnym do świadczenia swoich usług. Obecnie nie wykorzystujemy na
          stronie internetowej zewnętrznych technologii reklamowych ani
          analitycznych.
        </p>

        {/* 6 */}
        <h2 className={sectionTitle}>6. Zarządzanie plikami cookies</h2>

        <p className={paragraph}>
          Mogą Państwo kontrolować pliki cookies za pomocą ustawień swojej
          przeglądarki internetowej. Większość przeglądarek umożliwia
          wyświetlanie, usuwanie lub blokowanie plików cookies.
        </p>

        <p className={paragraph}>
          Ponieważ niektóre technologie techniczne mogą być niezbędne do
          prawidłowego działania strony internetowej, zablokowanie wszystkich
          plików cookies lub pamięci przeglądarki może wpłynąć na niektóre
          funkcje strony.
        </p>

        {/* 7 */}
        <h2 className={sectionTitle}>
          7. Zmiany w Polityce plików cookies
        </h2>

        <p className={paragraph}>
          Możemy aktualizować niniejszą Politykę plików cookies, jeżeli zmienią
          się technologie wykorzystywane na stronie internetowej lub
          obowiązujące wymogi prawne.
        </p>

        <p className={paragraph}>
          Aktualna wersja niniejszej Polityki plików cookies będzie zawsze
          dostępna na tej stronie.
        </p>

        {/* 8 */}
        <h2 className={sectionTitle}>8. Kontakt</h2>

        <p className={paragraph}>
          W przypadku pytań dotyczących plików cookies lub podobnych technologii
          wykorzystywanych na naszej stronie internetowej mogą Państwo
          skontaktować się z nami:
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
            Polska
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
            href="/pl/privacy"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Polityka prywatności
          </Link>

          <Link
            href="/pl/terms"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Regulamin
          </Link>

          <Link
            href="/pl/contact"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Kontakt
          </Link>
        </div>
      </section>
    </main>
  );
}