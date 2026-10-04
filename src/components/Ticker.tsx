import { ticker } from '../data/profile';

const Row = () => (
  <ul className="flex shrink-0 items-center">
    {ticker.map((item) => (
      <li key={item} className="flex items-center">
        <span className="display whitespace-nowrap px-6 text-3xl uppercase sm:text-5xl">{item}</span>
        <span className="text-2xl text-accent sm:text-4xl">✳</span>
      </li>
    ))}
  </ul>
);

// Decorative band; the same skills are listed in full in the Skills section.
const Ticker = () => (
  <div className="overflow-hidden border-y border-ink bg-ink py-5 text-paper" aria-hidden="true">
    <div className="flex w-max animate-marquee">
      <Row />
      <Row />
    </div>
  </div>
);

export default Ticker;
