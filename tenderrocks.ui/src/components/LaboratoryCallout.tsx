import { ExternalLink, Microscope } from 'lucide-react';
import { LABORATORY } from '@/lib/site';

/** Points visitors to the laboratory, which is a separate company with its own website. */
export default function LaboratoryCallout() {
  return (
    <section className="bg-brand-900">
      <div className="container-page flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-5">
          <Microscope
            className="hidden h-12 w-12 shrink-0 text-brand-200 sm:block"
            aria-hidden="true"
          />
          <div>
            <h2 className="text-3xl text-white">{LABORATORY.name}</h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-brand-100">
              Our sister company provides molecular, genetic and reproductive diagnostics in
              Ikorodu, Lagos. Tests, prices and booking are on the laboratory&apos;s own website.
            </p>
          </div>
        </div>
        <a href={LABORATORY.url} className="btn-on-dark shrink-0">
          Visit the laboratory website
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
