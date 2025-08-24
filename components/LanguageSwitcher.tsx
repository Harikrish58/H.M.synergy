"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* robust locale swap: handles /, /pl, /en, nested paths, trailing slashes */
function swapLocale(path: string, to: "pl" | "en") {
  const clean = (path || "/").split("?")[0];
  const parts = clean.split("/").filter(Boolean); // ["pl","contact"] | []
  if (parts[0] === "pl" || parts[0] === "en") parts[0] = to;
  else parts.unshift(to);
  return "/" + parts.join("/");
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const active: "pl" | "en" = pathname.startsWith("/en") ? "en" : "pl";
  const reduce = useReducedMotion();

  return (
    <div
      className="relative inline-flex items-center rounded-full bg-gray-100 p-1 shadow-inner ring-1 ring-gray-200/70"
      role="tablist"
      aria-label="Language"
    >
      {/* animated thumb (snaps left/right) */}
      <motion.span
        layout
        layoutId="lang-thumb"
        transition={
          reduce ? undefined : { type: "spring", stiffness: 500, damping: 40 }
        }
        className={`absolute inset-y-1 rounded-full bg-white shadow-sm ring-1 ring-gray-200
                    ${active === "pl" ? "left-1 right-1/2" : "left-1/2 right-1"}`}
        aria-hidden
      />

      {/* PL */}
      <Link
        role="tab"
        aria-selected={active === "pl"}
        href={swapLocale(pathname, "pl")}
        className={`relative z-10 px-3 md:px-4 py-1.5 text-sm font-semibold transition-colors
                    ${active === "pl" ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
      >
        <span className="tracking-wide [letter-spacing:.04em]">PL</span>
      </Link>

      {/* EN */}
      <Link
        role="tab"
        aria-selected={active === "en"}
        href={swapLocale(pathname, "en")}
        className={`relative z-10 px-3 md:px-4 py-1.5 text-sm font-semibold transition-colors
                    ${active === "en" ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
      >
        <span className="tracking-wide [letter-spacing:.04em]">EN</span>
      </Link>
    </div>
  );
}
