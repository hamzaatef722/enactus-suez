import PageHero from "@/components/ui/PageHero";
import TeamGrid from "@/features/teams/TeamGrid";
import OrgTree from "@/features/teams/OrgTree";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return { title: getDictionary(locale).nav.teams };
}

export default async function TeamsPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale).teams;

  return (
    <>
      <PageHero eyebrow={dict.eyebrow} title={dict.title} copy={dict.copy} />
      <TeamGrid locale={locale} />
      <OrgTree locale={locale} dict={dict} />
    </>
  );
}
