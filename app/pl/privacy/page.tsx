import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności | H&M Synergy",
  description:
    "Polityka prywatności H&M Synergy Sp. z o.o. wyjaśniająca zasady przetwarzania danych osobowych za pośrednictwem strony internetowej H&M Synergy.",

  alternates: {
    canonical: "/pl/privacy",
    languages: {
      en: "/en/privacy",
      pl: "/pl/privacy",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/privacy",
    siteName: "H&M Synergy",
    title: "Polityka prywatności | H&M Synergy",
    description:
      "Informacje o tym, w jaki sposób H&M Synergy przetwarza dane osobowe za pośrednictwem swojej strony internetowej.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Polityka prywatności",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Polityka prywatności | H&M Synergy",
    description:
      "Informacje o przetwarzaniu danych osobowych przez H&M Synergy.",
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

export default function PrivacyPL() {
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
                Informacje prawne
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]">
              Polityka prywatności
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Niniejsza Polityka prywatności wyjaśnia, w jaki sposób
              H&amp;M Synergy Sp. z o.o. przetwarza dane osobowe w związku
              z korzystaniem z tej strony internetowej oraz zapytaniami
              przesyłanymi za jej pośrednictwem.
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
        <div className="space-y-6">
          {/* INTRODUCTION */}
          <p className={paragraph}>
            H&amp;M Synergy Sp. z o.o. szanuje prywatność osób, których dane
            osobowe przetwarza. Przetwarzamy dane osobowe zgodnie z
            obowiązującymi przepisami dotyczącymi ochrony danych, w tym
            Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679
            z dnia 27 kwietnia 2016 r. (ogólne rozporządzenie o ochronie danych,
            „RODO”) oraz obowiązującymi przepisami prawa polskiego.
          </p>

          <p className={paragraph}>
            Niniejsza Polityka prywatności dotyczy przede wszystkim danych
            osobowych gromadzonych za pośrednictwem strony internetowej
            H&amp;M Synergy, w tym informacji przesyłanych za pośrednictwem
            formularza kontaktowego oraz informacji niezbędnych do zapewnienia
            bezpieczeństwa i prawidłowego działania strony internetowej.
          </p>

          {/* 1 */}
          <h2 className={sectionTitle}>1. Administrator danych</h2>

          <p className={paragraph}>
            Administratorem danych osobowych przetwarzanych w związku z
            funkcjonowaniem tej strony internetowej jest:
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
              Polska
            </p>

            <p className="mt-4 text-sm leading-6 text-[#5B6878]">
              NIP: 8822152332
              <br />
              REGON: 542508629
              <br />
              KRS: 0001189932
            </p>

            <p className="mt-4 text-sm leading-6 text-[#5B6878]">
              E-mail:{" "}
              <a
                href="mailto:h.m.synergypl@gmail.com"
                className="font-medium text-[#123B63] hover:text-[#159A86]"
              >
                h.m.synergypl@gmail.com
              </a>
            </p>

            <p className="mt-2 text-sm leading-6 text-[#5B6878]">
              Telefon: +48 739 686 095 / +48 573 415 010
            </p>
          </div>

          {/* 2 */}
          <h2 className={sectionTitle}>
            2. Dane osobowe, które możemy przetwarzać
          </h2>

          <p className={paragraph}>
            W zależności od sposobu korzystania ze strony internetowej możemy
            przetwarzać między innymi:
          </p>

          <ul className={list}>
            <li>imię i nazwisko;</li>
            <li>adres e-mail;</li>
            <li>numer telefonu, jeżeli został podany;</li>
            <li>nazwę firmy lub organizacji, jeżeli została podana;</li>
            <li>temat i treść zapytania;</li>
            <li>
              informacje dotyczące zgody, jeżeli jej udzielenie jest wymagane;
            </li>
            <li>
              informacje techniczne niezbędne do bezpiecznego działania strony,
              takie jak logi serwera lub systemów bezpieczeństwa, jeżeli są
              gromadzone przez naszych dostawców hostingu lub infrastruktury.
            </li>
          </ul>

          <p className={paragraph}>
            Prosimy o nieprzekazywanie za pośrednictwem ogólnego formularza
            kontaktowego szczególnych kategorii danych osobowych ani innych
            informacji, które nie są niezbędne do obsługi zapytania.
          </p>

          {/* 3 */}
          <h2 className={sectionTitle}>
            3. Cele i podstawy prawne przetwarzania
          </h2>

          <p className={paragraph}>
            Przetwarzamy dane osobowe wyłącznie w określonych i uzasadnionych
            celach. W zależności od okoliczności podstawą prawną przetwarzania
            może być:
          </p>

          <div className="space-y-5">
            <div className="border-l-2 border-[#159A86] pl-5">
              <h3 className="font-semibold text-[#0E2942]">
                Odpowiadanie na zapytania
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5B6878]">
                Możemy przetwarzać dane kontaktowe oraz informacje zawarte
                w zapytaniu w celu udzielenia odpowiedzi na wiadomość przesłaną
                za pośrednictwem strony internetowej oraz prowadzenia
                komunikacji z osobą, która się z nami skontaktowała.
                W zależności od okoliczności podstawą prawną może być nasz
                prawnie uzasadniony interes polegający na obsłudze i udzielaniu
                odpowiedzi na zapytania biznesowe lub ogólne (art. 6 ust. 1
                lit. f RODO) albo podjęcie działań na żądanie osoby, której
                dane dotyczą, przed zawarciem umowy (art. 6 ust. 1 lit. b RODO).
              </p>
            </div>

            <div className="border-l-2 border-[#159A86] pl-5">
              <h3 className="font-semibold text-[#0E2942]">
                Zgoda, jeżeli jest wymagana
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5B6878]">
                Jeżeli przetwarzanie odbywa się na podstawie zgody, odpowiednie
                dane osobowe przetwarzamy na podstawie art. 6 ust. 1 lit. a
                RODO. Zgodę można wycofać w dowolnym momencie. Wycofanie zgody
                nie wpływa na zgodność z prawem przetwarzania dokonanego przed
                jej wycofaniem.
              </p>
            </div>

            <div className="border-l-2 border-[#159A86] pl-5">
              <h3 className="font-semibold text-[#0E2942]">
                Obowiązki prawne
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5B6878]">
                W razie potrzeby dane osobowe mogą być przetwarzane w celu
                wypełnienia obowiązków prawnych ciążących na H&amp;M Synergy
                Sp. z o.o., na podstawie art. 6 ust. 1 lit. c RODO.
              </p>
            </div>

            <div className="border-l-2 border-[#159A86] pl-5">
              <h3 className="font-semibold text-[#0E2942]">
                Bezpieczeństwo i ochrona praw
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5B6878]">
                Możemy przetwarzać informacje techniczne oraz odpowiednie
                zapisy, jeżeli jest to niezbędne do zapewnienia bezpieczeństwa
                strony internetowej, zapobiegania nadużyciom, ustalenia stanu
                faktycznego lub dochodzenia i obrony przed roszczeniami
                prawnymi. W stosownych przypadkach podstawą prawną jest nasz
                prawnie uzasadniony interes zgodnie z art. 6 ust. 1 lit. f RODO
                lub inna podstawa prawna wymagana przez obowiązujące przepisy.
              </p>
            </div>
          </div>

          {/* 4 */}
          <h2 className={sectionTitle}>
            4. Zapytania dotyczące rekrutacji i zatrudnienia
          </h2>

          <p className={paragraph}>
            Strona internetowa może być wykorzystywana przez osoby
            zainteresowane możliwościami zatrudnienia oraz przez firmy
            zainteresowane rozwiązaniami dotyczącymi personelu.
          </p>

          <p className={paragraph}>
            Informacje przesłane za pośrednictwem ogólnego formularza
            kontaktowego mogą być wykorzystywane w celu udzielenia odpowiedzi
            na takie zapytania. Jeżeli osoba następnie uczestniczy w procesie
            rekrutacyjnym lub zatrudnieniu, dodatkowe dane osobowe mogą być
            przetwarzane zgodnie z odrębnymi obowiązkami informacyjnymi
            dotyczącymi danego procesu.
          </p>

          <p className={paragraph}>
            Niniejszej Polityki prywatności strony internetowej nie należy
            zatem traktować jako kompletnej informacji dotyczącej każdego
            procesu przetwarzania danych związanego z rekrutacją, zatrudnieniem,
            personelem, wynagrodzeniami lub zarządzaniem personelem prowadzonym
            przez H&amp;M Synergy Sp. z o.o.
          </p>

          {/* 5 */}
          <h2 className={sectionTitle}>
            5. Odbiorcy danych osobowych
          </h2>

          <p className={paragraph}>
            Dane osobowe mogą być udostępniane odbiorcom, którzy potrzebują tych
            informacji w celu świadczenia usług na rzecz H&amp;M Synergy
            Sp. z o.o. lub obsługi i zabezpieczenia strony internetowej.
          </p>

          <p className={paragraph}>
            W zależności od zastosowanej infrastruktury technicznej mogą to
            być między innymi:
          </p>

          <ul className={list}>
            <li>dostawcy hostingu i infrastruktury strony internetowej;</li>
            <li>
              dostawcy usług poczty elektronicznej i komunikacji wykorzystywanych
              do obsługi zapytań;
            </li>
            <li>
              dostawcy usług technicznych, bezpieczeństwa, utrzymania lub IT;
            </li>
            <li>
              organy publiczne lub inni odbiorcy, jeżeli ujawnienie danych jest
              wymagane przez prawo.
            </li>
          </ul>

          <p className={paragraph}>
            Jeżeli dostawca usług przetwarza dane osobowe w naszym imieniu,
            podejmujemy odpowiednie działania w celu zapewnienia, że
            przetwarzanie odbywa się zgodnie z obowiązującymi wymogami ochrony
            danych.
          </p>

          {/* 6 */}
          <h2 className={sectionTitle}>
            6. Przekazywanie danych poza Europejski Obszar Gospodarczy
          </h2>

          <p className={paragraph}>
            Niektórzy dostawcy technologii lub usług mogą przetwarzać dane
            osobowe poza Europejskim Obszarem Gospodarczym. Jeżeli takie
            przekazanie ma miejsce i RODO wymaga zastosowania odpowiedniego
            mechanizmu przekazywania danych, zastosujemy właściwą podstawę
            prawną, taką jak decyzja stwierdzająca odpowiedni stopień ochrony
            lub odpowiednie zabezpieczenia zgodnie z rozdziałem V RODO.
          </p>

          <p className={paragraph}>
            Dostawcy faktycznie wykorzystywani przez stronę internetową mogą
            zmieniać się wraz z rozwojem naszej infrastruktury technicznej.
            Nie oznacza to, że każdy dostawca opisany w tej sekcji znajduje się
            poza EOG.
          </p>

          {/* 7 */}
          <h2 className={sectionTitle}>
            7. Jak długo przechowujemy dane osobowe
          </h2>

          <p className={paragraph}>
            Dane osobowe przechowujemy wyłącznie przez okres niezbędny do
            realizacji celu, w którym zostały zebrane, z uwzględnieniem
            obowiązujących obowiązków prawnych oraz potrzeby ustalenia,
            dochodzenia lub obrony przed roszczeniami prawnymi.
          </p>

          <p className={paragraph}>
            W przypadku zwykłych zapytań przesłanych za pośrednictwem strony
            internetowej okres przechowywania jest ustalany w zależności od
            charakteru zapytania oraz dalszej relacji z osobą, która się
            z nami skontaktowała. Jeżeli obowiązuje określony ustawowy okres
            przechowywania danych, pierwszeństwo ma odpowiedni wymóg prawny.
          </p>

          <p className={paragraph}>
            Możemy przechowywać ograniczony zakres informacji przez dłuższy
            okres, jeżeli jest to niezbędne do wykazania zgodności z
            obowiązkami prawnymi, rozstrzygania sporów lub ochrony naszych
            prawnie uzasadnionych interesów.
          </p>

          {/* 8 */}
          <h2 className={sectionTitle}>
            8. Prawa przysługujące na podstawie RODO
          </h2>

          <p className={paragraph}>
            Z zastrzeżeniem warunków i ograniczeń przewidzianych przez
            obowiązujące przepisy prawa mogą Państwu przysługiwać prawa do:
          </p>

          <ul className={list}>
            <li>
              uzyskania potwierdzenia, czy przetwarzamy Państwa dane osobowe;
            </li>
            <li>
              dostępu do Państwa danych osobowych oraz uzyskania ich kopii;
            </li>
            <li>
              żądania sprostowania nieprawidłowych lub niekompletnych danych;
            </li>
            <li>
              żądania usunięcia danych osobowych, jeżeli spełnione są
              odpowiednie warunki;
            </li>
            <li>
              żądania ograniczenia przetwarzania w przypadkach przewidzianych
              przez RODO;
            </li>
            <li>
              wniesienia sprzeciwu wobec przetwarzania opartego na prawnie
              uzasadnionym interesie, z zastrzeżeniem wymogów RODO;
            </li>
            <li>
              otrzymania danych osobowych w ustrukturyzowanym, powszechnie
              używanym i nadającym się do odczytu maszynowego formacie, jeżeli
              zastosowanie ma prawo do przenoszenia danych;
            </li>
            <li>
              wycofania zgody w dowolnym momencie, jeżeli przetwarzanie odbywa
              się na podstawie zgody.
            </li>
          </ul>

          <p className={paragraph}>
            W celu skorzystania z przysługujących praw należy skontaktować się
            z nami, korzystając z danych kontaktowych podanych w niniejszej
            Polityce prywatności.
          </p>

          {/* 9 */}
          <h2 className={sectionTitle}>
            9. Prawo do wniesienia skargi
          </h2>

          <p className={paragraph}>
            Mają Państwo prawo wnieść skargę do organu nadzorczego, jeżeli
            uznają Państwo, że przetwarzanie danych osobowych narusza
            obowiązujące przepisy dotyczące ochrony danych.
          </p>

          <p className={paragraph}>
            W Polsce organem nadzorczym jest Prezes Urzędu Ochrony Danych
            Osobowych (UODO).
          </p>

          <div className="border-y border-[#DCE4EB] bg-[#F7F9FB] px-5 py-5 sm:px-7">
            <p className="text-sm leading-6 text-[#5B6878]">
              Urząd Ochrony Danych Osobowych
              <br />
              ul. Stawki 2
              <br />
              00-193 Warszawa
              <br />
              Polska
            </p>
          </div>

          {/* 10 */}
          <h2 className={sectionTitle}>
            10. Pliki cookies i podobne technologie
          </h2>

          <p className={paragraph}>
            Nasza strona internetowa może wykorzystywać pliki cookies lub
            podobne technologie, które są niezbędne do działania, bezpieczeństwa
            i prawidłowego funkcjonowania strony.
          </p>

          <p className={paragraph}>
            Nie twierdzimy, że strona internetowa wykorzystuje technologie
            analityczne, reklamowe lub inne opcjonalne technologie śledzące,
            chyba że takie technologie zostały faktycznie wdrożone.
          </p>

          <p className={paragraph}>
            Informacje dotyczące plików cookies i podobnych technologii, w tym
            ich celów oraz możliwości wyboru dostępnych dla użytkowników,
            znajdują się w naszej odrębnej Polityce plików cookies.
          </p>

          <Link
            href="/pl/cookies"
            className="inline-flex items-center text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
          >
            Przeczytaj Politykę plików cookies →
          </Link>

          {/* 11 */}
          <h2 className={sectionTitle}>
            11. Bezpieczeństwo danych
          </h2>

          <p className={paragraph}>
            Stosujemy odpowiednie środki techniczne i organizacyjne mające na
            celu ochronę danych osobowych przed nieuprawnionym dostępem,
            przypadkową utratą, zniszczeniem, zmianą lub innym bezprawnym
            przetwarzaniem.
          </p>

          <p className={paragraph}>
            Stosowane środki mogą obejmować szyfrowaną komunikację, kontrolę
            dostępu, bezpieczne praktyki hostingowe oraz inne zabezpieczenia
            odpowiednie do ryzyka związanego z przetwarzaniem danych.
          </p>

          {/* 12 */}
          <h2 className={sectionTitle}>
            12. Zautomatyzowane podejmowanie decyzji i profilowanie
          </h2>

          <p className={paragraph}>
            Nie wykorzystujemy tej strony internetowej do podejmowania decyzji
            wywołujących skutki prawne lub w podobny sposób istotnie wpływających
            na osoby fizyczne wyłącznie w oparciu o zautomatyzowane
            podejmowanie decyzji.
          </p>

          <p className={paragraph}>
            Jeżeli sytuacja ta ulegnie zmianie w odniesieniu do określonego
            procesu przetwarzania, odpowiednie informacje zostaną przekazane
            zgodnie z obowiązującymi przepisami prawa.
          </p>

          {/* 13 */}
          <h2 className={sectionTitle}>
            13. Zmiany w Polityce prywatności
          </h2>

          <p className={paragraph}>
            Możemy aktualizować niniejszą Politykę prywatności, gdy jest to
            konieczne, w szczególności w przypadku zmian dotyczących naszej
            strony internetowej, usług, technologii lub obowiązków prawnych.
          </p>

          <p className={paragraph}>
            Aktualna wersja Polityki prywatności będzie publikowana na tej
            stronie wraz z datą ostatniej aktualizacji.
          </p>

          {/* 14 */}
          <h2 className={sectionTitle}>14. Kontakt</h2>

          <p className={paragraph}>
            W przypadku pytań dotyczących niniejszej Polityki prywatności lub
            przetwarzania Państwa danych osobowych prosimy o kontakt:
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
              Polska
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
              href="/pl/cookies"
              className="text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
            >
              Polityka plików cookies
            </Link>

            <Link
              href="/pl/terms"
              className="text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
            >
              Regulamin
            </Link>

            <Link
              href="/pl/contact"
              className="text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}