'use client';

import { Send } from 'lucide-react';
import { SITE } from '@/lib/site';

/**
 * Opens the visitor's own email app with their message filled in. There is no server behind this
 * site to receive a form, so this never claims to have sent anything it has not.
 */
export default function ContactForm() {
  function composeEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(form.get('subject') ?? ''));
    const body = encodeURIComponent(`${form.get('message') ?? ''}\n\n${form.get('name') ?? ''}`);

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={composeEmail} className="card space-y-5">
      <h2 className="text-2xl">Write to us</h2>
      <div>
        <label htmlFor="name" className="label">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className="field" />
      </div>
      <div>
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <input id="subject" name="subject" required className="field" />
      </div>
      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea id="message" name="message" rows={6} required className="field" />
      </div>
      <button type="submit" className="btn-primary">
        Continue in your email app
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="text-sm text-slate-600">
        This opens your email app with the message ready to send to {SITE.email}.
      </p>
    </form>
  );
}
