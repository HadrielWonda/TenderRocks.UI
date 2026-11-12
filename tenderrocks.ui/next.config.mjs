const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const LABORATORY_URL = 'https://trs.tenderrocksolutions.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  // The laboratory used to live at /trslaboratory on this site. It now has its own site, so old
  // links and bookmarks are sent there instead of to a "not found" page.
  async redirects() {
    return [
      { source: '/trslaboratory', destination: LABORATORY_URL, permanent: true },
      { source: '/trslaboratory/about', destination: `${LABORATORY_URL}/about`, permanent: true },
      {
        source: '/trslaboratory/services',
        destination: `${LABORATORY_URL}/tests`,
        permanent: true,
      },
      { source: '/trslaboratory/jobs', destination: `${LABORATORY_URL}/careers`, permanent: true },
      {
        source: '/trslaboratory/contact',
        destination: `${LABORATORY_URL}/contact`,
        permanent: true,
      },
      { source: '/trslaboratory/:path*', destination: LABORATORY_URL, permanent: true },
    ];
  },
};

export default nextConfig;
