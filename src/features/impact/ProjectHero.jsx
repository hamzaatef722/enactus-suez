import CountUp from "@/components/ui/CountUp";
import project from "@/data/project.json";
import { tr } from "@/lib/i18n";

function KitArt() {
  return (
    <svg
      viewBox="0 0 260 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <rect
        x="20"
        y="74"
        width="112"
        height="82"
        rx="12"
        fill="rgba(255,255,255,.35)"
      />
      <circle cx="52" cy="104" r="6" fill="currentColor" stroke="none" />
      <circle cx="76" cy="104" r="6" fill="currentColor" stroke="none" />
      <circle cx="100" cy="104" r="6" fill="currentColor" stroke="none" />
      <path d="M40 134h72" strokeDasharray="2 8" />
      <path d="M76 74V58M60 46a22 22 0 0 1 32 0M50 36a36 36 0 0 1 52 0" />
      <path d="M136 108c12-10 22-10 32 0" strokeDasharray="2 8" />
      <rect
        x="172"
        y="34"
        width="68"
        height="124"
        rx="14"
        fill="rgba(255,255,255,.35)"
      />
      <path d="M194 46h24" />
      <path
        d="M206 80c-9 0-13 7-13 16v9l-5 7h36l-5-7v-9c0-9-4-16-13-16zM200 120a6 6 0 0 0 12 0z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function ProjectHero({ locale, dict }) {
  return (
    <section className="page-enter pt-10">
      <div className="grid items-center gap-8 rounded-3xl bg-gold p-6 text-[#101113] sm:p-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
        <div>
          <p className="text-sm font-semibold">
            {tr(project.fullName, locale)}
          </p>
          <h2 className="mt-2 text-[clamp(3rem,12vw,7.5rem)] font-extrabold leading-none">
            {project.name}
          </h2>
          <p className="mt-4 max-w-md text-base leading-8">
            {tr(project.tagline, locale)}
          </p>
          <p className="mt-5 inline-flex rounded-full bg-black/10 px-4 py-1.5 text-sm font-semibold">
            <bdi>{tr(project.firstCustomer, locale)}</bdi>
          </p>
        </div>
        <div className="mx-auto w-full max-w-xs sm:max-w-sm">
          <KitArt />
        </div>
      </div>

      <h2 className="mb-3 mt-9 text-lg font-bold">{dict.numbersTitle}</h2>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {project.stats.map((s) => (
          <li
            key={s.label.en}
            className="rounded-2xl border border-line bg-panel p-4 sm:p-6"
          >
            <CountUp
              value={s.value}
              prefix={s.prefix}
              suffix={tr(s.suffix, locale)}
              className="block text-[clamp(1.5rem,5.6vw,2.5rem)] font-extrabold leading-none tabular-nums"
            />
            <span className="mt-2.5 block text-xs leading-5 text-muted sm:text-[13px]">
              {tr(s.label, locale)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
