import type { Metadata } from 'next';
import InDevelopment from '@/components/InDevelopment';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Research blog',
  description:
    'Research publications, scientific insights and case studies from TenderRock Solutions.',
};

const TOPICS = [
  'Peer-reviewed publications from our team',
  'Scientific insights explained for a wider audience',
  'Case studies from our advisory work',
  'Developments in environmental and life sciences',
] as const;

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Research blog"
        title="Research and insight, shared openly"
        lead="We are preparing a blog for our research, the thinking behind it and what we learn from our projects."
      />
      <InDevelopment topics={TOPICS} />
    </>
  );
}
