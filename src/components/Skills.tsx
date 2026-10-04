import { Fragment } from 'react';
import { skills } from '../data/profile';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Skills = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="page">
      <SectionHeader index="04" title="Skills" kicker="Toolbox" />

      <dl>
        {skills.map((row, i) => (
          <Reveal
            key={row.group}
            delay={i * 0.04}
            className="group grid grid-cols-1 gap-3 border-b border-line py-6 first:pt-0 md:grid-cols-12 md:gap-10 md:py-7"
          >
            <dt className="flex items-baseline gap-3 md:col-span-3">
              <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.14em]">{row.group}</span>
            </dt>
            <dd className="text-lg leading-snug sm:text-2xl md:col-span-9">
              {row.items.map((item, j) => (
                <Fragment key={item}>
                  <span className="sm:whitespace-nowrap">
                    {item}
                    {j < row.items.length - 1 && (
                      <>
                        <span className="sr-only">,</span>
                        <span className="pl-2 text-accent" aria-hidden="true">
                          /
                        </span>
                      </>
                    )}
                  </span>{' '}
                </Fragment>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Skills;
