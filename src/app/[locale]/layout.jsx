import "@fontsource-variable/readex-pro";
import "../globals.css";
import Script from "next/script";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { dirOf, getDictionary, hasLocale, locales } from "@/lib/i18n";

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: { default: dict.meta.title, template: "%s | Enactus Suez" },
    description: dict.meta.description,
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5ef",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} dir={dirOf(locale)} suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-7">
          <Navbar locale={locale} dict={dict.nav} />
          <main>{children}</main>
          <Footer locale={locale} dict={dict.footer} nav={dict.nav} />
        </div>
      </body>
    </html>
  );
}
