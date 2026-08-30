"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* Robust locale swap:
   handles /, /pl, /en, /ua, nested paths, trailing slashes */
function swapLocale(path: string, to: "pl" | "en" | "ua") {
  const clean = (path || "/").split("?")[0];
  const parts = clean.split("/").filter(Boolean);

  if (parts[0] === "pl" || parts[0] === "en" || parts[0] === "ua") {
    parts[0] = to;
  } else {
    parts.unshift(to);
  }

  return "/" + parts.join("/");
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";

  const active: "pl" | "en" | "ua" = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/ua")
      ? "ua"
      : "pl";

  const reduce = useReducedMotion();

  return (
    <div
      className="
        relative inline-flex items-center
        rounded-full
        bg-gray-100
        p-1
        shadow-inner
        ring-1 ring-gray-200/70
      "
      role="tablist"
      aria-label="Language"
    >
      {/* Animated active background */}
      <motion.span
        layout
        layoutId="lang-thumb"
        transition={
          reduce
            ? undefined
            : {
                type: "spring",
                stiffness: 500,
                damping: 40,
              }
        }
        className={`
          absolute
          inset-y-1
          rounded-full
          bg-white
          shadow-sm
          ring-1 ring-gray-200

          ${
            active === "pl"
              ? "left-1 right-2/3"
              : active === "en"
                ? "left-1/3 right-1/3"
                : "left-2/3 right-1"
          }
        `}
        aria-hidden="true"
      />

      {/* ================= POLISH ================= */}
      <Link
        role="tab"
        aria-selected={active === "pl"}
        href={swapLocale(pathname, "pl")}
        aria-label="Polski"
        className={`
          relative z-10
          flex items-center justify-center
          gap-1.5
          px-3 py-1.5
          text-sm font-semibold
          transition-colors
          md:px-4

          ${
            active === "pl"
              ? "text-blue-700"
              : "text-gray-700 hover:text-blue-700"
          }
        `}
      >
        <span
          className="fi fi-pl h-[13px] w-[19px] rounded-[2px]"
          aria-hidden="true"
        />

        <span className="tracking-wide [letter-spacing:.04em]">
          PL
        </span>
      </Link>

      {/* ================= ENGLISH ================= */}
      <Link
        role="tab"
        aria-selected={active === "en"}
        href={swapLocale(pathname, "en")}
        aria-label="English"
        className={`
          relative z-10
          flex items-center justify-center
          gap-1.5
          px-3 py-1.5
          text-sm font-semibold
          transition-colors
          md:px-4

          ${
            active === "en"
              ? "text-blue-700"
              : "text-gray-700 hover:text-blue-700"
          }
        `}
      >
        <span
          className="fi fi-gb h-[13px] w-[19px] rounded-[2px]"
          aria-hidden="true"
        />

        <span className="tracking-wide [letter-spacing:.04em]">
          EN
        </span>
      </Link>

      {/* ================= UKRAINIAN ================= */}
      <Link
        role="tab"
        aria-selected={active === "ua"}
        href={swapLocale(pathname, "ua")}
        aria-label="Українська"
        className={`
          relative z-10
          flex items-center justify-center
          gap-1.5
          px-3 py-1.5
          text-sm font-semibold
          transition-colors
          md:px-4

          ${
            active === "ua"
              ? "text-blue-700"
              : "text-gray-700 hover:text-blue-700"
          }
        `}
      >
        <span
          className="fi fi-ua h-[13px] w-[19px] rounded-[2px]"
          aria-hidden="true"
        />

        <span className="tracking-wide [letter-spacing:.04em]">
          UA
        </span>
      </Link>
    </div>
  );
}