"use client";

import { useRef } from "react";
import Link from "next/link";
import Headline from "@/components/ui/Headline";
import { Arrow } from "@/components/ui/Icon";
import NextEventCard from "./NextEventCard";

function Origami({ className }) {
  return (
    <svg viewBox="0 0 43 44" aria-hidden="true" className={`origami ${className}`}>
      <polygon points="15,0 42,26 17,28" fill="#e0a920" />
      <polygon points="15,0 17,28 7,25" fill="#f2c844" />
      <polygon points="0,28 7,25 17,28 15,43" fill="#c8941a" />
    </svg>
  );
}

export default function Hero({ locale, dict, next }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(2));
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(2));
  };

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative isolate grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-14 lg:py-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <Origami className="origami-1" />
        <Origami className="origami-2" />
      </div>

      <div>
        <p className="flex items-center gap-2.5 text-sm font-medium text-muted">
          <span className="dot-live size-2.5 rounded-full bg-gold" />
          {dict.eyebrow}
        </p>
        <Headline
          parts={dict.title}
          className="mb-5 mt-4 max-w-3xl text-[clamp(2.2rem,6.2vw,4.6rem)] font-extrabold leading-[1.08]"
        />
        <p className="max-w-xl text-base leading-8 text-muted">{dict.copy}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}/impact`}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl bg-ink px-6 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            {dict.primary}
            <Arrow className="size-[18px]" />
          </Link>
          <Link
            href={`/${locale}/events`}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-line px-6 text-sm font-semibold transition hover:border-ink"
          >
            {dict.secondary}
          </Link>
        </div>
      </div>

      <NextEventCard locale={locale} dict={next} />
    </section>
  );
}
