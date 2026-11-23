const base = {
  viewBox: "0 0 160 110",
  className: "h-full w-auto",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function TeamsArt() {
  return (
    <svg {...base}>
      <path d="M80 28v14M30 56h100M30 56v12M80 42v26M130 56v12" />
      <circle cx="80" cy="16" r="12" fill="var(--accent)" stroke="none" />
      <circle cx="30" cy="80" r="12" />
      <circle cx="80" cy="80" r="12" />
      <circle cx="130" cy="80" r="12" />
      <path d="M22 104h16M72 104h16M122 104h16" opacity=".5" />
    </svg>
  );
}

export function ImpactArt() {
  return (
    <svg {...base}>
      <rect x="26" y="68" width="26" height="34" rx="7" />
      <rect x="66" y="48" width="26" height="54" rx="7" />
      <rect x="106" y="26" width="26" height="76" rx="7" />
      <path d="M10 104h140" opacity=".5" />
      <path d="M119 20c-14 0-20-9-20-20 14 0 20 9 20 20z" fill="var(--accent)" stroke="none" transform="translate(0 4)" />
    </svg>
  );
}

export function EventsArt() {
  return (
    <svg {...base}>
      <rect x="22" y="20" width="116" height="82" rx="14" />
      <path d="M22 44h116M52 10v18M108 10v18" />
      <circle cx="52" cy="62" r="4" fill="currentColor" stroke="none" opacity=".5" />
      <circle cx="80" cy="62" r="4" fill="currentColor" stroke="none" opacity=".5" />
      <circle cx="108" cy="62" r="9" fill="var(--accent)" stroke="none" />
      <circle cx="52" cy="84" r="4" fill="currentColor" stroke="none" opacity=".5" />
      <circle cx="80" cy="84" r="4" fill="currentColor" stroke="none" opacity=".5" />
    </svg>
  );
}
