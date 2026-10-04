type Token = [className: string, text: string];

const I = '    ';

// A tiny hand-highlighted C# snippet; each line is a list of [class, text] tokens.
const lines: Token[][] = [
  [['tok-com', '// Engineer.cs']],
  [['tok-kw', 'public sealed class '], ['tok-type', 'Engineer'], ['tok-p', ' : '], ['tok-type', 'IEngineer']],
  [['tok-p', '{']],
  [['', I], ['tok-kw', 'public string '], ['tok-fn', 'Name'], ['tok-p', ' => '], ['tok-str', '"Zeeshan Liaqat"'], ['tok-p', ';']],
  [['', I], ['tok-kw', 'public string '], ['tok-fn', 'Base'], ['tok-p', ' => '], ['tok-str', '"Rawalpindi, PK"'], ['tok-p', ';']],
  [],
  [['', I], ['tok-kw', 'public string'], ['tok-p', '[] '], ['tok-fn', 'Stack'], ['tok-p', ' =>']],
  [
    ['', I + I],
    ['tok-p', '['],
    ['tok-str', '"C#"'],
    ['tok-p', ', '],
    ['tok-str', '"WPF"'],
    ['tok-p', ', '],
    ['tok-str', '"ASP.NET Core"'],
    ['tok-p', ', '],
    ['tok-str', '"SQL"'],
    ['tok-p', '];'],
  ],
  [],
  [['', I], ['tok-kw', 'public async '], ['tok-type', 'Task'], ['tok-p', ' '], ['tok-fn', 'ShipAsync'], ['tok-p', '('], ['tok-type', 'Mission'], ['tok-p', ' m)']],
  [['', I], ['tok-p', '{']],
  [['', I + I], ['tok-kw', 'var '], ['tok-p', 'feeds = '], ['tok-kw', 'await '], ['tok-fn', 'Fuse'], ['tok-p', '(Esm, Ecm, Radar);']],
  [['', I + I], ['tok-kw', 'await '], ['tok-p', 'm.'], ['tok-fn', 'DeliverAsync'], ['tok-p', '(feeds);']],
  [['', I], ['tok-p', '}']],
  [['tok-p', '}']],
];

const CodeCard = () => (
  <figure
    className="relative overflow-hidden rounded-xl border border-ink/10 bg-code text-[#e9e7e2] shadow-[10px_10px_0_0_rgb(var(--accent))] dark:border-line"
    aria-label="C# code snippet describing Zeeshan as a class: name, base, stack and a ShipAsync method"
  >
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" />
      </div>
      <span className="font-mono text-[0.7rem] text-white/50">Engineer.cs</span>
    </div>

    <pre className="overflow-x-auto py-4 font-mono text-[0.66rem] leading-6 sm:text-[0.8rem]" aria-hidden="true">
      <code className="block min-w-max">
        {lines.map((tokens, n) => (
          <span key={n} className="flex">
            <span className="w-8 shrink-0 select-none pr-3 text-right text-white/25 sm:w-10 sm:pr-4">{n + 1}</span>
            <span className="pr-3 sm:pr-5">
              {tokens.map(([cls, text], j) => (
                <span key={j} className={cls}>
                  {text}
                </span>
              ))}
              {n === lines.length - 1 && (
                <span className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.2em] animate-blink bg-[rgb(var(--accent))]" />
              )}
            </span>
          </span>
        ))}
      </code>
    </pre>

    <figcaption className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[0.65rem] text-white/45">
      <span>main</span>
      <span>C# · UTF-8 · LF</span>
    </figcaption>
  </figure>
);

export default CodeCard;
