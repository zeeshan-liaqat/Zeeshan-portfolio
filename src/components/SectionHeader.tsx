import Reveal from './Reveal';

type SectionHeaderProps = {
  index: string;
  title: string;
  kicker?: string;
};

const SectionHeader = ({ index, title, kicker }: SectionHeaderProps) => (
  <Reveal className="mb-12 border-t border-ink pt-5 md:mb-16">
    <div className="flex items-baseline justify-between gap-4">
      <span className="eyebrow">({index})</span>
      {kicker && <span className="eyebrow hidden text-right sm:block">{kicker}</span>}
    </div>
    <h2 className="display mt-6 text-[clamp(2rem,9vw,7.5rem)] uppercase">
      {title}
      <span className="text-accent">.</span>
    </h2>
  </Reveal>
);

export default SectionHeader;
