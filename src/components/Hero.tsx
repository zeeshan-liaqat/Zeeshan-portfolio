import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { profile } from '../data/profile';
import CodeCard from './CodeCard';

const yearsSince = (start: Date) => {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (now.getMonth() < start.getMonth()) years -= 1;
  return Math.max(years, 1);
};

const stats = [
  { value: `${yearsSince(profile.careerStart)}+`, label: 'Years building production software' },
  { value: '10k+', label: 'Students served by GradeWise.ai' },
  { value: '20k+', label: 'Questions in its SQL Server bank' },
  { value: '2.4k+', label: 'Leads a month through A.T.L.A.S.' },
];

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
    <div className="blueprint pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

    <div className="page">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow flex items-center gap-2.5 text-ink">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-accent" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          Hi, I&rsquo;m {profile.name}
        </p>
        <p className="eyebrow">Based in {profile.location}</p>
      </div>

      <motion.h1
        className="display mt-8 text-[clamp(2.25rem,12vw,10rem)] uppercase md:mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
      >
        <span className="sr-only">{profile.name}, </span>
        <span className="block">Software</span>
        <span className="block">
          Engineer
          <span className="animate-blink text-accent" aria-hidden="true">
            _
          </span>
        </span>
      </motion.h1>

      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
        <motion.div
          className="flex flex-col justify-between gap-10 md:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <p className="max-w-md text-lg leading-relaxed text-muted sm:text-xl">
            <span className="text-ink">{profile.leadIntro}</span> — {profile.lead}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              See selected work <FiArrowDownRight className="h-4 w-4" />
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Résumé <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="min-w-0 md:col-span-7 md:pl-6 lg:pl-16"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
        >
          <CodeCard />
        </motion.div>
      </div>

      <dl className="mt-16 grid grid-cols-2 border-t border-line md:mt-24 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col border-line py-6 pr-4 ${i % 2 === 1 ? 'border-l pl-4 md:pl-6' : ''} ${
              i >= 2 ? 'border-t md:border-t-0' : ''
            } ${i === 2 ? 'md:border-l md:pl-6' : ''}`}
          >
            <dt className="order-2 mt-2 text-sm text-muted">{stat.label}</dt>
            <dd className="display order-1 text-3xl min-[360px]:text-4xl sm:text-5xl md:text-4xl lg:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
