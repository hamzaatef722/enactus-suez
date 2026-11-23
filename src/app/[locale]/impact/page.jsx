import PageHero from "@/components/ui/PageHero";
import ProjectsExplorer from "@/features/impact/ProjectsExplorer";
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
      <ProjectsExplorer locale={locale} dict={dict} />
    </>
  );
}
