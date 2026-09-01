import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="01 / About"
            title="Practical development, with the details taken seriously."
          />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal delay={0.05}>
            <div className="border-l border-accent/50 pl-5">
              <p className="font-display text-2xl tracking-[-0.035em] text-paper">Based in Ghaziabad, India.</p>
              <p className="mt-3 text-sm leading-6 text-muted">Working across e-commerce, CMS builds, and responsive frontend development.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                I’m a web developer who enjoys turning brand direction and business requirements into websites that feel clear, fast, and dependable. My work spans Shopify theme customization, WordPress builds, responsive frontend implementation, store setup, integrations, and everyday site improvements.
              </p>
              <p>
                I care about the handoff as much as the launch: clean layouts, sensible structure, maintainable content, and an experience that works well across devices. I’m comfortable contributing independently or as part of a design, marketing, or development team.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
