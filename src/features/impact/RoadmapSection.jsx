import project from "@/data/project.json";
import { tr } from "@/lib/i18n";

export default function RoadmapSection({ locale, dict }) {
  return (
    <section className="mt-14 sm:mt-20">
      <h2 className="mb-6 text-2xl font-extrabold sm:text-4xl">
        {dict.roadmapTitle}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {project.roadmap.map((r) => (
          <li
            key={r.title.en}
            className="rounded-2xl border border-line bg-panel p-5 sm:p-6"
          >
            <b className="block text-base font-extrabold">
              {tr(r.title, locale)}
            </b>
            <span className="mt-2 block text-sm leading-7 text-muted">
              {tr(r.text, locale)}
            </span>
          </li>
        ))}
      </ul>

      <h3 className="mb-4 mt-10 text-lg font-bold">{dict.timelineTitle}</h3>
      <ol className="relative grid gap-5 border-s-2 border-line ps-6">
        {project.timeline.map((t) => (
          <li key={t.title.en} className="relative">
            <i className="absolute top-1.5 size-3.5 rounded-full bg-gold ring-4 ring-bg [inset-inline-start:calc(-1.5rem-8px)]" />
            <span className="block text-[13px] font-semibold text-muted">
              {tr(t.date, locale)}
            </span>
            <b className="mt-0.5 block text-[15px] font-bold leading-7">
              {tr(t.title, locale)}
            </b>
          </li>
        ))}
      </ol>

      <h3 className="mb-3 mt-10 text-lg font-bold">{dict.sdgTitle}</h3>
      <ul className="flex flex-wrap gap-2">
        {project.sdgs.map((n) => (
          <li
            key={n}
            className="grid h-11 min-w-16 place-items-center rounded-full bg-pale px-4 text-sm font-bold"
            dir="ltr"
          >
            SDG {n}
          </li>
        ))}
      </ul>
    </section>
  );
}
