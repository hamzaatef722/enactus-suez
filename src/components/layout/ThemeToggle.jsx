"use client";

import Icon from "@/components/ui/Icon";

export default function ThemeToggle({ label }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={toggle}
      className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:bg-pale"
    >
      <Icon name="moon" className="size-[18px]" />
    </button>
  );
}
