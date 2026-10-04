import type { ProjectVisual as Kind } from '../data/profile';

// Decorative illustrations for each project card, drawn on the dark code surface.

const Label = ({ children, className = '' }: { children: string; className?: string }) => (
  <span className={`absolute font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/50 ${className}`}>
    {children}
  </span>
);

const Radar = () => {
  const blips = [
    { top: '28%', left: '62%', label: 'ESM' },
    { top: '64%', left: '30%', label: 'ECM' },
    { top: '58%', left: '72%', label: 'RDR' },
  ];
  return (
    <>
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative aspect-square h-[80%]">
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" fill="none">
            {[98, 72, 46, 20].map((r) => (
              <circle key={r} cx="100" cy="100" r={r} stroke="rgb(255 255 255 / 0.14)" />
            ))}
            <path d="M100 2v196M2 100h196" stroke="rgb(255 255 255 / 0.1)" />
          </svg>
          <div
            className="absolute inset-0 animate-sweep rounded-full"
            style={{ background: 'conic-gradient(from 0deg, transparent 0deg 280deg, rgb(var(--accent) / 0.55) 360deg)' }}
          />
          {blips.map((b) => (
            <span key={b.label} className="absolute" style={{ top: b.top, left: b.left }}>
              <span className="absolute -left-1 -top-1 h-2 w-2 animate-pulse-dot rounded-full bg-[rgb(var(--accent))]" />
              <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
              <span className="absolute left-2.5 top-[-0.45rem] font-mono text-[0.6rem] text-white/70">{b.label}</span>
            </span>
          ))}
        </div>
      </div>
      <Label className="left-4 top-4">C2 · Operator view</Label>
      <Label className="bottom-4 right-4">Fused</Label>
    </>
  );
};

// Periodic over 100 units, so translating the doubled path by half loops seamlessly.
const wave = (amp: number, phase: number) => {
  const pts: string[] = [];
  for (let x = 0; x <= 800; x += 4) {
    pts.push(`${x},${60 + amp * Math.sin(((x + phase) / 100) * Math.PI * 2)}`);
  }
  return `M${pts.join(' L')}`;
};

const Signal = () => (
  <>
    <div className="absolute inset-x-0 top-1/2 h-1/2 -translate-y-1/2 overflow-hidden">
      <div className="flex h-full w-[200%] animate-marquee-fast">
        <svg viewBox="0 0 800 120" preserveAspectRatio="none" className="h-full w-full" fill="none">
          <path d={wave(14, 50)} stroke="rgb(255 255 255 / 0.22)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <path d={wave(34, 0)} stroke="rgb(var(--accent))" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
    <Label className="left-4 top-4">COM ⇄ RF amplifier</Label>
    <span className="absolute right-4 top-4 flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/50">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      TCP link up
    </span>
    <div className="absolute inset-x-4 bottom-4 flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
      <span>Freq</span>
      <span>Power</span>
      <span>State</span>
    </div>
  </>
);

const Learning = () => (
  <>
    <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
      <span className="display text-[clamp(2.5rem,9vw,4.5rem)] text-white">10,000+</span>
      <span className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-white/60">Students revising</span>
      <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[72%] rounded-full bg-[rgb(var(--accent))]" />
      </div>
    </div>
    <Label className="left-4 top-4">GCSE · A-Level</Label>
    <Label className="bottom-4 right-4">20,000+ questions</Label>
  </>
);

const Pipeline = () => (
  <>
    <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 sm:inset-x-8">
      <div className="relative flex items-center justify-between">
        <div className="absolute inset-x-6 top-1/2 h-px bg-white/20" />
        <span className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-travel rounded-full bg-[rgb(var(--accent))] shadow-[0_0_12px_rgb(var(--accent))]" />
        {['Discover', 'Enrich', 'Outreach'].map((step, i) => (
          <span
            key={step}
            className={`relative rounded-md border px-2.5 py-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] sm:px-3 sm:text-[0.7rem] ${
              i === 2 ? 'border-[rgb(var(--accent))] bg-[rgb(var(--accent))] text-[#111113]' : 'border-white/25 bg-[rgb(var(--code))] text-white/80'
            }`}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
    <Label className="left-4 top-4">Lead pipeline</Label>
    <Label className="bottom-4 right-4">2,400+ leads / month</Label>
  </>
);

const visuals: Record<Kind, () => JSX.Element> = {
  radar: Radar,
  signal: Signal,
  learning: Learning,
  pipeline: Pipeline,
};

const ProjectVisual = ({ kind }: { kind: Kind }) => {
  const Visual = visuals[kind];
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-ink/10 bg-code dark:border-line" aria-hidden="true">
      <Visual />
    </div>
  );
};

export default ProjectVisual;
