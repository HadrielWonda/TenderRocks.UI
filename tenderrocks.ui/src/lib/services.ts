import {
  FlaskConical,
  GraduationCap,
  Leaf,
  Megaphone,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
}

export const ADVISORY_SERVICES: readonly Service[] = [
  {
    title: 'Environmental management',
    description: 'Strategic guidance and implementation for sustainable environmental practices.',
    icon: Leaf,
  },
  {
    title: 'Life sciences research',
    description: 'Applied research in biotechnology, molecular genetics and environmental biology.',
    icon: FlaskConical,
  },
  {
    title: 'Sustainability advisory',
    description: 'Evidence-based solutions for the sustainable development goals.',
    icon: Target,
  },
  {
    title: 'Capacity development',
    description: 'Mentorship, training and educational programmes for emerging scientists.',
    icon: Users,
  },
];

export const EDUCATION_SERVICES: readonly Service[] = [
  {
    title: 'Mentorship',
    description: 'Guidance for students and early-career professionals.',
    icon: Users,
  },
  {
    title: 'Workshops',
    description: 'Training programmes in molecular techniques and research.',
    icon: GraduationCap,
  },
  {
    title: 'Public engagement',
    description: 'Science education for broad audiences.',
    icon: Megaphone,
  },
];
