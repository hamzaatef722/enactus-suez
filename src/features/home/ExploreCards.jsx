import Link from "next/link";
import { Arrow } from "@/components/ui/Icon";
import { EventsArt, ImpactArt, TeamsArt } from "./Illustrations";

const cards = [
  { key: "teams", path: "/teams", Art: TeamsArt, tone: "bg-ink text-bg border-transparent [--accent:var(--gold)]", go: "bg-bg text-ink", wrap: "" },
  { key: "impact", path: "/impact", Art: ImpactArt, tone: "bg-panel text-ink border-line [--accent:var(--gold)]", go: "bg-gold text-[#101113]", wrap: "" },
  { key: "events", path: "/events", Art: EventsArt, tone: "bg-gold text-[#101113] border-transparent [--accent:#101113]", go: "bg-[#101113] text-white", wrap: "sm:col-span-2 lg:col-span-1" },
];

export default function ExploreCards({ locale, dict }) {
  return (
    <section className="mt-16 sm:mt-24">
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold">{dict.title}</h2>
        <p className="max-w-sm text-sm leading-7 text-muted">{dict.sub}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ key, path, Art, tone, go, wrap }) => (
          <Link
            key={key}
            href={`/${locale}${path}`}
            className={`group relative flex min-h-72 flex-col overflow-hidden rounded-3xl border p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-6 ${tone} ${wrap}`}
          >
            <div className="mb-5 flex h-32 items-center justify-center sm:h-36">
              <div className="h-full w-auto opacity-90 transition duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Art />
              </div>
            </div>
            <h3 className="text-2xl font-extrabold">{dict[key].title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-7 opacity-80">{dict[key].desc}</p>
            <span className={`mt-5 grid size-11 place-items-center rounded-full transition duration-300 group-hover:scale-110 ${go}`}>
              <Arrow />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
