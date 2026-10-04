import { education, experience, focusAreas, profile } from '../data/profile';
import Reveal from './Reveal';
import RichText from './RichText';
import SectionHeader from './SectionHeader';

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="page">
      <SectionHeader index="01" title="About" kicker="Profile" />

      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <Reveal className="space-y-6 md:col-span-7">
          <p className="text-2xl leading-snug text-ink sm:text-3xl">
            <RichText text={profile.summary[0]} />
          </p>
          {profile.summary.slice(1).map((paragraph) => (
            <p key={paragraph} className="max-w-2xl text-lg leading-relaxed text-muted">
              <RichText text={paragraph} />
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
          <dl className="divide-y divide-line border-y border-line">
            <div className="py-5">
              <dt className="eyebrow">Currently</dt>
              <dd className="mt-2 font-medium">
                {experience.role} at {experience.company}
              </dd>
              <dd className="text-sm text-muted">{experience.location}</dd>
            </div>
            {education.map((item) => (
              <div key={item.degree} className="py-5">
                <dt className="eyebrow">{item.period}</dt>
                <dd className="mt-2 font-medium">{item.degree}</dd>
                <dd className="text-sm text-muted">
                  {item.school} · {item.location}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <ol className="mt-20 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:mt-28 md:grid-cols-3">
        {focusAreas.map((area, i) => (
          <li key={area.title} className="bg-paper">
            <Reveal delay={i * 0.08} className="flex h-full flex-col p-6 sm:p-8 md:p-6 lg:p-8">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="display mt-8 text-2xl uppercase sm:text-3xl md:text-2xl lg:text-3xl">{area.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{area.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default About;
