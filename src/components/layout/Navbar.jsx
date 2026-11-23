"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Icon from "@/components/ui/Icon";
import { otherLocale } from "@/lib/i18n";

const links = [
  { key: "home", path: "" },
  { key: "impact", path: "/impact" },
  { key: "teams", path: "/teams" },
  { key: "events", path: "/events" },
];

export default function Navbar({ locale, dict }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const other = otherLocale(locale);
  const switchHref = pathname.replace(/^\/(ar|en)/, `/${other}`);

  return (
    <header className="sticky top-3 z-40 pt-3">
      <div className="relative flex h-16 items-center gap-3 rounded-2xl border border-line bg-panel/90 px-3 backdrop-blur-md sm:px-5">
        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center gap-3"
          aria-label="Enactus Suez"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-9 w-auto text-ink" />
          <span className="hidden border-s border-line ps-3 text-[11px] leading-snug text-muted xl:block">
            {dict.season}
          </span>
        </Link>

        <nav
          aria-label="Main"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-[calc(100%+8px)] flex-col gap-1 rounded-2xl border border-line bg-panel p-2 shadow-lift md:static md:mx-auto md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map(({ key, path }) => {
            const href = `/${locale}${path}`;
            const active = path === "" ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-3 text-[15px] font-medium transition-colors md:py-2 md:text-sm ${
                  active ? "bg-ink text-bg" : "text-muted hover:bg-pale hover:text-ink"
                }`}
              >
                {dict[key]}
              </Link>
            );
          })}
        </nav>

        <div className="ms-auto flex items-center gap-2 md:ms-0">
          <ThemeToggle label={dict.theme} />
          <Link
            href={switchHref}
            hrefLang={other}
            aria-label={dict.language}
            className="grid h-10 min-w-11 place-items-center rounded-full border border-line px-3 text-[13px] font-bold transition-colors hover:bg-pale"
          >
            {other.toUpperCase()}
          </Link>
          <button
            type="button"
            aria-label={dict.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-[18px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
