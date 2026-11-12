import type { Metadata } from 'next';
import InDevelopment from '@/components/InDevelopment';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Education',
  description: 'Training programmes, workshops and resources from TenderRock Solutions.',
};

const TOPICS = [
  'Training programmes and workshops',
  'Online courses',
  'Resources for students and early-career scientists',
  'Material for professionals in environmental science and molecular diagnostics',
] as const;

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Training the next generation of scientists"
        lead="Our educational platform will bring our training programmes, workshops and learning resources together in one place."
      />
      <InDevelopment topics={TOPICS} />
    </>
  );
}
