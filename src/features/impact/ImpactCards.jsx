"use client";

import { useState } from "react";
import Icon, { Arrow } from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import project from "@/data/project.json";
import { tr } from "@/lib/i18n";

export default function ImpactCards({ locale, dict }) {
  const [activeId, setActiveId] = useState(null);
  const active = project.impactAreas.find((a) => a.id === activeId);

  return (
    <section className="mt-14 sm:mt-20">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="text-2xl font-extrabold sm:text-4xl">
          {dict.impactTitle}
        </h2>
        <p className="text-sm text-muted">{dict.impactHint}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {project.impactAreas.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setActiveId(a.id)}
            className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-panel text-start transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <div
              className="relative grid h-36 place-items-center overflow-hidden text-[#101113] sm:h-44"
              style={{ background: a.color }}
            >
              <span className="absolute -top-16 size-56 rounded-full bg-white/30 transition duration-500 [inset-inline-end:-3.5rem] group-hover:scale-125" />
              <Icon
                name={a.icon}
                strokeWidth={1.5}
                className="relative size-16 transition duration-300 group-hover:-rotate-6 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
              <h3 className="text-2xl font-extrabold">{tr(a.title, locale)}</h3>
              <p className="text-sm leading-7 text-muted">
                {tr(a.summary, locale)}
              </p>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
                <div>
                  <b className="block text-xl font-extrabold" dir="ltr">
                    {a.metrics[0].value}
                  </b>
                  <span className="text-xs text-muted">
                    {tr(a.metrics[0].label, locale)}
                  </span>
                </div>
                <i className="grid size-10 shrink-0 place-items-center rounded-full bg-pale transition-colors group-hover:bg-gold">
                  <Arrow className="size-4" />
                </i>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Modal
        open={Boolean(active)}
        onClose={() => setActiveId(null)}
        label={active ? tr(active.title, locale) : ""}
      >
        {active && (
          <article>
            <div
              className="relative grid h-36 place-items-center text-[#101113]"
              style={{ background: active.color }}
            >
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
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                {tr(active.title, locale)}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {active.metrics.map((m) => (
                  <div
                    key={m.label.en}
                    className="rounded-2xl border border-line bg-bg p-3 text-center"
                  >
                    <b
                      className="block text-xl font-extrabold leading-none sm:text-2xl"
                      dir="ltr"
                    >
                      {m.value}
                    </b>
                    <span className="mt-2 block text-[11px] leading-4 text-muted sm:text-xs">
                      {tr(m.label, locale)}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="mb-1 mt-6 text-sm font-semibold">
                {dict.changed}
              </h4>
              <p className="text-sm leading-8 text-muted">
                {tr(active.changed, locale)}
              </p>
              <h4 className="mb-1 mt-5 text-sm font-semibold">
                {dict.evidence}
              </h4>
              <p className="text-sm leading-8 text-muted">
                {tr(active.evidence, locale)}
              </p>
            </div>
          </article>
        )}
      </Modal>
    </section>
  );
}
