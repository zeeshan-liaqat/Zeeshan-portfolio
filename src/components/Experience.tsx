import { experience } from '../data/profile';
import Reveal from './Reveal';
import RichText from './RichText';
import SectionHeader from './SectionHeader';

const Experience = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="page">
      <SectionHeader index="02" title="Experience" kicker="Where I work" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5 lg:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="eyebrow text-ink">{experience.period}</p>
            <h3 className="display mt-4 text-3xl uppercase sm:text-4xl">{experience.role}</h3>
            <p className="mt-3 text-lg">{experience.company}</p>
            <p className="text-muted">{experience.location}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-ink" aria-hidden="true" />
              Current role
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-7 lg:col-span-8">
          {experience.groups.map((group, g) => (
            <Reveal key={group.title} delay={0.05} className="border-t border-line py-8 first:border-t-0 first:pt-0">
              <h4 className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.14em]">
                <span className="text-accent">{String.fromCharCode(65 + g)}</span>
                {group.title}
              </h4>
              <ul className="mt-5 space-y-4">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-4 leading-relaxed text-muted">
                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-ink/40" aria-hidden="true" />
                    <span>
                      <RichText text={point} />
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
