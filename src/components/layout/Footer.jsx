import Link from "next/link";
import Logo from "./Logo";
import Icon from "@/components/ui/Icon";
import social from "@/data/social.json";

export default function Footer({ locale, dict, nav }) {
  const year = new Date().getFullYear();
  const links = [
    { label: nav.home, href: `/${locale}` },
    { label: nav.impact, href: `/${locale}/impact` },
    { label: nav.teams, href: `/${locale}/teams` },
    { label: nav.events, href: `/${locale}/events` },
  ];

  return (
    <footer className="mt-20 border-t border-line py-10 sm:mt-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <Logo className="h-10 w-auto text-ink" />
          <p className="max-w-xs text-sm leading-7 text-muted">{nav.season}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-1.5 text-muted transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div>
          <p className="mb-3 text-sm font-medium">{dict.follow}</p>
          <ul className="flex gap-2">
            {social.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target={s.id === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-gold hover:bg-gold hover:text-[#101113]"
                >
                  <Icon name={s.id} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-8 text-xs text-muted">
        © {year} Enactus Suez. {dict.rights}
      </p>
    </footer>
  );
}
