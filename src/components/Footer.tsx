import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../data/profile';

const Footer = () => (
  <footer className="bg-ink text-paper/55">
    <div className="page flex flex-col gap-4 border-t border-paper/15 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-xs">Built with React, TypeScript &amp; Tailwind CSS</p>
      <a href="#top" className="inline-flex items-center gap-1.5 text-paper transition-colors hover:text-accent">
        Back to top <FiArrowUp className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default Footer;
