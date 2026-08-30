import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regulamin | H&M Synergy",
  description:
    "Regulamin określający zasady korzystania ze strony internetowej H&M Synergy Sp. z o.o. i jej zawartości.",

  alternates: {
    canonical: "/pl/terms",
    languages: {
      en: "/en/terms",
      pl: "/pl/terms",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/terms",
    siteName: "H&M Synergy",
    title: "Regulamin | H&M Synergy",
    description:
      "Regulamin określający zasady korzystania ze strony internetowej H&M Synergy Sp. z o.o. i jej zawartości.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Regulamin",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Regulamin | H&M Synergy",
    description:
      "Zasady korzystania ze strony internetowej H&M Synergy Sp. z o.o. i jej zawartości.",
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

export default function TermsPL() {
  return (
    <main className="bg-white text-[#182230]">
      {/* HERO */}
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
              Regulamin
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Niniejszy Regulamin określa zasady dostępu do strony internetowej
              H&amp;M Synergy oraz korzystania z jej zawartości.
            </p>

            <p className="mt-6 text-sm text-[#8A96A3]">
              Ostatnia aktualizacja: 29 sierpnia 2026 r.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1000px] px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        <p className={paragraph}>
          Uzyskując dostęp do niniejszej strony internetowej lub korzystając
          z niej, akceptują Państwo niniejszy Regulamin. Jeżeli nie zgadzają
          się Państwo z jego postanowieniami, prosimy o niekorzystanie ze
          strony internetowej.
        </p>

        <h2 className={sectionTitle}>1. Operator strony internetowej</h2>

        <p className={paragraph}>
          Niniejsza strona internetowa jest prowadzona przez:
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
            Polska
            <br />
            NIP: 8822152332
            <br />
            REGON: 542508629
            <br />
            KRS: 0001189932
          </p>

          <p className="mt-3 text-sm leading-6 text-[#5B6878]">
            E-mail:{" "}
            <a
              href="mailto:h.m.synergypl@gmail.com"
              className="font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
            >
              h.m.synergypl@gmail.com
            </a>
          </p>
        </div>

        <h2 className={sectionTitle}>2. Korzystanie ze strony internetowej</h2>

        <p className={paragraph}>
          Mogą Państwo korzystać z niniejszej strony internetowej wyłącznie
          w celach zgodnych z prawem oraz zgodnie z niniejszym Regulaminem.
        </p>

        <p className={paragraph}>
          Zabrania się korzystania ze strony w sposób, który:
        </p>

        <ul className={list}>
          <li>narusza obowiązujące przepisy prawa lub regulacje;</li>
          <li>
            narusza prawa, prywatność lub prawa własności intelektualnej innej
            osoby;
          </li>
          <li>
            ma na celu uzyskanie nieuprawnionego dostępu do strony internetowej
            lub jej systemów;
          </li>
          <li>
            wprowadza złośliwy kod, szkodliwe oprogramowanie lub inne materiały
            zakłócające działanie strony;
          </li>
          <li>
            zakłóca bezpieczeństwo, dostępność lub prawidłowe funkcjonowanie
            strony internetowej; lub
          </li>
          <li>
            wykorzystuje informacje uzyskane ze strony do celów niezgodnych
            z prawem lub oszukańczych.
          </li>
        </ul>

        <h2 className={sectionTitle}>3. Zawartość strony internetowej</h2>

        <p className={paragraph}>
          Dokładamy uzasadnionych starań, aby informacje zamieszczone na tej
          stronie były dokładne i aktualne. Zawartość strony może jednak ulegać
          zmianom i nie gwarantujemy, że wszystkie informacje będą zawsze
          kompletne, dokładne lub aktualne.
        </p>

        <p className={paragraph}>
          Informacje dotyczące ofert pracy, usług oraz działalności biznesowej
          są przedstawiane w celach ogólnoinformacyjnych. Oferta pracy lub opis
          zamieszczony na stronie internetowej nie stanowi sam w sobie umowy
          o pracę, oferty zatrudnienia, umowy handlowej ani innego prawnie
          wiążącego porozumienia.
        </p>

        <h2 className={sectionTitle}>4. Oferty pracy</h2>

        <p className={paragraph}>
          Oferty pracy publikowane na stronie internetowej mogą być zmieniane,
          aktualizowane, zawieszane lub usuwane bez wcześniejszego powiadomienia.
        </p>

        <p className={paragraph}>
          Dostępność danego stanowiska nie gwarantuje zatrudnienia. Decyzje
          dotyczące rekrutacji zależą od wymagań związanych z danym stanowiskiem,
          kwalifikacji kandydata, obowiązujących przepisów prawa oraz przebiegu
          procesu rekrutacyjnego.
        </p>

        <p className={paragraph}>
          Każdy stosunek pracy będzie regulowany przez właściwą dokumentację
          dotyczącą zatrudnienia oraz umowy zawarte z odpowiednimi stronami.
        </p>

        <h2 className={sectionTitle}>
          5. Formularze kontaktowe i przekazywane informacje
        </h2>

        <p className={paragraph}>
          Jeżeli przekazują Państwo informacje za pośrednictwem formularza
          kontaktowego, odpowiadają Państwo za podanie informacji zgodnych
          z prawdą oraz za posiadanie prawa do ich przekazania.
        </p>

        <p className={paragraph}>
          Prosimy o nieprzesyłanie poufnych informacji, haseł, danych kart
          płatniczych ani innych informacji, które nie są niezbędne do obsługi
          zapytania.
        </p>

        <p className={paragraph}>
          Dane osobowe przekazywane za pośrednictwem strony internetowej są
          przetwarzane zgodnie z naszą{" "}
          <Link
            href="/pl/privacy"
            className="font-semibold text-[#123B63] hover:text-[#159A86]"
          >
            Polityką prywatności
          </Link>
          .
        </p>

        <h2 className={sectionTitle}>6. Własność intelektualna</h2>

        <p className={paragraph}>
          O ile nie wskazano inaczej, zawartość niniejszej strony internetowej,
          w tym teksty, grafiki, logotypy, elementy wizualne, projekt oraz inne
          materiały, stanowi własność H&amp;M Synergy Sp. z o.o. lub jest przez
          nią wykorzystywana zgodnie z prawem i może podlegać ochronie na
          podstawie obowiązujących przepisów dotyczących własności
          intelektualnej.
        </p>

        <p className={paragraph}>
          Mogą Państwo korzystać ze strony internetowej w celach osobistych
          lub zgodnych z prawem celach biznesowych. Bez odpowiedniej zgody
          zabrania się kopiowania, rozpowszechniania, modyfikowania,
          publikowania lub komercyjnego wykorzystywania zawartości strony,
          chyba że jest to dozwolone przez obowiązujące przepisy prawa.
        </p>

        <h2 className={sectionTitle}>
          7. Strony internetowe i usługi podmiotów trzecich
        </h2>

        <p className={paragraph}>
          Strona internetowa może zawierać odnośniki do stron internetowych
          lub usług prowadzonych przez podmioty trzecie.
        </p>

        <p className={paragraph}>
          Strony internetowe podmiotów trzecich pozostają poza naszą kontrolą.
          Nie ponosimy odpowiedzialności za ich zawartość, dostępność,
          bezpieczeństwo, zasady ochrony prywatności ani regulaminy.
          Korzystanie ze strony internetowej podmiotu trzeciego podlega jego
          własnym warunkom i zasadom.
        </p>

        <h2 className={sectionTitle}>8. Dostępność strony internetowej</h2>

        <p className={paragraph}>
          Dokładamy starań, aby strona internetowa była dostępna i działała
          prawidłowo. Nie gwarantujemy jednak nieprzerwanej lub wolnej od błędów
          dostępności strony.
        </p>

        <p className={paragraph}>
          Strona internetowa może być czasowo niedostępna z powodu prac
          konserwacyjnych, problemów technicznych, incydentów bezpieczeństwa,
          awarii infrastruktury lub okoliczności pozostających poza naszą
          uzasadnioną kontrolą.
        </p>

        <h2 className={sectionTitle}>
          9. Wyłączenie odpowiedzialności i jej ograniczenie
        </h2>

        <p className={paragraph}>
          W zakresie dozwolonym przez obowiązujące przepisy prawa strona
          internetowa oraz jej zawartość są udostępniane bez gwarancji, że
          informacje będą zawsze kompletne, dokładne, dostępne lub odpowiednie
          do określonego celu.
        </p>

        <p className={paragraph}>
          Żadne postanowienie niniejszego Regulaminu nie wyłącza ani nie
          ogranicza odpowiedzialności w zakresie, w którym takie wyłączenie
          lub ograniczenie nie jest dozwolone przez obowiązujące przepisy prawa.
        </p>

        <h2 className={sectionTitle}>
          10. Zmiany strony internetowej i Regulaminu
        </h2>

        <p className={paragraph}>
          Możemy w dowolnym momencie zmieniać, aktualizować lub zaprzestać
          udostępniania części strony internetowej.
        </p>

        <p className={paragraph}>
          Możemy również aktualizować niniejszy Regulamin w razie potrzeby,
          w szczególności w przypadku zmian strony internetowej, naszych usług
          lub obowiązujących wymagań prawnych.
        </p>

        <p className={paragraph}>
          Najnowsza wersja Regulaminu będzie publikowana na tej stronie wraz
          z datą jego aktualizacji.
        </p>

        <h2 className={sectionTitle}>11. Prawo właściwe</h2>

        <p className={paragraph}>
          Niniejszy Regulamin podlega prawu Rzeczypospolitej Polskiej,
          z zastrzeżeniem bezwzględnie obowiązujących przepisów prawa.
        </p>

        <p className={paragraph}>
          Wszelkie spory związane z korzystaniem z niniejszej strony internetowej
          będą rozpatrywane przez właściwe sądy zgodnie z obowiązującym prawem
          polskim, w tym z uwzględnieniem bezwzględnie obowiązujących zasad
          dotyczących właściwości sądów oraz praw konsumentów, jeżeli mają
          zastosowanie.
        </p>

        <h2 className={sectionTitle}>12. Kontakt</h2>

        <p className={paragraph}>
          W przypadku pytań dotyczących niniejszego Regulaminu prosimy
          o kontakt:
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

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#DCE4EB] pt-7">
          <Link
            href="/pl/privacy"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Polityka prywatności
          </Link>

          <Link
            href="/pl/cookies"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Polityka cookies
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