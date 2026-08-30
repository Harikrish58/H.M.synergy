import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Політика використання файлів cookie | H&M Synergy",
  description:
    "Інформація про файли cookie та подібні технології, що використовуються на веб-сайті H&M Synergy.",
  alternates: {
    canonical: "/ua/cookies",
    languages: {
      en: "/en/cookies",
      pl: "/pl/cookies",
      uk: "/ua/cookies",
    },
  },
};

const sectionTitle =
  "mt-10 text-xl font-bold tracking-[-0.02em] text-[#0E2942] sm:text-2xl";

const paragraph =
  "text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

const list =
  "list-disc space-y-2 pl-6 text-base leading-7 text-[#5B6878] sm:text-[17px] sm:leading-8";

export default function CookiesUA() {
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
                Юридична інформація
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]">
              Політика використання файлів cookie
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Ця Політика використання файлів cookie пояснює, як H&amp;M Synergy Sp. z o.o.
              використовує файли cookie та подібні технології на цьому веб-сайті.
            </p>

            <p className="mt-6 text-sm text-[#8A96A3]">
              Останнє оновлення: 29 серпня 2026 року
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <section className="mx-auto max-w-[1000px] px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        <p className={paragraph}>
          H&amp;M Synergy Sp. z o.o. поважає вашу конфіденційність. Ця Політика
          використання файлів cookie пояснює наш поточний підхід до файлів cookie та подібних
          технологій, що використовуються під час відвідування нашого веб-сайту.
        </p>

        {/* 1 */}
        <h2 className={sectionTitle}>1. Що таке файли cookie?</h2>

        <p className={paragraph}>
          Файли cookie — це невеликі файли, які можуть зберігатися на вашому пристрої
          під час відвідування веб-сайту. Вони можуть використовуватися для забезпечення
          функціональності сайту, запам&apos;ятовування вподобань, підтримання безпеки або збору
          інформації про використання веб-сайту.
        </p>

        {/* 2 */}
        <h2 className={sectionTitle}>2. Файли cookie, які наразі використовуються на цьому веб-сайті</h2>

        <p className={paragraph}>
          Наразі H&amp;M Synergy навмисно не використовує аналітичні,
          рекламні, маркетингові або поведінкові файли cookie на цьому веб-сайті.
        </p>

        <p className={paragraph}>
          Ми також наразі не використовуємо такі сервіси, як Google Analytics,
          Google Tag Manager, Meta Pixel чи інші рекламні та аналітичні
          технології, які потребували б необов&apos;язкових файлів cookie для відстеження.
        </p>

        <p className={paragraph}>
          Веб-сайт може використовувати технічно необхідні технології, потрібні для
          безпечного та належного функціонування сайту або його інфраструктури.
        </p>

        {/* 3 */}
        <h2 className={sectionTitle}>3. Необхідні технології</h2>

        <p className={paragraph}>
          Певна технічна інформація може оброблятися автоматично під час
          доступу до веб-сайту. Це може включати інформацію, що міститься в
          логах сервера, хостингу або безпеки.
        </p>

        <p className={paragraph}>
          Така інформація може бути необхідна для таких цілей, як:
        </p>

        <ul className={list}>
          <li>безпека веб-сайту;</li>
          <li>запобігання зловживанням або шкідливій активності;</li>
          <li>підтримання доступності веб-сайту;</li>
          <li>діагностика технічних проблем; та</li>
          <li>забезпечення належного функціонування веб-сайту.</li>
        </ul>

        {/* 4 */}
        <h2 className={sectionTitle}>4. Аналітика та маркетинг</h2>

        <p className={paragraph}>
          Наразі ми не використовуємо файли cookie чи подібні технології для:
        </p>

        <ul className={list}>
          <li>реклами;</li>
          <li>маркетингу;</li>
          <li>поведінкового профілювання;</li>
          <li>міжсайтового відстеження; або</li>
          <li>аналітики веб-сайту.</li>
        </ul>

        <p className={paragraph}>
          Якщо це зміниться в майбутньому, ми переглянемо чинні законодавчі
          вимоги та відповідно оновдимо цю Політику використання файлів cookie.
        </p>

        {/* 5 */}
        <h2 className={sectionTitle}>5. Послуги третіх осіб</h2>

        <p className={paragraph}>
          Наш веб-сайт може використовувати технічну інфраструктуру або послуги, надані третіми
          сторонами для розміщення, захисту або забезпечення роботи сайту.
        </p>

        <p className={paragraph}>
          Ці провайдери можуть обробляти технічну інформацію в обсязі, необхідному для
          надання своїх послуг. Наразі ми не використовуємо сторонні рекламні чи
          аналітичні технології на веб-сайті.
        </p>

        {/* 6 */}
        <h2 className={sectionTitle}>6. Керування файлами cookie</h2>

        <p className={paragraph}>
          Ви можете керувати файлами cookie через налаштування свого веб-браузера.
          Більшість браузерів дозволяють переглядати, видаляти або блокувати файли cookie.
        </p>

        <p className={paragraph}>
          Оскільки деякі технічні технології можуть бути необхідними для правильного
          функціонування веб-сайту, блокування всіх файлів cookie або сховища браузера може
          вплинути на певну функціональність сайту.
        </p>

        {/* 7 */}
        <h2 className={sectionTitle}>7. Зміни до цієї Політики використання файлів cookie</h2>

        <p className={paragraph}>
          Ми можемо оновлювати цю Політику використання файлів cookie в разі зміни технологій,
          що використовуються на веб-сайті, або зміни чинних законодавчих вимог.
        </p>

        <p className={paragraph}>
          Актуальна версія цієї Політики використання файлів cookie завжди буде доступна
          на цій сторінці.
        </p>

        {/* 8 */}
        <h2 className={sectionTitle}>8. Контакти</h2>

        <p className={paragraph}>
          Якщо у вас виникли запитання щодо файлів cookie або подібних технологій, що використовуються
          на нашому веб-сайті, ви можете зв&apos;язатися з нами за адресою:
        </p>

        <div className="mt-6 border-t border-[#DCE4EB] pt-6">
          <p className="font-semibold text-[#0E2942]">
            H&amp;M Synergy Sp. z o.o.
          </p>

          <p className="mt-2 text-sm leading-6 text-[#5B6878]">
            вул. Вейська 2/7 (ul. Wiejska 2/7)
            <br />
            58-260 Бєлява (Bielawa)
            <br />
            Польща
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
            href="/ua/privacy"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Політика конфіденційності
          </Link>

          <Link
            href="/ua/terms"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Умови використання
          </Link>

          <Link
            href="/ua/contact"
            className="text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            Зв&apos;язатися з нами
          </Link>
        </div>
      </section>
    </main>
  );
}