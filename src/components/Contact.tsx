import { useState, type FormEvent } from 'react';
import { FiArrowUpRight, FiSend } from 'react-icons/fi';
import { profile } from '../data/profile';
import Reveal from './Reveal';

const details = [
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { label: 'Résumé', value: 'Download PDF', href: profile.cv, external: true },
  { label: 'Location', value: profile.location },
];

const fieldClass =
  'w-full border-0 border-b border-paper/25 bg-transparent px-0 py-3 text-paper placeholder:text-paper/40 focus:border-accent focus:outline-none focus:ring-0';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // No backend: hand the message to the visitor's mail client.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || 'your portfolio'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-ink pb-16 pt-24 text-paper md:pt-32">
      <div className="page">
        <Reveal className="border-t border-paper pt-5">
          <div className="flex items-baseline justify-between gap-4">
            <span className="eyebrow text-paper/60">(05)</span>
            <span className="eyebrow hidden text-paper/60 sm:block">Get in touch</span>
          </div>
          <h2 className="display mt-6 text-[clamp(3rem,12vw,10rem)] uppercase">
            Let&rsquo;s talk<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            <p className="max-w-lg text-lg leading-relaxed text-paper/70">
              Open to roles and projects in desktop, HMI and backend engineering — especially where reliability
              matters. The fastest way to reach me is email.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-line mt-8 inline-block break-all pb-1 text-[clamp(1.2rem,4.6vw,2.6rem)] font-medium"
            >
              {profile.email}
            </a>

            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-paper/15 bg-paper/15 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {details.map((item) => (
                <div key={item.label} className="bg-ink p-5">
                  <dt className="eyebrow text-paper/50">{item.label}</dt>
                  <dd className="mt-2">
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="link-line inline-flex items-center gap-1 pb-0.5"
                      >
                        {item.value}
                        {item.external && <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <form onSubmit={onSubmit} className="space-y-8 rounded-xl border border-paper/15 p-6 sm:p-8">
              <p className="eyebrow text-paper/60">Quick message</p>
              <div>
                <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role or project…"
                  className={`${fieldClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="btn w-full bg-paper text-ink hover:bg-accent hover:text-accent-ink"
              >
                Open in email <FiSend className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
