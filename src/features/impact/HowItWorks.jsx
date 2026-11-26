import project from "@/data/project.json";
import { tr } from "@/lib/i18n";

export default function HowItWorks({ locale, dict }) {
  return (
    <section className="mt-14 sm:mt-20">
      <h2 className="mb-6 text-2xl font-extrabold sm:text-4xl">
        {dict.howTitle}
      </h2>

      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {project.steps.map((s, i) => (
          <li
            key={s.process.en}
            className="flex flex-col gap-3 rounded-3xl border border-line bg-panel p-5 sm:p-6"
          >
            <span className="grid size-10 place-items-center rounded-full bg-gold text-base font-extrabold text-[#101113]">
              {i + 1}
            </span>
            <p className="text-[15px] font-semibold leading-7">
              {tr(s.process, locale)}
            </p>
            <p className="mt-auto border-t border-line pt-3 text-sm leading-7 text-muted">
              {tr(s.outcome, locale)}
            </p>
          </li>
        ))}
      </ol>

      <h3 className="mb-3 mt-10 text-lg font-bold">{dict.componentsTitle}</h3>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {project.components.map((c) => (
          <li key={c.title.en} className="rounded-2xl bg-pale p-5">
            <b className="block text-base font-extrabold">
              {tr(c.title, locale)}
            </b>
            <span className="mt-1 block text-[13px] leading-6 text-muted">
              {tr(c.text, locale)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
