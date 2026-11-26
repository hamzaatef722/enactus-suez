import CountUp from "@/components/ui/CountUp";
import project from "@/data/project.json";
import { tr } from "@/lib/i18n";

const money =
  "text-[1.9rem] font-extrabold leading-none tabular-nums sm:text-4xl";

export default function BusinessSection({ locale, dict }) {
  const { business, plan } = project;
  const rows = [
    { label: dict.revenue, value: business.revenue },
    { label: dict.cogs, value: business.cogs },
    { label: dict.profit, value: business.profit },
  ];

  return (
    <section className="mt-14 sm:mt-20">
      <h2 className="mb-6 text-2xl font-extrabold sm:text-4xl">
        {dict.businessTitle}
      </h2>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-3xl border border-line bg-panel p-6 sm:p-9">
          <h3 className="text-sm font-semibold text-muted">
            {dict.breakdownTitle}
          </h3>
          <CountUp
            value={business.revenue}
            suffix={dict.currency}
            className={`mt-2 block ${money}`}
          />
          <div
            className="mt-6 flex h-5 gap-0.5 overflow-hidden rounded-full"
            role="img"
            aria-label={dict.breakdownTitle}
          >
            {business.streams.map((s) => (
              <div
                key={s.id}
                className="min-w-1"
                style={{ flex: `${s.value} 0 0`, background: s.color }}
              />
            ))}
          </div>
          <ul className="mt-5 grid gap-3">
            {business.streams.map((s) => (
              <li key={s.id} className="flex items-center gap-3 text-sm">
                <i
                  className="size-3 shrink-0 rounded-full"
                  style={{ background: s.color }}
                />
                <span className="flex-1">{tr(s.label, locale)}</span>
                <b dir="ltr" className="tabular-nums">
                  {s.value.toLocaleString("en-US")}
                </b>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-[13px] leading-7 text-muted">
            {business.kits} {dict.kitsSold} · {dict.price}{" "}
            {business.price.toLocaleString("en-US")}
            {dict.currency}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-3xl bg-[#101113] p-6 text-[#f5f4ed] sm:p-9">
          <div className="grid gap-5">
            {rows.map((r) => (
              <div key={r.label}>
                <CountUp
                  value={r.value}
                  suffix={dict.currency}
                  className="block text-3xl font-extrabold leading-none tabular-nums"
                />
                <span className="mt-1.5 block text-sm text-[#c9cabf]">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
          <div>
            <CountUp
              value={business.margin}
              suffix="%"
              className="block text-5xl font-extrabold leading-none tabular-nums text-gold sm:text-6xl"
            />
            <span className="mt-2 block text-sm text-[#c9cabf]">
              {dict.margin}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-3xl bg-gold p-6 text-[#101113] sm:p-9">
        <h3 className="text-xl font-extrabold sm:text-2xl">{dict.yearTitle}</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <CountUp
              value={plan.kits}
              className="block text-4xl font-extrabold leading-none tabular-nums sm:text-5xl"
            />
            <span className="mt-2 block text-sm">{dict.yearKits}</span>
          </div>
          <div>
            <CountUp
              value={plan.revenue}
              suffix={dict.currency}
              className="block text-3xl font-extrabold leading-none tabular-nums sm:text-4xl"
            />
            <span className="mt-2 block text-sm">{dict.yearRevenue}</span>
          </div>
          <div>
            <CountUp
              value={plan.margin}
              decimals={1}
              suffix="%"
              className="block text-4xl font-extrabold leading-none tabular-nums sm:text-5xl"
            />
            <span className="mt-2 block text-sm">{dict.yearMargin}</span>
          </div>
        </div>
        <p className="mt-6 text-[13px] font-medium">{dict.projection}</p>
      </div>
    </section>
  );
}
