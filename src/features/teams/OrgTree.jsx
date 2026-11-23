import Icon from "@/components/ui/Icon";
import team from "@/data/team.json";
import { fill, tr } from "@/lib/i18n";

function Person({ person, role, emptyLabel, large = false }) {
  const empty = !person.name;
  const size = large ? "size-[72px] text-xl" : "size-14 text-base";

  return (
    <div className="flex items-center gap-3 text-start lg:flex-col lg:text-center">
      <div
        className={`grid shrink-0 place-items-center rounded-full font-extrabold ${size} ${
          empty
            ? "border-2 border-dashed border-white/35 text-white/50"
            : "bg-gold text-[#101113] ring-2 ring-gold ring-offset-4 ring-offset-[#101113]"
        }`}
      >
        {empty ? <Icon name="plus" className="size-5" /> : person.initials}
      </div>
      <div className="min-w-0">
        <p className={`text-sm font-semibold ${empty ? "text-white/55" : ""}`}>{empty ? emptyLabel : person.name}</p>
        <small className="mt-0.5 block text-xs leading-5 text-[#a9aa9f]">{role}</small>
      </div>
    </div>
  );
}

export default function OrgTree({ locale, dict }) {
  const president = { ...team.president, name: tr(team.president.name, locale) };

  return (
    <section className="mt-14 rounded-3xl bg-[#101113] px-4 py-9 text-[#f5f4ed] sm:mt-20 sm:px-8 sm:py-12">
      <h2 className="mb-9 text-center text-2xl font-extrabold sm:text-3xl">{dict.orgTitle}</h2>

      <div className="org-top mb-6 flex flex-col items-center lg:mb-0">
        <Person person={president} role={dict.president} large />
      </div>

      <ul className="org-kids">
        {team.departments.map((d) => {
          const name = tr(d.name, locale);
          const head = { ...d.head, name: tr(d.head.name, locale) };
          const vice = { ...d.vice, name: d.vice.name ? tr(d.vice.name, locale) : null };
          return (
            <li key={d.id} className="org-col rounded-2xl bg-white/[0.06] p-4">
              <Person person={head} role={fill(dict.headRole, { team: name })} />
              <div className="org-vice mt-4 border-t border-white/10 pt-4 lg:border-0 lg:pt-0">
                <Person person={vice} role={fill(dict.viceRole, { team: name })} emptyLabel={dict.viceEmpty} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
