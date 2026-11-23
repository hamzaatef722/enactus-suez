"use client";

import useNow from "@/hooks/useNow";
import { pad, splitParts } from "@/lib/events";

const SPAN = 30 * 864e5;
const CIRCUMFERENCE = 553;

export default function Countdown({ date, labels }) {
  const now = useNow();
  const remaining = now === null ? SPAN : Math.max(0, new Date(date).getTime() - now);
  const parts = now === null ? { d: 0, h: 0, m: 0, s: 0 } : splitParts(remaining);
  const progress = 1 - Math.min(1, remaining / SPAN);
  const done = now !== null && remaining === 0;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <svg viewBox="0 0 200 200" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="100" cy="100" r="88" fill="none" strokeWidth="10" className="stroke-line" />
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          className="stroke-gold"
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: CIRCUMFERENCE * (1 - progress),
            transition: "stroke-dashoffset 1s linear",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-center">
        {done ? (
          <b className="px-8 text-2xl font-extrabold">{labels.started}</b>
        ) : (
          <>
            <b className="text-[clamp(4rem,18vw,6.5rem)] font-extrabold leading-none tabular-nums" dir="ltr">
              {pad(parts.d)}
            </b>
            <span className="text-[13px] font-medium text-muted">{labels.daysLeft}</span>
            <div className="mt-3 flex gap-2">
              {[
                ["h", labels.hours],
                ["m", labels.minutes],
                ["s", labels.seconds],
              ].map(([key, label]) => (
                <div key={key} className="min-w-14 rounded-xl border border-line bg-panel px-2.5 py-2">
                  <b className="block text-xl font-extrabold leading-tight tabular-nums">{pad(parts[key])}</b>
                  <small className="text-[11px] text-muted">{label}</small>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
