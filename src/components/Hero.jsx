import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-[72px]">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute right-[-12rem] top-28 -z-10 h-96 w-96 rounded-full bg-accent/[0.08] blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 lg:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent"
          >
            <span className="h-px w-10 bg-accent" />
            Ghaziabad, India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-balance max-w-5xl font-display text-[clamp(3.5rem,9vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-paper"
          >
            Akash Pandey
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-8 max-w-3xl"
          >
            <p className="font-display text-2xl font-medium tracking-[-0.035em] text-paper sm:text-3xl">
              Shopify &amp; WordPress Developer
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              I build responsive, conversion-aware storefronts and business websites that look polished, stay maintainable, and support real commercial goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-accent/60 hover:text-accent"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 border-l border-white/10 pl-6 lg:mt-20 lg:justify-self-end lg:pl-8"
          aria-label="Availability summary"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Currently focused on</p>
          <div className="mt-5 space-y-4 font-display text-lg text-paper">
            <p>Shopify storefronts</p>
            <p>WordPress business sites</p>
            <p>Frontend implementation</p>
          </div>
          <p className="mt-7 max-w-xs text-sm leading-6 text-muted">
            Open to freelance collaborations, agency work, and full-time development opportunities.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
