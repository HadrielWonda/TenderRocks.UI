import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-page flex min-h-screen flex-col items-start justify-center py-24">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 text-4xl">We could not find that page</h1>
      <p className="lead mt-4 max-w-prose">
        The address may be mistyped, or the page may have moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Go to the home page
      </Link>
    </main>
  );
}
