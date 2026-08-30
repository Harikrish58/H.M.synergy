"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/jobs/injection-machine-operator-1.png",
    alt: "Injection molding machine in a manufacturing facility",
  },
  {
    src: "/jobs/injection-machine-operator-2.png",
    alt: "Industrial production line",
  },
  {
    src: "/jobs/injection-machine-operator-3.png",
    alt: "Manufacturing worker operating industrial machinery",
  },
];

export default function JobImageCarousel() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const next = () => {
    setActive((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative overflow-hidden bg-[#0E2942]">
      {/* Main image */}
      <div className="relative aspect-video w-full">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          priority={active === 0}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-contain"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Counter */}
        <div className="absolute right-5 top-5 bg-[#0E2942]/85 px-3 py-2 text-xs font-semibold text-white">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* Previous */}
        <button
          type="button"
          onClick={previous}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/95 text-[#0E2942] transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#159A86]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/95 text-[#0E2942] transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#159A86]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-1 bg-[#0E2942] p-1">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className={`relative aspect-[16/8] overflow-hidden bg-[#0E2942] ${
              active === index
                ? "ring-2 ring-inset ring-[#159A86]"
                : "opacity-75 hover:opacity-100"
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 768px) 33vw, 420px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
