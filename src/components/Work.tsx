import { FiArrowUpRight, FiLock } from 'react-icons/fi';
import { projects } from '../data/profile';
import ProjectVisual from './ProjectVisual';
import Reveal from './Reveal';
import RichText from './RichText';
import SectionHeader from './SectionHeader';

const Work = () => (
  <section id="work" className="py-24 md:py-32">
    <div className="page">
      <SectionHeader index="03" title="Work" kicker="Selected projects" />

      <div className="grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1} className="h-full">
            <article className="group flex h-full flex-col">
              <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <ProjectVisual kind={project.visual} />
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-b border-line pb-4">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <span className="eyebrow">{project.kind}</span>
              </div>

              <h3 className="display mt-6 text-3xl uppercase sm:text-4xl">{project.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/85">{project.summary}</p>

              <ul className="mt-5 space-y-3">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/40" aria-hidden="true" />
                    <span>
                      <RichText text={point} />
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.link ? (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line inline-flex items-center gap-1 pb-0.5 font-medium"
                  >
                    {project.link.label}
                    <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                    <FiLock className="h-3.5 w-3.5" aria-hidden="true" />
                    Confidential
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
