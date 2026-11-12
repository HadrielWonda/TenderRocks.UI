'use client';

import { ExternalLink, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LABORATORY, PRIMARY_NAVIGATION, SITE } from '@/lib/site';
import Logo from './Logo';

const MOBILE_MENU_ID = 'site-mobile-menu';

function LaboratoryLink({ className }: { className: string }) {
  return (
    <a href={LABORATORY.url} className={className}>
      TRS Laboratory
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">(opens the laboratory website)</span>
    </a>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="container-page flex h-20 items-center justify-between gap-6 md:h-24">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${SITE.name} home`}>
          <Logo className="h-12 w-auto md:h-16" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {PRIMARY_NAVIGATION.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className="rounded-lg px-3.5 py-2.5 text-[0.95rem] font-medium text-slate-700 hover:bg-slate-100 hover:text-ink-900 aria-[current=page]:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <LaboratoryLink className="btn-primary hidden xl:inline-flex" />

        <button
          type="button"
          className="btn-secondary px-3 xl:hidden"
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
          <span>Menu</span>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id={MOBILE_MENU_ID}
          aria-label="Main"
          className="border-t border-slate-200 bg-white xl:hidden"
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {PRIMARY_NAVIGATION.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-slate-100 aria-[current=page]:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
            <LaboratoryLink className="btn-primary mt-3" />
          </div>
        </nav>
      )}
    </header>
  );
}
