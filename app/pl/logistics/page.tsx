"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Truck,
  Calendar,
  Phone,
  BarChart,
  FileCheck,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const points = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    label: "Analiza produkcji",
    text: "Analiza planów produkcyjnych oraz wymagań dotyczących dostaw do klientów.",
  },
  {
    icon: <Truck className="h-8 w-8 text-purple-600" />,
    label: "Pozyskiwanie przewoźników",
    text: "Wyszukiwanie rzetelnych i opłacalnych firm transportowych dopasowanych do potrzeb klienta.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-pink-600" />,
    label: "Koordynacja dostaw",
    text: "Planowanie i uzgadnianie wysyłek z fabryką oraz przewoźnikiem.",
  },
  {
    icon: <Phone className="h-8 w-8 text-indigo-600" />,
    label: "Aktywna komunikacja",
    text: "Stały kontakt między fabryką, przewoźnikiem i odbiorcą w celu sprawnego przepływu informacji.",
  },
  {
    icon: <FileCheck className="h-8 w-8 text-orange-500" />,
    label: "Nadzór nad zgodnością",
    text: "Monitorowanie potwierdzeń doręczeń i zgodności z procedurami klienta oraz przepisami.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-green-600" />,
    label: "Raportowanie KPI",
    text: "Dostarczanie wskaźników KPI oraz rekomendacji oszczędności i usprawnień procesów.",
  },
];

export default function LogisticsPagePL() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-16 relative overflow-hidden">
      {/* Animowane gradientowe akcenty */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
          bg-gradient-to-tr from-blue-200 via-purple-200 to-transparent 
          rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, 15, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-24 right-10 w-60 h-60 bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto bg-white/80 backdrop-blur p-8 md:p-16 rounded-2xl shadow-2xl ring-1 ring-blue-50">
        {/* Nagłówek */}
        <section className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-500 to-pink-600 bg-clip-text text-transparent"
          >
            Wsparcie logistyczne i koordynacja dostaw
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 my-5"
          >
            Sprawna logistyka, pełna widoczność i realne oszczędności 🚀
          </motion.p>
        </section>

        {/* Wstęp */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10"
        >
          H&M Synergy działa jako niezależny koordynator logistyki, pomagając
          firmom produkcyjnym organizować dostawy. Naszym celem jest obniżenie
          kosztów transportu, poprawa terminowości oraz zapewnienie pełnej
          zgodności z wymaganiami klienta i przepisami.
        </motion.p>

        {/* Siatka funkcji */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {points.map((point, i) => (
            <motion.li
              key={i}
              variants={item}
              whileHover={{
                scale: 1.06,
                y: -6,
                boxShadow: "0 8px 32px 0 rgba(99,102,241,0.1)",
              }}
              className="p-6 bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full p-4 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {point.label}
                </h3>
                <p className="text-sm text-gray-700 mt-1">{point.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Zakończenie */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mt-14 mb-12"
        >
          Nie posiadamy własnej floty — wszystkie płatności za transport
          odbywają się bezpośrednio między klientem a przewoźnikiem. H&M Synergy
          świadczy wyłącznie usługi koordynacji i zarządzania dostawami.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-center"
        >
          <Link
            href="/pl/contact"
            className="inline-flex items-center px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg
                       hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Skontaktuj się z nami <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
