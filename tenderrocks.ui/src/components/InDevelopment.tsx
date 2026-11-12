import Link from 'next/link';

/** Says plainly that a section is not ready yet, and what it will hold. */
export default function InDevelopment({ topics }: { readonly topics: readonly string[] }) {
  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">What to expect</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-lg text-slate-700">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
        <aside className="card self-start bg-brand-50 p-8">
          <h2 className="text-xl">In development</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            This section is being prepared. To hear when it opens, or to contribute, write to us.
          </p>
          <Link href="/contact" className="btn-secondary mt-6">
            Contact us
          </Link>
        </aside>
      </div>
    </section>
  );
}
