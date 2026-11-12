import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { SITE } from '@/lib/site';
import {
  BUSINESS_DEVELOPMENT_TEAM,
  EXPERT_PANEL,
  MANAGEMENT_TEAM,
  type TeamMember,
} from '@/lib/team';

export const metadata: Metadata = {
  title: 'Team',
  description: 'The management team and panel of experts behind TenderRock Solutions.',
};

function TeamSection({
  id,
  heading,
  members,
}: {
  id: string;
  heading: string;
  members: readonly TeamMember[];
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-3xl">
        {heading}
      </h2>
      <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member) => (
          <li key={member.name}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}`}
                fill
                sizes="(min-width: 1280px) 17rem, (min-width: 640px) 45vw, 90vw"
                className="object-cover object-top"
              />
            </div>
            <h3 className="mt-5 text-lg">{member.name}</h3>
            <p className="mt-1 font-medium text-brand-700">{member.headline}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{member.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Scientists, clinicians and educators"
        lead="TenderRock is powered by professionals with expertise in environmental and life sciences, educational administration, policy analysis and capacity building."
      />

      <div className="container-page section space-y-24">
        <TeamSection id="management-heading" heading="Management team" members={MANAGEMENT_TEAM} />
        <TeamSection id="experts-heading" heading="Panel of experts" members={EXPERT_PANEL} />
        <TeamSection
          id="business-heading"
          heading="Business development"
          members={BUSINESS_DEVELOPMENT_TEAM}
        />

        <section className="card bg-brand-50 p-8 sm:p-10">
          <h2 className="text-2xl">Join our network</h2>
          <p className="mt-3 max-w-prose leading-relaxed text-slate-700">
            We are always looking for talented scientists, researchers and sustainability experts to
            collaborate with.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent('Joining the TRS network')}`}
            className="btn-primary mt-6"
          >
            Express interest
          </a>
        </section>
      </div>
    </>
  );
}
