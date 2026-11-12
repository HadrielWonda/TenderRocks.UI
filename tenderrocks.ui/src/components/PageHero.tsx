interface PageHeroProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly children?: React.ReactNode;
}

/** The roomy heading band at the top of every inner page. */
export default function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-brand-50">
      <div className="container-page py-16 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="lead mt-6 max-w-prose">{lead}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
