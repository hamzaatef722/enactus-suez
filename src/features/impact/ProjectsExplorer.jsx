"use client";

import { useState } from "react";
import Icon, { Arrow } from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import projects from "@/data/projects.json";
import categories from "@/data/categories.json";
import { tr } from "@/lib/i18n";

export default function ProjectsExplorer({ locale, dict }) {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  const active = projects.find((p) => p.id === activeId);
  const chips = [{ id: "all", label: { ar: dict.all, en: dict.all } }, ...categories];

  return (
    <section className="page-enter pt-10">
      <div className="mb-6 flex flex-wrap gap-2" role="group">
        {chips.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
            className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${
              filter === c.id ? "border-ink bg-ink text-bg" : "border-line hover:border-ink"
            }`}
          >
            {tr(c.label, locale)}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            style={{ animationDelay: `${i * 70}ms` }}
            className="page-enter group flex flex-col overflow-hidden rounded-3xl border border-line bg-panel text-start transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <div
              className="relative grid h-40 place-items-center overflow-hidden text-[#101113]"
              style={{ background: p.color }}
            >
              <span className="absolute -top-16 size-56 rounded-full bg-white/30 transition duration-500 [inset-inline-end:-3.5rem] group-hover:scale-125" />
              <span className="absolute start-3.5 top-3.5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold">
                {tr(categories.find((c) => c.id === p.category)?.label, locale)}
              </span>
              <Icon
                name={p.icon}
                strokeWidth={1.5}
                className="relative size-16 transition duration-300 group-hover:-rotate-6 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-xl font-extrabold">{p.name}</h3>
              <p className="text-[13px] leading-7 text-muted">{tr(p.summary, locale)}</p>
              <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                <div>
                  <b className="text-xl font-extrabold">{p.results[0].value}</b>
                  <span className="ms-1.5 text-xs text-muted">{tr(p.results[0].label, locale)}</span>
                </div>
                <i className="grid size-9 place-items-center rounded-full bg-pale transition-colors group-hover:bg-gold">
                  <Arrow className="size-4" />
                </i>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-5 grid items-center gap-5 rounded-3xl bg-gold p-6 text-[#101113] sm:p-9 md:grid-cols-[1.2fr_.8fr] md:gap-8">
        <h2 className="text-[clamp(1.6rem,3.6vw,2.9rem)] font-extrabold">{dict.missionTitle}</h2>
        <p className="text-[15px] leading-8">{dict.missionCopy}</p>
      </div>

      <Modal open={Boolean(active)} onClose={() => setActiveId(null)} label={active?.name}>
        {active && (
          <article>
            <div className="relative grid h-36 place-items-center text-[#101113]" style={{ background: active.color }}>
              <Icon name={active.icon} strokeWidth={1.5} className="size-16" />
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label={dict.close}
                className="absolute end-3.5 top-3.5 grid size-11 place-items-center rounded-full bg-white/90 text-[#101113]"
              >
                <Icon name="close" className="size-5" />
              </button>
            </div>
            <div className="p-5 sm:p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-pale px-3 py-1 text-xs font-semibold">
                <i className="size-1.5 rounded-full bg-green-500" />
                {tr(active.status, locale)}
              </span>
              <h2 className="mb-4 mt-3 text-3xl font-extrabold">{active.name}</h2>
              <h4 className="mb-1 mt-5 text-sm font-semibold">{dict.challenge}</h4>
              <p className="text-sm leading-8 text-muted">{tr(active.challenge, locale)}</p>
              <h4 className="mb-1 mt-5 text-sm font-semibold">{dict.solution}</h4>
              <p className="text-sm leading-8 text-muted">{tr(active.solution, locale)}</p>
              <h4 className="mb-2 mt-6 text-sm font-semibold">{dict.results}</h4>
              <div className="grid grid-cols-3 gap-2.5">
                {active.results.map((r) => (
                  <div key={r.value + r.label.en} className="rounded-2xl border border-line bg-bg p-3 text-center">
                    <b className="block text-xl font-extrabold leading-none sm:text-2xl" dir="ltr">{r.value}</b>
                    <span className="mt-2 block text-[11px] leading-4 text-muted sm:text-xs">{tr(r.label, locale)}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        )}
      </Modal>
    </section>
  );
}
