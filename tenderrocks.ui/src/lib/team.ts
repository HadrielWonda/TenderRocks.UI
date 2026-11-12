export interface TeamMember {
  readonly name: string;
  /** The line under the name: a job title or a field of expertise. */
  readonly headline: string;
  readonly detail: string;
  readonly image: string;
}

export const MANAGEMENT_TEAM: readonly TeamMember[] = [
  {
    name: 'Dr. Adetokunbo Soyoye (PhD)',
    headline: 'Chief Executive Officer',
    detail: 'Environmental management, molecular genetics and reproductive science',
    image: '/images/team/adetokunbo-soyoye.PNG',
  },
  {
    name: 'Dr. Aderinola Adedokun (PhD)',
    headline: 'Director of Operations',
    detail: 'Environmental biology and bioremediation',
    image: '/images/team/aderinola-adedokun.jpg',
  },
  {
    name: 'Dr. Leke Daramola (MD)',
    headline: 'Growth and Strategy Director',
    detail: 'Fertility medicine and reproductive health education (Fertilopedia)',
    image: '/images/team/leke-daramola.jpg',
  },
];

export const EXPERT_PANEL: readonly TeamMember[] = [
  {
    name: 'Dr. Richard Adéwọlé (PhD)',
    headline: 'Cell and molecular biology',
    detail: 'Business Development Researcher at Cancer Research UK (CancerTools.org)',
    image: '/images/team/RichardAdewole.jpeg',
  },
  {
    name: 'Dr. Titilayo Soyoye (PhD)',
    headline: 'Machine learning, data analysis and artificial intelligence',
    detail: 'Researcher at the University of Huddersfield, England, and Lecturer at Study Group',
    image: '/images/team/titilayo-soyoye.jpeg',
  },
  {
    name: 'Dr. Temitope Fadipe (PhD)',
    headline: 'Molecular genetics and industrial biotechnology',
    detail:
      'Principal Research Officer at the Federal Institute of Industrial Research, Oshodi (FIIRO). Currently a postdoctoral researcher at the Spanish National Centre for Biotechnology (CNB-CSIC) through the Science by Women programme.',
    image: '/images/team/temitope-fadipe.jpeg',
  },
  {
    name: 'Dr. John Ojeogwu (PhD)',
    headline: 'STEM education and AI applications',
    detail: 'Postdoctoral Researcher at the Desert Research Institute, USA',
    image: '/images/team/john-ojeogwu.jpg',
  },
  {
    name: 'Dr. Rachael Akinyede (PhD)',
    headline: 'Climate change and greenhouse gas monitoring',
    detail: 'Scientific Coordinator at ITMS, Germany',
    image: '/images/team/rachael-akinyede.jpg',
  },
  {
    name: 'Dr. Oluwatosin Adesile (PhD)',
    headline: 'Mass communication, public relations, advertising and AI',
    detail: 'Senior Lecturer of Mass Communication at NOUN and Elizade University',
    image: '/images/team/oluwatosin-adesile.jpeg',
  },
  {
    name: 'Dr. Victoria Orovboni (PhD)',
    headline: 'Molecular genetics and cancer research',
    detail: 'Business Development Researcher at Cancer Research UK (CancerTools.org)',
    image: '/images/team/victoria-orovboni.jpeg',
  },
];

export const BUSINESS_DEVELOPMENT_TEAM: readonly TeamMember[] = [
  {
    name: 'Tolut Prince Bako',
    headline: 'Business Relationship Manager',
    detail: 'Deloitte Technology, Canada',
    image: '/images/team/TolutBako.jpeg',
  },
];
