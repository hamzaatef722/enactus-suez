"use client";

import { useEffect, useRef, useState } from "react";
import stats from "@/data/stats.json";
import { tr } from "@/lib/i18n";

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - start) / 1100);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <b ref={ref} className="block text-3xl font-extrabold leading-none tabular-nums sm:text-4xl" dir="ltr">
      {n}
      {suffix}
    </b>
  );
}

export default function Stats({ locale, note }) {
  return (
    <section className="grid grid-cols-3 overflow-hidden rounded-2xl border border-line bg-panel md:grid-cols-[repeat(3,1fr)_1.6fr]">
      {stats.map((s) => (
        <div key={s.id} className="border-s border-line p-4 first:border-s-0 sm:p-6">
          <CountUp value={s.value} suffix={s.suffix} />
          <span className="mt-2 block text-xs leading-5 text-muted sm:text-[13px]">{tr(s.label, locale)}</span>
        </div>
      ))}
      <p className="col-span-3 flex items-center border-t border-line bg-pale p-4 text-sm leading-7 text-ink sm:px-6 md:col-span-1 md:border-s md:border-t-0">
        {note}
      </p>
    </section>
  );
}
