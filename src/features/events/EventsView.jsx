"use client";

import { useState } from "react";
import Icon, { Arrow } from "@/components/ui/Icon";
import Countdown from "./Countdown";
import useNow from "@/hooks/useNow";
import { tr } from "@/lib/i18n";
import { formatDate, pickUpcoming, sortedEvents } from "@/lib/events";

const RESERVE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdAe2GhWU4JlaLt6HSFz3V2mPmyAlSkXDl3rQOrEfOReLmdmA/viewform";

export default function EventsView({ locale, dict }) {
  const now = useNow();
  const [chosen, setChosen] = useState(null);

  const fallback = now === null ? sortedEvents[0] : pickUpcoming(now);
  const event = sortedEvents.find((e) => e.id === chosen) ?? fallback;
  const ended = (e) => now !== null && new Date(e.date).getTime() < now;
  const longDate = (iso) =>
    formatDate(iso, locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  const time = (iso) =>
    formatDate(iso, locale, { hour: "2-digit", minute: "2-digit" });

  return (
    <section className="page-enter">
      <div className="grid items-center gap-10 pt-10 lg:grid-cols-2 lg:gap-14 lg:pt-14">
        <Countdown date={event.date} labels={dict} />

        <div>
          <span className="inline-flex rounded-full bg-pale px-3 py-1 text-xs font-semibold">
            {tr(event.type, locale)}
          </span>
          <h2 className="mt-3 text-[clamp(1.9rem,4.4vw,3.5rem)] font-extrabold">
            {tr(event.title, locale)}
          </h2>
          <p className="mt-3 text-[15px] leading-8 text-muted">
            {tr(event.summary, locale)}
          </p>

          <ul className="mt-5 grid gap-2.5 text-sm">
            <li className="flex items-start gap-3">
              <Icon
                name="clock"
                className="mt-0.5 size-5 shrink-0 text-muted"
              />
              <span>
                {longDate(event.date)} ·{" "}
                <span dir="ltr">{time(event.date)}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 size-5 shrink-0 text-muted" />
              <span>{tr(event.location, locale)}</span>
            </li>
          </ul>

          <h3 className="mb-1 mt-8 text-base font-bold">{dict.agenda}</h3>
          <p className="mb-3 text-[13px] text-muted">{dict.agendaHint}</p>
          <div className="border-t border-line">
            {event.agenda.map((item) => (
              <details
                key={item.time + item.title.en}
                className="group border-b border-line py-4"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <time
                    dir="ltr"
                    className="w-14 shrink-0 text-start text-[13px] font-medium text-muted"
                  >
                    {item.time}
                  </time>
                  <span className="text-[15px]">{tr(item.title, locale)}</span>
                  <span className="ms-auto grid size-8 shrink-0 place-items-center rounded-full border border-line transition duration-300 group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-[#101113]">
                    <Icon name="plus" className="size-4" />
                  </span>
                </summary>
                <p className="page-enter mt-3 ps-[4.5rem] text-sm leading-7 text-muted">
                  {tr(item.description, locale)}
                </p>
              </details>
            ))}
          </div>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={ended(event)}
            tabIndex={ended(event) ? -1 : 0}
            className={`mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-ink px-6 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-lift sm:w-auto ${
              ended(event) ? "pointer-events-none opacity-40" : ""
            }`}
          >
            {dict.reserve}
            <Arrow className="size-[18px]" />
          </a>
        </div>
      </div>

      <div className="mt-16 sm:mt-24">
        <h2 className="mb-5 text-2xl font-extrabold sm:text-3xl">{dict.all}</h2>
        <ul className="grid gap-3 md:grid-cols-3">
          {sortedEvents.map((e) => {
            const selected = e.id === event.id;
            return (
              <li key={e.id}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setChosen(e.id)}
                  className={`flex h-full w-full flex-col gap-2 rounded-2xl border p-5 text-start transition duration-300 hover:-translate-y-1 ${
                    selected
                      ? "border-ink bg-ink text-bg"
                      : "border-line bg-panel hover:border-ink"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${selected ? "text-bg/70" : "text-muted"}`}
                  >
                    {formatDate(e.date, locale, {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    {ended(e) && ` · ${dict.ended}`}
                  </span>
                  <b className="text-lg font-extrabold">
                    {tr(e.title, locale)}
                  </b>
                  <span
                    className={`text-[13px] leading-6 ${selected ? "text-bg/75" : "text-muted"}`}
                  >
                    {tr(e.location, locale)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
