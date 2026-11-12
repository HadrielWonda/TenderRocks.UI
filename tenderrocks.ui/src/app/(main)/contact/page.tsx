import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import SocialIcon from '@/components/SocialIcon';
import { SITE, SOCIAL_LINKS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Phone, email and social media for TenderRock Solutions.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us talk"
        lead="For partnerships, enquiries or to learn more about our services, reach us by phone or email."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Contact details</h2>
            <ul className="mt-8 space-y-7">
              <li className="flex gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-brand-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-900">Phone</p>
                  <a href={SITE.phoneHref} className="link">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-brand-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-900">Email</p>
                  <a href={`mailto:${SITE.email}`} className="link break-all">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-900">Address</p>
                  <p>{SITE.address}</p>
                </div>
              </li>
            </ul>

            <h2 className="mt-12 text-2xl">Follow us</h2>
            <ul className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE.name} on ${social.name}`}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-300 text-slate-700 hover:border-brand-700 hover:text-brand-700"
                  >
                    <SocialIcon network={social.name} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
