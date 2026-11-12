import { Globe, Target } from 'lucide-react';
import type { Metadata } from 'next';
import LaboratoryCallout from '@/components/LaboratoryCallout';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About',
  description: 'The vision, mission, history and values of TenderRock Solutions.',
};

const JOURNEY = [
  {
    period: '2021',
    title: 'Founding',
    text: 'TRS began as a consulting and implementation support firm, focused on research, strategy and project advisory services.',
  },
  {
    period: 'COVID-19 era',
    title: 'Biomedical support',
    text: 'We expanded into biomedical support, collaborating with diagnostic laboratories and building our operational capacity.',
  },
  {
    period: '2025',
    title: 'Laboratory launch',
    text: 'TRS launched TRS Molecular Diagnostic Laboratory as a separate legal entity dedicated to advanced molecular and reproductive diagnostics.',
  },
] as const;

const VALUES = [
  { letter: 'S', word: 'Sustainability', text: 'Guides every project and decision.' },
  { letter: 'P', word: 'Partnership', text: 'We value collaboration and collective action.' },
  { letter: 'I', word: 'Integrity', text: 'We operate with transparency and strong ethics.' },
  { letter: 'C', word: 'Creativity', text: 'Innovation drives our approach.' },
  { letter: 'E', word: 'Excellence', text: 'We pursue excellence in service delivery.' },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Science and sustainability, applied"
        lead="Established in 2021, TenderRock Solutions (TRS) is an innovation-driven company working at the intersection of environmental management, applied life sciences and educational administration."
      />

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <article className="card p-8">
            <Globe className="h-8 w-8 text-brand-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl">Our vision</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              To be a leading force in advancing science, sustainability and capacity development,
              pioneering innovative solutions that drive measurable transformation in Africa and
              beyond.
            </p>
          </article>
          <article className="card p-8">
            <Target className="h-8 w-8 text-brand-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl">Our mission</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              To provide innovative, evidence-based solutions in environmental management, life
              sciences and molecular diagnostics, while nurturing emerging scientists and giving
              stakeholders the knowledge, tools and strategies for a sustainable, resilient and
              equitable future.
            </p>
          </article>
        </div>
      </section>

      <section className="section bg-slate-50" aria-labelledby="journey-heading">
        <div className="container-page">
          <p className="eyebrow">Our journey</p>
          <h2 id="journey-heading" className="mt-3 text-3xl sm:text-4xl">
            From advisory firm to laboratory
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {JOURNEY.map((step) => (
              <li key={step.title} className="border-t-2 border-brand-500 pt-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                  {step.period}
                </p>
                <h3 className="mt-2 text-xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="values-heading">
        <div className="container-page">
          <p className="eyebrow">Core values</p>
          <h2 id="values-heading" className="mt-3 text-3xl sm:text-4xl">
            SPICE
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((value) => (
              <li key={value.word} className="card">
                <span aria-hidden="true" className="text-4xl font-semibold text-brand-700">
                  {value.letter}
                </span>
                <h3 className="mt-3 text-lg">{value.word}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LaboratoryCallout />
    </>
  );
}
