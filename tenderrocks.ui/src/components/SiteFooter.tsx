import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { LABORATORY, PRIMARY_NAVIGATION, SITE, SOCIAL_LINKS } from '@/lib/site';
import SocialIcon from './SocialIcon';

export default function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-slate-300">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">{SITE.name}</p>
          <p className="leading-relaxed">{SITE.tagline}</p>
          <ul className="flex gap-2 pt-2">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} on ${social.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  <SocialIcon network={social.name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h2>
          <ul className="mt-4 space-y-3">
            {PRIMARY_NAVIGATION.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Laboratory</h2>
          <p className="mt-4 leading-relaxed">
            Molecular and reproductive diagnostics are provided by our sister company.
          </p>
          <a
            href={LABORATORY.url}
            className="mt-3 inline-flex items-center gap-2 font-medium text-white hover:underline"
          >
            {LABORATORY.name}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <a href={SITE.phoneHref} className="hover:text-white hover:underline">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${SITE.email}`}
                className="break-all hover:text-white hover:underline"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-6 text-sm">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
