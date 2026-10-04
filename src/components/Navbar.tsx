import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navLinks, profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="display text-lg uppercase tracking-tight">{profile.name}</span>
          <span className="mt-1 h-1.5 w-3 bg-accent transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`group flex items-baseline gap-1.5 rounded-full px-3 py-2 text-sm transition-colors ${
                  active === link.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                <span className={`font-mono text-[0.65rem] ${active === link.id ? 'text-accent' : ''}`}>
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={themeLabel}
            title={themeLabel}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
          >
            {theme === 'dark' ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          </button>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-primary hidden py-2.5 lg:inline-flex">
            Résumé <FiArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper md:hidden"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto bg-paper md:hidden"
          >
            <ul className="page flex flex-col pt-6">
              {navLinks.map((link, i) => (
                <li key={link.id} className="border-b border-line">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className="display text-4xl uppercase">{link.label}</span>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="page mt-8 flex flex-col gap-3 pb-10">
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download résumé <FiArrowUpRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
