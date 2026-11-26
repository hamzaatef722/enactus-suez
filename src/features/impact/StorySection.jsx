import CountUp from "@/components/ui/CountUp";
import project from "@/data/project.json";
import { tr } from "@/lib/i18n";

export default function StorySection({ locale, dict }) {
  const { problem, spoilage } = project;
  const bars = [
    { label: dict.before, value: spoilage.before, color: "#f4a98a" },
    { label: dict.after, value: spoilage.after, color: "#9bd38a" },
  ];

  return (
    <section className="mt-14 grid gap-4 sm:mt-20 lg:grid-cols-[1.25fr_.75fr]">
      <div className="rounded-3xl border border-line bg-panel p-6 sm:p-9">
        <h2 className="text-2xl font-extrabold sm:text-4xl">
          {dict.problemTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-8 text-muted">
          {tr(problem.intro, locale)}
        </p>
        <ul className="mt-6 grid gap-3">
          {problem.causes.map((c, i) => (
            <li
              key={c.title.en}
              className="flex items-start gap-4 rounded-2xl bg-bg p-4"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold text-sm font-extrabold text-[#101113]">
                {i + 1}
              </span>
              <div className="min-w-0">
                <b className="block text-[15px]">{tr(c.title, locale)}</b>
                <p className="mt-1 text-sm leading-7 text-muted">
                  {tr(c.effect, locale)}
                </p>
                <p className="mt-2 text-[13px] leading-6">
                  <span className="font-semibold">{dict.responseLabel}: </span>
                  {tr(c.response, locale)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-between gap-8 rounded-3xl bg-[#101113] p-6 text-[#f5f4ed] sm:p-9">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            {dict.spoilageTitle}
          </h2>
          <div className="mt-6 grid gap-5">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
                  <span>{b.label}</span>
                  <b className="text-lg" dir="ltr">
                    {b.value}%
                  </b>
                </div>
                <div className="h-4 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(b.value / spoilage.scale) * 100}%`,
                      background: b.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-7 text-[#c9cabf]">
            {tr(spoilage.note, locale)}
          </p>
        </div>
        <div>
          <CountUp
            value={spoilage.reduction}
            prefix="~"
            suffix="%"
            className="block text-5xl font-extrabold leading-none tabular-nums text-gold sm:text-6xl"
          />
          <span className="mt-2 block text-sm text-[#c9cabf]">
            {dict.reduction}
          </span>
        </div>
      </div>
    </section>
  );
}
