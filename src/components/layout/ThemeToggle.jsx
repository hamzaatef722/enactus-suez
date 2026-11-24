"use client";

import Icon from "@/components/ui/Icon";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ label }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={theme === "dark"}
      onClick={toggle}
      className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:bg-pale"
    >
      <Icon name="moon" className="size-[18px]" />
    </button>
  );
}
