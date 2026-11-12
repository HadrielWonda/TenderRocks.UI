import { SITE } from '@/lib/site';

// The TenderRock logo redrawn as vector artwork from the original 98-pixel bitmap, so it stays
// sharp at any size. The mark is the blue "T" bar over a charcoal stem; the lettering uses the
// site's own typeface at its heaviest weight. Replace this with the designer's source file if
// one becomes available.
const BLUE = '#0985db';
const CHARCOAL = '#2d2f33';

export default function Logo({ className }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 214 78"
      role="img"
      aria-label={SITE.name}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={BLUE}
        d="M8 4h44a4 4 0 0 1 4 4v22a2 2 0 0 1-2 2H34a2 2 0 0 1-2-2v-4a2 2 0 0 0-2-2H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
      />
      <rect x="32" y="38" width="24" height="32" rx="4" fill={CHARCOAL} />
      <g fill={CHARCOAL} fontFamily="var(--font-inter), system-ui, sans-serif" fontWeight={800}>
        <text x="64" y="31" fontSize="31" letterSpacing="-0.8">
          TENDER
        </text>
        <text x="64" y="62" fontSize="31" letterSpacing="-0.8">
          ROCKS
        </text>
      </g>
      <text
        x="65"
        y="74"
        fontSize="7"
        fontWeight={600}
        letterSpacing="5.6"
        fill="#6b7280"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        SOLUTIONS
      </text>
    </svg>
  );
}
