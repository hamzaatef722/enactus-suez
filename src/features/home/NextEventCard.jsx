"use client";

import Link from "next/link";
import { Arrow } from "@/components/ui/Icon";
import useNow from "@/hooks/useNow";
import { tr } from "@/lib/i18n";
import { formatDate, pad, pickUpcoming, sortedEvents, splitParts } from "@/lib/events";

export default function NextEventCard({ locale, dict }) {
  const now = useNow();
  const event = now === null ? sortedEvents[0] : pickUpcoming(now);
  const parts =
    now === null
      ? { d: 0, h: 0, m: 0 }
      : splitParts(Math.max(0, new Date(event.date).getTime() - now));

  const units = [
    { key: "d", label: dict.days },
    { key: "h", label: dict.hours },
    { key: "m", label: dict.minutes },
  ];

  return (
    <aside className="rounded-3xl border border-line bg-panel p-4 shadow-lift sm:p-5">
      <div className="flex items-center justify-between text-[13px] font-medium text-muted">
        <span>{dict.label}</span>
        <span className="flex items-center gap-2 font-semibold text-ink">
          <i className="dot-live size-2 rounded-full bg-green-500" />
          {dict.live}
        </span>
      </div>

      <div className="mt-4 flex min-h-64 flex-col gap-5 rounded-2xl bg-gold p-5 text-[#101113] sm:p-6">
        <span className="text-[13px] font-semibold">
          {formatDate(event.date, locale, { day: "numeric", month: "long", year: "numeric" })}
        </span>
        <h3 className="max-w-[16rem] text-2xl font-extrabold">{tr(event.title, locale)}</h3>
        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="flex gap-2">
            {units.map(({ key, label }) => (
              <div key={key} className="min-w-14 rounded-xl bg-black/10 px-3 py-2 text-center">
                <b className="block text-xl font-extrabold leading-none tabular-nums">{pad(parts[key])}</b>
                <span className="text-[11px] font-medium">{label}</span>
              </div>
            ))}
          </div>
          <Link
            href={`/${locale}/events`}
            aria-label={dict.open}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-[#101113] text-white transition hover:-rotate-12 hover:scale-110"
          >
            <Arrow />
          </Link>
        </div>
      </div>
    </aside>
  );
}
