import Icon from "@/components/ui/Icon";
import team from "@/data/team.json";
import { tr } from "@/lib/i18n";

const committees = [team.programs, ...team.departments];

export default function TeamGrid({ locale }) {
  return (
    <section className="page-enter grid gap-3.5 pt-10 sm:grid-cols-2 lg:grid-cols-3">
      {committees.map((c) => (
        <article
          key={c.id}
          className="group flex min-h-48 flex-col rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-bg"
        >
          <span className="grid size-11 place-items-center rounded-xl bg-pale text-ink transition-colors group-hover:bg-gold group-hover:text-[#101113]">
            <Icon name={c.icon} className="size-[22px]" />
          </span>
          <h3 className="mt-auto pt-7 text-xl font-extrabold">
            {tr(c.name, locale)}
          </h3>
          <p className="mt-2 text-sm leading-7 text-muted transition-colors group-hover:text-bg/80">
            {tr(c.description, locale)}
          </p>
        </article>
      ))}
    </section>
  );
}
