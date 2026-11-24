import Icon from "@/components/ui/Icon";
import team from "@/data/team.json";
import { fill, tr } from "@/lib/i18n";

const sizes = {
  lg: "size-[72px] text-xl",
  md: "size-16 text-lg",
  sm: "size-14 text-base",
};

function Person({ name, initials, role, emptyLabel, size = "sm" }) {
  const empty = !name;

  return (
    <div className="flex items-center gap-3 text-start lg:flex-col lg:text-center">
      <div
        className={`grid shrink-0 place-items-center rounded-full font-extrabold ${sizes[size]} ${
          empty
            ? "border-2 border-dashed border-white/35 text-white/50"
            : "bg-gold text-[#101113] ring-2 ring-gold ring-offset-4 ring-offset-[#101113]"
        }`}
      >
        {empty ? <Icon name="plus" className="size-5" /> : initials}
      </div>
      <div className="min-w-0">
        <p className={`text-sm font-semibold ${empty ? "text-white/55" : ""}`}>
          {empty ? emptyLabel : name}
        </p>
        <small className="mt-0.5 block text-xs leading-5 text-[#a9aa9f]">
          {role}
        </small>
      </div>
    </div>
  );
}

export default function OrgTree({ locale, dict }) {
  const view = (p) => ({
    name: p.name ? tr(p.name, locale) : null,
    initials: p.initials,
    role: tr(p.role, locale),
  });

  return (
    <section className="mt-14 rounded-3xl bg-[#101113] px-4 py-9 text-[#f5f4ed] sm:mt-20 sm:px-8 sm:py-12">
      <h2 className="mb-9 text-center text-2xl font-extrabold sm:text-3xl">
        {dict.orgTitle}
      </h2>

      <div className="org-top mb-5 flex flex-col items-center lg:mb-0">
        <Person {...view(team.president)} size="lg" />
      </div>
      <div className="org-top mb-6 flex flex-col items-center lg:mb-0">
        <Person {...view(team.vicePresident)} size="md" />
      </div>

      <ul className="org-kids">
        <li className="org-col rounded-2xl bg-white/[0.06] p-4">
          <p className="mb-4 text-center text-sm font-bold text-gold">
            {tr(team.programs.name, locale)}
          </p>
          <div className="space-y-4 border-t border-white/10 pt-4">
            {team.programs.managers.map((m) => (
              <Person key={m.role.en} {...view(m)} />
            ))}
          </div>
        </li>

        {team.departments.map((d) => {
          const deptName = tr(d.name, locale);
          return (
            <li key={d.id} className="org-col rounded-2xl bg-white/[0.06] p-4">
              <Person {...view(d.head)} />
              <div className="org-vice mt-4 space-y-4 border-t border-white/10 pt-4 lg:border-0 lg:pt-0">
                {d.vices.length > 0 ? (
                  d.vices.map((v) => <Person key={v.name.en} {...view(v)} />)
                ) : (
                  <Person
                    name={null}
                    initials={null}
                    role={fill(dict.viceRole, { team: deptName })}
                    emptyLabel={dict.viceEmpty}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
