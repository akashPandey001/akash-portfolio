import { useState } from 'react';
import { motion } from 'framer-motion';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-[-0.03em] text-paper">
          Akash<span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted transition-colors hover:text-paper"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <motion.nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-white/10 bg-ink md:hidden"
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4 sm:px-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-paper"
            >
              {link}
            </a>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}
