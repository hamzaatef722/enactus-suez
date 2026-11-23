import Headline from "./Headline";

export default function PageHero({ eyebrow, title, copy }) {
  return (
    <header className="page-enter border-b border-line pb-10 pt-12 sm:pb-12 sm:pt-16">
      <p className="flex items-center gap-2.5 text-sm font-medium text-muted">
        <span className="size-2.5 rounded-full bg-gold" />
        {eyebrow}
      </p>
      <Headline
        parts={title}
        className="mt-4 max-w-3xl text-[clamp(2.25rem,6.5vw,4.75rem)] font-extrabold leading-[1.05]"
      />
      <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted">{copy}</p>
    </header>
  );
}
