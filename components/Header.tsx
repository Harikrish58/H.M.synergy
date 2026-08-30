"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname() ?? "/pl";
  const locale = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/ua")
      ? "ua"
      : "pl";
  const base = `/${locale}`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const dict = {
    pl: {
      brand: "H&M SYNERGY",

      nav: [
        {
          href: `${base}`,
          label: "Strona główna",
        },
        {
          href: `${base}/services`,
          label: "Usługi",
        },
        {
          href: `${base}/employees`,
          label: "Dla pracowników",
        },
        {
          href: `${base}/employers`,
          label: "Dla pracodawców",
        },
        {
          href: `${base}/jobs`,
          label: "Oferty pracy",
        },
        {
          href: `${base}/about`,
          label: "O nas",
        },
        {
          href: `${base}/contact`,
          label: "Kontakt",
        },
      ],

      home: `${base}`,
      open: "Otwórz menu",
      close: "Zamknij menu",
    },

    en: {
      brand: "H&M SYNERGY",

      nav: [
        {
          href: `${base}`,
          label: "Home",
        },
        {
          href: `${base}/services`,
          label: "Services",
        },
        {
          href: `${base}/employees`,
          label: "For Employees",
        },
        {
          href: `${base}/employers`,
          label: "For Employers",
        },
        {
          href: `${base}/jobs`,
          label: "Jobs",
        },
        {
          href: `${base}/about`,
          label: "About",
        },
        {
          href: `${base}/contact`,
          label: "Contact",
        },
      ],

      home: `${base}`,
      open: "Open menu",
      close: "Close menu",
    },

    ua: {
      brand: "H&M SYNERGY",

      nav: [
        {
          href: `${base}`,
          label: "Головна",
        },
        {
          href: `${base}/services`,
          label: "Послуги",
        },
        {
          href: `${base}/employees`,
          label: "Для працівників",
        },
        {
          href: `${base}/employers`,
          label: "Для роботодавців",
        },
        {
          href: `${base}/jobs`,
          label: "Вакансії",
        },
        {
          href: `${base}/about`,
          label: "Про нас",
        },
        {
          href: `${base}/contact`,
          label: "Контакти",
        },
      ],

      home: `${base}`,
      open: "Відкрити меню",
      close: "Закрити меню",
    },
  }[locale];

  const isActive = (href: string) => {
    if (href === base) {
      return pathname === base || pathname === `${base}/`;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  // Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) return;

      const target = event.target as Node;

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !toggleBtnRef.current?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E7ED] bg-white">
      {/* Main Header */}
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={dict.home}
          aria-label={dict.brand}
          className="group flex shrink-0 items-center"
        >
          <Image
            src="/logo.png"
            alt="H&M Synergy"
            width={180}
            height={52}
            priority
            className="h-[66px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center lg:flex"
          aria-label="Primary Navigation"
        >
          <div className="flex items-center gap-[30px] xl:gap-[34px]">
            {dict.nav.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative whitespace-nowrap py-3
                    text-[14px] font-medium
                    transition-colors duration-200
                    ${
                      active
                        ? "text-[#123B63]"
                        : "text-[#394656] hover:text-[#123B63]"
                    }

                    after:absolute
                    after:bottom-[2px]
                    after:left-0
                    after:h-[2px]
                    after:bg-[#123B63]
                    after:transition-all
                    after:duration-200

                    ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? dict.close : dict.open}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="
              rounded-md p-2
              text-[#263445]
              transition-colors
              hover:bg-[#F4F6F8]
              hover:text-[#123B63]
              focus:outline-none
              focus:ring-2
              focus:ring-[#123B63]/30
              lg:hidden
            "
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.8} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="
            absolute left-0 top-full
            w-full
            border-b border-[#E2E7ED]
            bg-white
            shadow-[0_8px_24px_rgba(15,35,55,0.06)]
            lg:hidden
          "
        >
          <nav
            className="mx-auto max-w-[1280px] px-6 py-4"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col">
              {dict.nav.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`
                    relative
  border-b border-[#EDF0F3]
  px-4 py-4
  text-[15px] font-medium
  transition-all duration-200
  last:border-b-0

  ${
    active
      ? "bg-[#EAF3FA] font-semibold text-[#123B63]"
      : "text-[#394656] hover:bg-[#F7F9FB] hover:text-[#123B63]"
  }

  ${
    active
      ? "border-l-[3px] border-l-[#123B63]"
      : "border-l-[3px] border-l-transparent"
  }
`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
