import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności — H&M Synergy",
  description:
    "Jak H&M Synergy Sp. z o.o. przetwarza dane osobowe przesyłane przez tę stronę.",
};

export default function PrivacyPL() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Polityka prywatności</h1>
      <p className="text-sm text-gray-500 mb-8">
        Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
      </p>

      <section className="space-y-6 text-gray-800">
        <p>
          Niniejszy dokument wyjaśnia, w jaki sposób przetwarzamy dane osobowe przesyłane za pośrednictwem tej strony,
          w szczególności poprzez formularz kontaktowy. Działamy zgodnie z Rozporządzeniem (UE) 2016/679 („RODO”).
        </p>

        <h2 className="text-xl font-semibold">1) Administrator danych</h2>
        <p>
          <strong>H&amp;M Synergy Sp. z o.o.</strong>
          <br />
          ul. Wiejska 2/7, 58-260 Bielawa, Polska
          <br />
          NIP: 8822152332 · REGON: 542508629 · KRS: 0001189932
          <br />
          E-mail:{" "}
          <a className="text-blue-600 underline" href="mailto:h.m.synergypl@gmail.com">
            h.m.synergypl@gmail.com
          </a>
          <br />
          Tel.: +48 739 686 095 / +48 573 415 010
        </p>

        <h2 className="text-xl font-semibold">2) Jakie dane zbieramy</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dane identyfikacyjne i kontaktowe: imię i nazwisko, adres e-mail.</li>
          <li>Opcjonalnie: numer telefonu, firma.</li>
          <li>Treść wiadomości przekazywana w formularzu.</li>
          <li>Informacja o wyrażonej zgodzie.</li>
          <li>Techniczne logi dostawcy hostingu (bezpieczeństwo/diagnostyka).</li>
        </ul>

        <h2 className="text-xl font-semibold">3) Cele i podstawy prawne</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Udzielenie odpowiedzi na zapytanie i korespondencja — <em>prawnie uzasadniony interes</em> (art. 6 ust. 1
            lit. f RODO).
          </li>
          <li>
            Jeśli zaznaczysz zgodę, kontakt w sprawie tego zapytania — <em>zgoda</em> (art. 6 ust. 1 lit. a RODO).
          </li>
          <li>
            Wykonanie obowiązków prawnych (np. wykazanie zgody) — <em>obowiązek prawny</em> (art. 6 ust. 1 lit. c
            RODO), jeśli dotyczy.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">4) Odbiorcy danych</h2>
        <p>Korzystamy z podmiotów przetwarzających, m.in.:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Infrastruktura poczty e-mail (Gmail/Google LLC) do wysyłki i odbioru wiadomości.</li>
          <li>Dostawcy hostingu/infrastruktury tej strony (mogą przetwarzać logi bezpieczeństwa).</li>
        </ul>
        <p>
          Podmioty te mogą mieć siedzibę poza EOG. W razie przekazania danych stosujemy odpowiednie zabezpieczenia (np.
          standardowe klauzule umowne).
        </p>

        <h2 className="text-xl font-semibold">5) Okres przechowywania</h2>
        <p>
          Dane związane z zapytaniem przechowujemy do <strong>12 miesięcy</strong> od ostatniego kontaktu, chyba że
          dłuższy okres wynika z przepisów lub jest konieczny do dochodzenia/obrony roszczeń.
        </p>

        <h2 className="text-xl font-semibold">6) Twoje prawa</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dostęp do danych, ich sprostowanie i usunięcie.</li>
          <li>Ograniczenie przetwarzania lub sprzeciw.</li>
          <li>
            Przenoszenie danych (dla danych przekazanych na podstawie zgody/umowy i przetwarzanych automatycznie).
          </li>
          <li>Wycofanie zgody w dowolnym momencie (bez wpływu na zgodność wcześniejszego przetwarzania).</li>
          <li>
            Skarga do organu nadzorczego: <strong>PUODO/UODO</strong>, ul. Stawki 2, 00-193 Warszawa.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">7) Pliki cookies i śledzenie</h2>
        <p>
          Nie stosujemy analitycznych ani marketingowych plików cookies. Mogą być używane wyłącznie niezbędne pliki
          cookies wymagane do bezpieczeństwa i podstawowego działania serwisu.
        </p>

        <h2 className="text-xl font-semibold">8) Bezpieczeństwo</h2>
        <p>
          Stosujemy środki techniczne i organizacyjne odpowiednie do ryzyka, w tym szyfrowanie transmisji (HTTPS) oraz
          kontrolę dostępu.
        </p>

        <h2 className="text-xl font-semibold">9) Zmiany</h2>
        <p>
          Polityka może być okresowo aktualizowana. Aktualna wersja jest zawsze dostępna na tej stronie.
        </p>

        <div className="pt-6">
          <Link href="/pl/kontakt" className="text-blue-600 underline">
            Wróć do kontaktu
          </Link>
        </div>
      </section>
    </main>
  );
}
