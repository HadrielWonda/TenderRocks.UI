import type { Metadata } from 'next';
import Link from 'next/link';
import LaboratoryCallout from '@/components/LaboratoryCallout';
import PageHero from '@/components/PageHero';
import { ADVISORY_SERVICES, EDUCATION_SERVICES, type Service } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Consulting, advisory and capacity development services from TenderRock Solutions.',
};

function ServiceGrid({ services, columns }: { services: readonly Service[]; columns: string }) {
  return (
    <ul className={`mt-12 grid gap-6 ${columns}`}>
      {services.map((service) => (
        <li key={service.title} className="card p-8">
          <service.icon className="h-8 w-8 text-brand-700" aria-hidden="true" />
          <h3 className="mt-5 text-xl">{service.title}</h3>
          <p className="mt-2 leading-relaxed text-slate-600">{service.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Advisory and scientific services"
        lead="We deliver integrated advisory and scientific services that strengthen systems, advance innovation and support evidence-based decisions."
      >
        <Link href="/contact" className="btn-primary">
          Discuss a project
        </Link>
      </PageHero>

      <section className="section" aria-labelledby="advisory-heading">
        <div className="container-page">
          <p className="eyebrow">Consulting and advisory</p>
          <h2 id="advisory-heading" className="mt-3 text-3xl sm:text-4xl">
            What we advise on
          </h2>
          <ServiceGrid services={ADVISORY_SERVICES} columns="md:grid-cols-2" />
        </div>
      </section>

      <section className="section bg-slate-50" aria-labelledby="education-heading">
        <div className="container-page">
          <p className="eyebrow">Capacity development and education</p>
          <h2 id="education-heading" className="mt-3 text-3xl sm:text-4xl">
            How we develop people
          </h2>
          <ServiceGrid services={EDUCATION_SERVICES} columns="md:grid-cols-3" />
        </div>
      </section>

      <LaboratoryCallout />
    </>
  );
}
