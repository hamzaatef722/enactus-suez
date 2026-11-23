import events from "@/data/events.json";

export const sortedEvents = [...events].sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);

export const pickUpcoming = (now) =>
  sortedEvents.find((event) => new Date(event.date).getTime() > now) ??
  sortedEvents[sortedEvents.length - 1];

export const splitParts = (ms) => ({
  d: Math.floor(ms / 864e5),
  h: Math.floor((ms % 864e5) / 36e5),
  m: Math.floor((ms % 36e5) / 6e4),
  s: Math.floor((ms % 6e4) / 1e3),
});

export const pad = (n) => String(n).padStart(2, "0");

export const formatDate = (iso, locale, options) =>
  new Intl.DateTimeFormat(locale === "ar" ? "ar-EG-u-nu-latn" : "en-GB", {
    timeZone: "Africa/Cairo",
    ...options,
  }).format(new Date(iso));
