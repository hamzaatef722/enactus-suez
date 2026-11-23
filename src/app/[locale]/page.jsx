import Hero from "@/features/home/Hero";
import Stats from "@/features/home/Stats";
import ExploreCards from "@/features/home/ExploreCards";
import { getDictionary } from "@/lib/i18n";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="page-enter">
      <Hero locale={locale} dict={dict.hero} next={dict.next} />
      <Stats locale={locale} note={dict.stats.note} />
      <ExploreCards locale={locale} dict={dict.explore} />
    </div>
  );
}
