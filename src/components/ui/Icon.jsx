const paths = {
  env: "M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10z",
  agri: "M5 19c0-8 5-14 14-14 0 9-6 14-14 14zM5 19c3-5 6-8 9-10",
  biz: "M4 8h16v11H4zM9 8V5h6v3",
  sea: "M3 15c3-3 6 3 9 0s6 3 9 0M3 10c3-3 6 3 9 0s6 3 9 0",
  bd: "M3 17l6-6 4 4 8-8M15 7h6v6",
  pm: "M4 6h16M4 12h10M4 18h6",
  mk: "M4 10v4h3l7 4V6L7 10H4zM17 9a4 4 0 0 1 0 6",
  hr: "M16 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM4 20c1-4 4-6 8-6s7 2 8 6",
  md: "M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4",
  lg: "M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7",
  ok: "M5 12l5 5 9-10",
  arrow: "M7 17L17 7M9 7h8v8",
  moon: "M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  plus: "M12 5v14M5 12h14",
  pin: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01",
  facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7",
};

export default function Icon({ name, className = "size-5", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}

export function Arrow({ className = "size-5" }) {
  return <Icon name="arrow" className={`${className} rtl:-scale-x-100`} strokeWidth={2} />;
}
