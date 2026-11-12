export const SITE = {
  name: 'TenderRock Solutions',
  tagline: 'Science. Sustainability. Solutions.',
  description:
    'An innovation-driven science and sustainability company working across environmental management, applied life sciences and educational administration.',
  url: 'https://tenderrocksolutions.com',
  email: 'tenderrocksolutions@gmail.com',
  phoneDisplay: '+234 813 368 6115',
  phoneHref: 'tel:+2348133686115',
  address: 'Lagos, Nigeria',
} as const;

/** TRS Molecular Diagnostic Laboratory is a separate company with its own website. */
export const LABORATORY = {
  name: 'TRS Molecular Diagnostic Laboratory',
  url: 'https://trs.tenderrocksolutions.com',
} as const;

export interface NavigationLink {
  readonly label: string;
  readonly href: string;
}

export const PRIMARY_NAVIGATION: readonly NavigationLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Blog', href: '/blog' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/tenderrock-solutions/' },
  { name: 'Instagram', href: 'https://www.instagram.com/tenderrock_solutions/' },
  { name: 'X', href: 'https://x.com/TRS_Solutions' },
  { name: 'Facebook', href: 'https://www.facebook.com/tenderrocksolutions' },
] as const;

export type SocialNetwork = (typeof SOCIAL_LINKS)[number]['name'];
