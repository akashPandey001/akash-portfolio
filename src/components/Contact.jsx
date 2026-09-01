import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-12 rounded-3xl border border-white/10 bg-panel p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                06 / Contact
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-paper sm:text-5xl lg:text-6xl">
                Have a store, website, or role that needs a developer who can
                ship?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
                I’m open to freelance projects, agency collaborations, and
                full-time opportunities. Share the goal, timeline, and where you
                need support.
              </p>
              <a
                href="mailto:akashpandey37952@gmail.com"
                className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Let&apos;s Work Together
              </a>
            </div>

            <div className="self-end border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Email
              </p>
              <a
                href="mailto:akashpandey37952@gmail.com"
                className="mt-2 block text-base font-medium text-paper hover:text-accent"
              >
                akashpandey37952@gmail.com
              </a>

              <p className="mt-7 text-xs uppercase tracking-[0.18em] text-muted">
                Phone
              </p>
              <a
                href="tel:+919354794013"
                className="mt-2 text-base font-medium text-paper  hover:text-accent"
              >
                +91 9354794013
              </a>

              <p className="mt-7 text-xs uppercase tracking-[0.18em] text-muted  hover:text-accent">
                Location
              </p>
              <p className="mt-2 text-base font-medium text-paper  hover:text-accent">
                Ghaziabad, India
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
