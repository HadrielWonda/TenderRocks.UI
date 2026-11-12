import {
  Building2,
  Cpu,
  ExternalLink,
  Microscope,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { LABORATORY } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Partnerships',
  description: 'The organisations TenderRock Solutions works with, and how to become a partner.',
};

interface Partner {
  readonly name: string;
  readonly kind: string;
  readonly description: string;
  readonly icon: LucideIcon;
  readonly url?: string;
}

const PARTNERS: readonly Partner[] = [
  {
    name: 'Aris',
    kind: 'Corporate partner',
    description:
      'A strategic partner in advancing healthcare and diagnostic solutions across Nigeria.',
    icon: Building2,
  },
  {
    name: 'Green Leaf Clinic',
    kind: 'Clinical partner',
    description:
      'Collaboration in fertility medicine and reproductive health education, improving clinical outcomes.',
    icon: Stethoscope,
  },
  {
    name: 'Afren AI',
    kind: 'Technology partner',
    description: 'Joint research that brings artificial intelligence to genomic data analysis.',
    icon: Cpu,
  },
  {
    name: LABORATORY.name,
    kind: 'Sister company',
    description:
      'Our dedicated molecular diagnostics company, working alongside us on advanced testing and capacity building.',
    icon: Microscope,
    url: LABORATORY.url,
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="We do our best work with others"
        lead="TenderRock Solutions collaborates with governments, private institutions, health facilities and academic organisations to deliver solutions that last."
      />

      <section className="section" aria-labelledby="partners-heading">
        <div className="container-page">
          <h2 id="partners-heading" className="text-3xl">
            Key partners
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {PARTNERS.map((partner) => (
              <li key={partner.name} className="card p-8">
                <partner.icon className="h-8 w-8 text-brand-700" aria-hidden="true" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-slate-600">
                  {partner.kind}
                </p>
                <h3 className="mt-1 text-xl">{partner.name}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{partner.description}</p>
                {partner.url && (
                  <a href={partner.url} className="link mt-4 inline-flex items-center gap-1.5">
                    Visit the laboratory website
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink-950">
        <div className="container-page flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl text-white">Become a partner</h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate-300">
              Partner with us for interdisciplinary expertise, advanced diagnostics and a growing
              pipeline of African scientific talent.
            </p>
          </div>
          <Link href="/contact" className="btn-on-dark shrink-0">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
