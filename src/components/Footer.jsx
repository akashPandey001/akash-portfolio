const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-end lg:px-10">
        <div>
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-[-0.03em] text-paper"
          >
            Akash Pandey<span className="text-accent">.</span>
          </a>
          <p className="mt-2 text-sm text-muted">
            Shopify &amp; WordPress Developer
          </p>
        </div>
        <div className="md:text-right">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-muted transition-colors hover:text-paper"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted md:justify-end">
            <span>
              <a
                href="https://github.com/akashPandey001"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>

            <span>
              <a
                href="https://www.linkedin.com/in/akash-pandey-a50aa4235"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </div>

          <p className="mt-5 text-xs text-muted">
            © {new Date().getFullYear()} Akash Pandey. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}
