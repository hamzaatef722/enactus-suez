import PageHero from "@/components/ui/PageHero";
import ProjectHero from "@/features/impact/ProjectHero";
import StorySection from "@/features/impact/StorySection";
import HowItWorks from "@/features/impact/HowItWorks";
import ImpactCards from "@/features/impact/ImpactCards";
import BusinessSection from "@/features/impact/BusinessSection";
import RoadmapSection from "@/features/impact/RoadmapSection";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return { title: getDictionary(locale).nav.impact };
}

export default async function ImpactPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale).impact;

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} copy={dict.copy} />
      <ProjectHero locale={locale} dict={dict} />
      <StorySection locale={locale} dict={dict} />
      <HowItWorks locale={locale} dict={dict} />
      <ImpactCards locale={locale} dict={dict} />
      <BusinessSection locale={locale} dict={dict} />
      <RoadmapSection locale={locale} dict={dict} />
    </>
  );
}
