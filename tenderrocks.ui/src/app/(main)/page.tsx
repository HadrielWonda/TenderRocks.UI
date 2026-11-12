import { ArrowRight, FlaskConical, GraduationCap, Leaf } from 'lucide-react';
import Link from 'next/link';
import LaboratoryCallout from '@/components/LaboratoryCallout';
import { ADVISORY_SERVICES } from '@/lib/services';

const PRINCIPLES = [
  {
    icon: FlaskConical,
    title: 'Scientific rigour',
    text: 'Evidence-based approaches to complex challenges.',
  },
  {
    icon: Leaf,
    title: 'Sustainability first',
    text: 'It guides every project and every decision.',
  },
  {
    icon: GraduationCap,
    title: 'Capacity building',
    text: 'Developing the next generation of scientists.',
  },
] as const;

const FACTS = [
  { value: '2021', label: 'Founded' },
  { value: '3', label: 'Fields: environment, life sciences, education' },
  { value: '2025', label: 'Laboratory launched' },
] as const;

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-brand-50">
      {/* A quiet grid drawn in CSS, so the hero needs no photograph to feel finished. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#d9edfc_1px,transparent_1px),linear-gradient(to_bottom,#d9edfc_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:linear-gradient(to_bottom,white,transparent)]"
      />
      <div className="container-page py-24 sm:py-32 lg:py-40">
        <p className="eyebrow">Established 2021, Lagos</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.05] sm:text-7xl">
          Science. Sustainability. <span className="text-brand-700">Solutions.</span>
        </h1>
        <p className="lead mt-8 max-w-2xl text-xl">
          An innovation-driven company working where environmental management, applied life sciences
          and educational administration meet.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/services" className="btn-primary">
            See what we do
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get in touch
          </Link>
        </div>
        <dl className="mt-20 grid gap-8 border-t border-brand-200 pt-10 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="text-sm text-slate-600">{fact.label}</dt>
              <dd className="mt-1 text-4xl font-semibold tracking-tight text-ink-900">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="section" aria-labelledby="principles-heading">
      <div className="container-page">
        <p className="eyebrow">How we work</p>
        <h2 id="principles-heading" className="mt-3 max-w-2xl text-3xl sm:text-4xl">
          Three commitments behind every engagement
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="border-t-2 border-brand-500 pt-6">
              <principle.icon className="h-8 w-8 text-brand-700" aria-hidden="true" />
              <h3 className="mt-5 text-xl">{principle.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{principle.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section bg-slate-50" aria-labelledby="expertise-heading">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Our expertise</p>
            <h2 id="expertise-heading" className="mt-3 text-3xl sm:text-4xl">
              Consulting and advisory
            </h2>
          </div>
          <Link href="/services" className="btn-secondary">
            All services
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVISORY_SERVICES.map((service) => (
            <li key={service.title} className="card">
              <service.icon className="h-7 w-7 text-brand-700" aria-hidden="true" />
              <h3 className="mt-4 text-lg">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Principles />
      <Expertise />
      <LaboratoryCallout />
    </>
  );
}
