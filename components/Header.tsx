"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  Briefcase,
  Code2,
  PhoneCall,
  PackageSearch,
} from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";
import type { Variants } from "framer-motion";

export default function Header() {
  const pathname = usePathname() ?? "/pl";
  const locale = pathname.startsWith("/en") ? "en" : "pl";
  const base = `/${locale}`;
  const shouldReduceMotion = useReducedMotion();
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const animatedIcon = (icon: React.ReactElement) => (
    <motion.span
      whileHover={{ rotate: 8, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-4 w-4 mr-2 inline-block"
    >
      {icon}
    </motion.span>
  );

  const dict = {
    pl: {
      brand: "H&M Synergy",
      nav: [
        {
          href: `${base}/logistics`,
          label: "Logistyka",
          icon: animatedIcon(<PackageSearch className="text-blue-600" />),
        },
        {
          href: `${base}/biznes`,
          label: "Biznes & Administracja",
          icon: animatedIcon(<Briefcase className="text-pink-600" />),
        },
        {
          href: `${base}/it`,
          label: "IT i Aplikacje Webowe",
          icon: animatedIcon(<Code2 className="text-purple-600" />),
        },
        {
          href: `${base}/contact`,
          label: "Kontakt",
          icon: animatedIcon(<PhoneCall className="text-indigo-600" />),
        },
      ],
      home: `${base}`,
      open: "Otwórz menu",
      close: "Zamknij menu",
    },
    en: {
      brand: "H&M Synergy",
      nav: [
        {
          href: `${base}/logistics`,
          label: "Logistics",
          icon: animatedIcon(<PackageSearch className="text-blue-600" />),
        },
        {
          href: `${base}/business`,
          label: "Business & Admin",
          icon: animatedIcon(<Briefcase className="text-pink-600" />),
        },
        {
          href: `${base}/it`,
          label: "IT & Web applications",
          icon: animatedIcon(<Code2 className="text-purple-600" />),
        },
        {
          href: `${base}/contact`,
          label: "Contact",
          icon: animatedIcon(<PhoneCall className="text-indigo-600" />),
        },
      ],
      home: `${base}`,
      open: "Open menu",
      close: "Close menu",
    },
  }[locale];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      toggleBtnRef.current?.focus();
    }
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !toggleBtnRef.current?.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navVariants: Variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: -10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      };

  const mobileMenuVariants: Variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        },
      };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-lg border-b border-blue-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={dict.home} className="flex items-center gap-3">
          <motion.span
            initial={
              shouldReduceMotion ? undefined : { scale: 0.9, opacity: 0 }
            }
            animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.6, ease: "easeOut" }
            }
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight"
          >
            {dict.brand}
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 text-base font-semibold"
          aria-label="Primary Navigation"
        >
          {dict.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <motion.div
                key={item.href}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.05, transition: { duration: 0.2 } }
                }
              >
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative px-4 py-2 rounded-full transition-all duration-300
                    ${
                      active
                        ? "text-blue-600 font-bold"
                        : "text-gray-700 hover:text-blue-600"
                    }
                    ${
                      active
                        ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-blue-600'
                        : ""
                    }
                  `}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="translate-y-[1px] ">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Language Switcher + Mobile Button */}
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <motion.button
            ref={toggleBtnRef}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full p-2"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={isMenuOpen ? dict.close : dict.open}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate="visible"
            exit={shouldReduceMotion ? undefined : "hidden"}
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100/50 z-40"
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {dict.nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={navVariants}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  className="w-full text-center"
                >
                  <Link
                    href={item.href}
                    className={`
                      block py-3 text-lg font-semibold flex items-center justify-center
                      ${isActive(item.href) ? "text-blue-600" : "text-gray-700"}
                      hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200
                    `}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="translate-y-[1x]">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
