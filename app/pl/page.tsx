"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  Truck,
  Code2,
  BarChart,
  Rocket,
} from "lucide-react";

/* Framer variants (typed) */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut" as const,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* MOBILE visual: horizontal strip with gentle float */
function HeroVisualMobile({
  reduceMotion = false,
}: {
  reduceMotion?: boolean | null;
}) {
  const icons = [
    { id: "truck", Icon: Truck, bg: "bg-blue-600" },
    { id: "handshake", Icon: Handshake, bg: "bg-purple-600" },
    { id: "code", Icon: Code2, bg: "bg-pink-600" },
    { id: "chart", Icon: BarChart, bg: "bg-emerald-600" },
  ];

  return (
    <div className="w-full md:hidden flex justify-center mt-8">
      <div className="flex items-center gap-4">
        {icons.map(({ id, Icon, bg }, i) => (
          <motion.span
            key={id}
            aria-hidden="true"
            className={`p-3 rounded-xl ${bg} text-white shadow-lg`}
            animate={reduceMotion ? {} : { y: [0, -6, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
            }
          >
            <Icon className="h-6 w-6" />
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* DESKTOP visual: polished horizontal zig-zag with pro motion + a11y */
function HeroVisualDesktop({
  reduceMotion = false,
}: {
  reduceMotion?: boolean | null;
}) {
  const chips = [
    { id: "truck", label: "Logistyka", Icon: Truck, bg: "bg-blue-600", y0: -8, delay: 0.0 },
    { id: "handshake", label: "Partnerstwo", Icon: Handshake, bg: "bg-purple-600", y0: 6, delay: 0.1 },
    { id: "code", label: "Rozwój", Icon: Code2, bg: "bg-pink-600", y0: -10, delay: 0.2 },
    { id: "chart", label: "Analityka", Icon: BarChart, bg: "bg-emerald-600", y0: 5, delay: 0.3 },
  ];

  return (
    <div className="flex-1 hidden md:flex justify-center">
      <div
        className="
          relative w-[540px] h-[240px]
          rounded-2xl overflow-hidden
          bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl
          ring-1 ring-gray-200/70 dark:ring-white/10
          shadow-[0_8px_30px_rgb(0,0,0,0.06)]
        "
      >
        {/* soft gradient wash */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70 blur-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 85% 15%, rgba(99,102,241,.20) 0%, transparent 60%), radial-gradient(60% 60% at 15% 85%, rgba(236,72,153,.18) 0%, transparent 60%)",
          }}
        />

        {/* horizontal row */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ul role="list" className="flex items-center gap-7">
            {chips.map(({ id, label, Icon, bg, y0, delay }) => (
              <li key={id}>
                <motion.span
                  aria-hidden="true"
                  className={`
                    group relative inline-flex h-14 w-14 items-center justify-center
                    ${bg} text-white rounded-xl
                    shadow-sm ring-1 ring-white/20
                    transition-transform
                    will-change-transform
                  `}
                  style={{ translateY: y0 }}
                  whileHover={reduceMotion ? undefined : { scale: 1.04, y: y0 - 2 }}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [y0, y0 - 10, y0, y0 + 10, y0],
                          x: [-3, 3, -3, 3, -3],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 3.6,
                          repeat: Infinity,
                          repeatType: "mirror",
                          ease: [0.25, 0.1, 0.25, 1],
                          delay,
                        }
                  }
                >
                  <Icon className="h-7 w-7" />
                  {/* hidden accessible label */}
                  <span className="sr-only">{label}</span>

                  {/* subtle inner highlight for depth */}
                  <span
                    className="
                      pointer-events-none absolute inset-0 rounded-xl
                      ring-1 ring-white/10
                      shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]
                    "
                  />
                </motion.span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function LandingPagePL() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Skip Link */}
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-4 focus:left-4 focus:bg-white dark:focus:bg-gray-900 focus:text-blue-600 dark:focus:text-blue-300 focus:ring-2 focus:ring-blue-600 rounded px-3 py-2 shadow"
      >
        Przejdź do usług
      </a>

      {/* Animated Background Blobs */}
      <motion.div
        animate={
          shouldReduceMotion ? {} : { scale: [1, 1.1, 1], rotate: [0, 6, -6, 0] }
        }
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-tr from-blue-300/25 via-purple-300/25 to-pink-300/25 rounded-full blur-3xl opacity-20 dark:from-blue-950/25 dark:via-purple-900/25 pointer-events-none"
      />
      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-pink-200/25 via-blue-200/25 to-purple-200/25 rounded-full blur-3xl opacity-15 dark:from-pink-950/25 dark:via-blue-900/25 pointer-events-none"
      />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-24 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            H&amp;M Synergy
          </h1>
          <p className="mb-8 text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 max-w-2xl">
            Zmień swoje operacje dzięki ekspertom od logistyki, rozwoju biznesu
            i nowoczesnych rozwiązań webowych.{" "}
            <br />
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Twój sukces, nasza precyzja.
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="/pl/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Rozpocznij współpracę"
            >
              Rozpocznij współpracę
              <motion.span
                className="ml-2 inline-block"
                animate={shouldReduceMotion ? {} : { x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all hover:scale-105 shadow-sm dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
              aria-label="Poznaj nasze usługi"
            >
              Poznaj nasze usługi
            </Link>
          </div>
        </motion.div>

        {/* Visuals: mobile row + desktop cluster */}
        <HeroVisualMobile reduceMotion={shouldReduceMotion} />
        <HeroVisualDesktop reduceMotion={shouldReduceMotion} />
      </section>

      {/* Services Preview */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="relative max-w-7xl mx-auto px-6 py-16 md:py-24"
      >
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2
            id="services-heading"
            variants={item}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 tracking-tight mb-4"
          >
            Nasze kompetencje – Twój atut
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Dopasowane rozwiązania w logistyce, rozwoju biznesu i tworzeniu stron, które napędzają efektywność i sukces.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.article
              aria-labelledby="svc-logistics"
              variants={item}
              whileHover={
                shouldReduceMotion ? {} : { scale: 1.05, y: -8, transition: { duration: 0.3 } }
              }
              className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-purple-400/50 via-blue-400/40 to-pink-400/50 shadow-sm"
              tabIndex={0}
            >
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg p-8 rounded-2xl h-full ring-1 ring-gray-100 dark:ring-gray-800">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900 group-hover:bg-purple-100 dark:group-hover:bg-purple-800 transition">
                    <Truck className="h-8 w-8 text-purple-600 dark:text-purple-300" aria-hidden="true" />
                  </div>
                  <h3 id="svc-logistics" className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Koordynacja logistyki
                  </h3>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-200">
                  Usprawnij łańcuch dostaw dzięki pozyskiwaniu transportu, precyzyjnemu harmonogramowaniu
                  i raportowaniu KPI w czasie rzeczywistym.
                </p>
                <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600" aria-hidden="true" />
                    Optymalizacja tras i planowania pojemności
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600" aria-hidden="true" />
                    Pełna zgodność z procedurami klienta
                  </li>
                </ul>
                <div className="mt-6 flex items-center justify-end">
                  <Link
                    href="/pl/logistics"
                    className="text-blue-600 font-semibold hover:underline"
                    aria-label="Dowiedz się więcej o koordynacji logistyki"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              aria-labelledby="svc-business"
              variants={item}
              whileHover={
                shouldReduceMotion ? {} : { scale: 1.05, y: -8, transition: { duration: 0.3 } }
              }
              className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-blue-400/50 via-indigo-400/40 to-cyan-400/50 shadow-sm"
              tabIndex={0}
            >
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg p-8 rounded-2xl h-full ring-1 ring-gray-100 dark:ring-gray-800">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900 group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition">
                    <Handshake className="h-8 w-8 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                  </div>
                  <h3 id="svc-business" className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Rozwój biznesu
                  </h3>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-200">
                  Napędzaj wzrost poprzez strategiczny outreach, konkurencyjne wyceny i analitykę opartą na danych.
                </p>
                <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600" aria-hidden="true" />
                    Ukierunkowane pozyskiwanie klientów i przetargi
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600" aria-hidden="true" />
                    Kompleksowe raporty sprzedaży i KPI
                  </li>
                </ul>
                <div className="mt-6 flex items-center justify-end">
                  <Link
                    href="/pl/business"
                    className="text-blue-600 font-semibold hover:underline"
                    aria-label="Dowiedz się więcej o rozwoju biznesu"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Card 3 */}
            <motion.article
              aria-labelledby="svc-it"
              variants={item}
              whileHover={
                shouldReduceMotion ? {} : { scale: 1.05, y: -8, transition: { duration: 0.3 } }
              }
              className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-pink-400/50 via-rose-400/40 to-purple-400/50 shadow-sm"
              tabIndex={0}
            >
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg p-8 rounded-2xl h-full ring-1 ring-gray-100 dark:ring-gray-800">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-pink-50 dark:bg-pink-900 group-hover:bg-pink-100 dark:group-hover:bg-pink-800 transition">
                    <Code2 className="h-8 w-8 text-pink-600 dark:text-pink-200" aria-hidden="true" />
                  </div>
                  <h3 id="svc-it" className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Rozwiązania webowe i IT
                  </h3>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-200">
                  Budujemy skalowalne, przyjazne użytkownikom strony i API w React, Next.js i TypeScript, które robią trwałą różnicę.
                </p>
                <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600" aria-hidden="true" />
                    Responsywne i dostępne interfejsy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600" aria-hidden="true" />
                    Solidne CI/CD i testy automatyczne
                  </li>
                </ul>
                <div className="mt-6 flex items-center justify-end">
                  <Link
                    href="/pl/it"
                    className="text-blue-600 font-semibold hover:underline"
                    aria-label="Dowiedz się więcej o rozwiązaniach webowych i IT"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* Why Us */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-gradient-to-r from-white/95 to-blue-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-lg rounded-2xl shadow-xl ring-1 ring-blue-100/50 dark:ring-gray-800 p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Dlaczego warto współpracować z H&amp;M Synergy?
              </h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
                Dostarczamy mierzalne rezultaty dzięki klarownej komunikacji, usprawnionym procesom i koncentracji na Twoich celach.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Jasny zakres i harmonogram prac",
                  "Zwinne procesy i szybkie iteracje",
                  "Szczegółowe raporty KPI i wgląd w dane",
                  "Dwujęzyczne wsparcie: PL / EN",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-gray-800 dark:text-gray-100">
                    <CheckCircle2 className="h-6 w-6 mt-0.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900">
                    <Rocket className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Nasz sprawdzony 4‑etapowy proces
                  </h3>
                </div>
                <ol className="mt-4 space-y-4 text-gray-700 dark:text-gray-200 list-decimal list-inside">
                  <li>Rozmowa wstępna i definicja celów</li>
                  <li>Plan szyty na miarę i szybki start</li>
                  <li>Cotygodniowe aktualizacje i iteracje</li>
                  <li>Dostawa wraz z kompletną dokumentacją</li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gotowy, aby rozwinąć swój biznes?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Podziel się swoją wizją, a przygotujemy dopasowany plan, by skutecznie osiągnąć Twoje cele.
          </p>
          <Link
            href="/pl/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Skontaktuj się z nami"
          >
            Skontaktuj się z nami
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
