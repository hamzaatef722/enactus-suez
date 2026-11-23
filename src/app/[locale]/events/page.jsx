import PageHero from "@/components/ui/PageHero";
import EventsView from "@/features/events/EventsView";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return { title: getDictionary(locale).nav.events };
}

export default async function EventsPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale).events;

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} copy={dict.copy} />
      <EventsView locale={locale} dict={dict} />
    </>
  );
}
